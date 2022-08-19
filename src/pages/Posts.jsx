import React, { useState } from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

import "../styles/App.css";
import PostFilter from "../components/PostFilter/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import usePost from "../hooks/usePost";
import { useEffect } from "react";
import PostServices from "../API/PostServices"
import Loader from "../components/UI/loading/Loader";
import { UseFetching } from "../hooks/UseFetching";
import { getPageCount } from "../utils/getPageCount";

import Pagination from "../components/Pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const [totalPage, setTotalpage] = useState("fdsf");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSeachedPost = usePost(posts, filter.sort, filter.query);
  const [fectchPosts, isLoading, error] = UseFetching(async () => {
    const responce = await PostServices.getAll(limit, page);
    setPosts(responce.data);
    setTotalpage(getPageCount(responce.headers["x-total-count"]));
  });

  useEffect(() => {
    fectchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Create post</MyButton>
      <PostFilter filter={filter} setFilter={setFilter} />

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </MyModal>
      {error && <h1>{error}</h1>}
      {isLoading ? (
        <Loader />
      ) : (
        <PostList
          posts={sortedAndSeachedPost}
          title={"List"}
          remove={removePost}
        />
      )}
      <Pagination totalPage={totalPage} page={page} setPage={setPage} />

    </div>
  );
}

export default Posts;
