import { useCollection } from "react-firebase-hooks/firestore";
import { query, orderBy } from "firebase/firestore";

import db from "../firebase";
import Post from "./Post";

function Posts() {
  const [postsList, loading, error] = useCollection(
    query(db.getCollection("posts"), orderBy("timestamp", "desc"))
  );

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      {postsList?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          email={post.data().email}
          image={post.data().image}
          message={post.data().message}
          postImage={post.data().postImage}
          date={post.data().timestamp}
        />
      ))}
    </div>
  );
}

export default Posts;
