import Image from "next/image";
import { ShareIcon, ChatIcon, ThumbUpIcon } from "@heroicons/react/solid";

function Post({ postImage, name, message, image, date }) {
  return (
    <div className="bg-white shadow-sm my-5 rounded-lg">
      <div className="p-5 mb-10">
        <div className="flex items-center space-x-2">
          <Image
            src={image}
            width={40}
            height={40}
            alt="Profile image"
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-xs text-zinc-900">
              {new Date(date?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="mt-3 -mb-3">{message}</p>
      </div>
      {postImage && (
        <div className="h-56 md:h-80 w-full relative">
          <Image
            src={postImage}
            layout="fill"
            objectFit="cover"
            alt="Profile image"
          />
        </div>
      )}
      <hr />
      <div className="flex justify-around py-1">
        <div className="flex items-center justify-center space-x-2 px-4 rounded-lg py-2 cursor-pointer hover:bg-zinc-200">
          <ThumbUpIcon className="h-6 text-zinc-400" />
          <span>Like</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer px-4 rounded-lg py-2 hover:bg-zinc-200">
          <ChatIcon className="h-6 text-zinc-400" />
          <span>Comment</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer px-4 rounded-lg py-2 hover:bg-zinc-200">
          <ShareIcon className="h-6 text-zinc-400" />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
