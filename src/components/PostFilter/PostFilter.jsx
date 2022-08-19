import React from "react";

import Myselect from "../UI/select/MySelect";
import Myinput from "../UI/input/Myinput";

import classes from "./PostFilter.module.css";

function PostFilter({ filter, setFilter }) {
  console.log(filter);
  return (
    <div className={classes.Postfilter}>
      <Myinput
     placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <Myselect
        option={[
          { value: "title", name: "By title" },
          { value: "body", name: "By discription" },
        ]}
        defaultValue={"Sort by"}
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  );
}

export default PostFilter;
