import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PostServices from '../API/PostServices';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/loading/Loader';
import { useFetching } from '../hooks/useFetching';

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const navigate = useNavigate();

  const [fectchPostById, isLoading, error] = useFetching(async () => {
    const responce = await PostServices.getById(id);
    setPost(responce.data);
  });

  useEffect(() => {
    fectchPostById();
  }, []);

  return (
    <div>
      {error && <h1>{error}</h1>}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1>Post number : {post.id}</h1>
          <div>{post.title}</div>
        </div>
      )}
      <MyButton onClick={() => navigate(-1)}>Go back</MyButton>
    </div>
  );
}

export default PostPage;
