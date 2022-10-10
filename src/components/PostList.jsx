import React from "react";
import PostItem from "./PostItem";

function PostList({ posts, title, remove }) {
  if (posts.length === 0) {
    return <h1 style={{ textAlign: "center" }}>0 Post</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post) => (
        <PostItem number={post.id} remove={remove} post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
