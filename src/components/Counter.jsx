import React from "react";
import { useState } from "react";

function Counter() {
  const [likes, setlikes] = useState(0);

  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={() => setlikes(likes + 1)}>increment</button>
      <button onClick={() => setlikes(likes - 1)}>decrement</button>
    </div>
  );
}

export default Counter;
