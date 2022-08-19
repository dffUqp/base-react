import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import Myinput from "./UI/input/Myinput";


function PostForm({ createPost }) {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (event, setPosts) => {
    event.preventDefault();

    const newPost = { id: Date.now(), ...post };
    setPost({ title: " ", body: " " });
    createPost(newPost);
  };

  return (
    <form>
      <Myinput
        type="text"
        placeholder="Name of post"
        value={post.title}
        onChange={(e) => {
          setPost({ ...post, title: e.target.value });
        }}
      />
      <Myinput
        type="text"
        placeholder="Discriptiomn"
        value={post.body}
        onChange={(e) => {
          setPost({ ...post, body: e.target.value });
        }}
      />
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
}

export default PostForm;
