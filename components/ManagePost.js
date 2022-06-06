import Image from "next/image";
import PostActivityIcon from "./PostActivityIcon";
import Posts from "./Posts";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import db from "../firebase";

import {
  PhotographIcon,
  TagIcon,
  EmojiHappyIcon,
  XCircleIcon,
} from "@heroicons/react/outline";

function ManagePost() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const inputFileRef = useRef(null);
  const [imageToPost, setImageToPost] = useState();

  const uploadPostImage = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (e) => {
      setImageToPost(e.target.result);
    };
  };

  const removeImage = () => {
    inputFileRef.current.value = "";
    inputRef.current.value = "";
    setImageToPost(null);
  };

  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    const doc = await db.addCollection("posts", {
      message: inputRef.current.value,
      name: session.user.name,
      image: session.user.image,
      email: session.user.email,
      timestamp: db.timestamp,
    });

    if (doc)
      if (imageToPost) {
        const imageName = `${doc.id}-${inputFileRef.current.files[0].name}`;
        await db.uploadFile(imageToPost, imageName);
        const postImageUrl = await db.getPostImageUrl(imageName);
        await db.alterCollection("posts", doc.id, { postImage: postImageUrl });
      }
    removeImage();
  };

  return (
    <div>
      <form>
        <div className=" mt-5 px-3 pt-3 rounded-md bg-zinc-700">
          <div className="flex items-center space-x-3 mb-2">
            <Image
              src={session.user.image}
              width={40}
              height={40}
              alt="profile pic"
              objectFit="contain"
              layout="fixed"
              className="rounded-full cursor-pointer hover:brightness-90 transition-all animation"
            />

            <input
              type="text"
              ref={inputRef}
              className="grow outline-none bg-zinc-300 rounded-2xl px-3 py-2 placeholder-zinc-700"
              placeholder={`What's on your mind, ${session.user.name}?`}
            />

            {imageToPost && (
              <div className="flex space-x-2">
                <Image
                  src={imageToPost}
                  height={80}
                  width={80}
                  alt="post"
                  className="object-cover"
                />
                <XCircleIcon
                  onClick={removeImage}
                  className="cursor-pointer h-7 text-red-500"
                />
              </div>
            )}
          </div>
          <hr className="border-zinc-500" />

          <div className="flex items-center py-3 justify-evenly">
            <PostActivityIcon
              onClick={() => inputFileRef.current.click()}
              Icon={PhotographIcon}
              Iconcolor="text-green-500"
              text="Photo/video"
              textColor="text-zinc-300"
            />
            <input
              onChange={uploadPostImage}
              ref={inputFileRef}
              id="inputFileRef"
              type="file"
              hidden
              accept="image/jpeg, image/png"
            />
            <PostActivityIcon
              Icon={TagIcon}
              Iconcolor="text-blue-500"
              text="Tag/friends"
              textColor="text-zinc-300"
            />
            <PostActivityIcon
              Icon={EmojiHappyIcon}
              Iconcolor="text-yellow-600"
              text="Feeling/activity"
              textColor="text-zinc-300"
            />
          </div>
        </div>
        <button type="submit" onClick={sendPost}></button>
      </form>
      <Posts />
    </div>
  );
}

export default ManagePost;
