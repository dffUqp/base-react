import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

function PostItem(props) {
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number} {props.post.title}
        </strong>
        <p>{props.post.body}</p>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/post/${props.post.id}`)}>
          Создать
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
