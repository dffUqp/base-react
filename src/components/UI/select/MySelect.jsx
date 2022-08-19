import React from "react";
import classes from "./MySelect.module.css";

function MySelect({ option, defaultValue, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      className={classes.mySelect}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {option.map((item) => (
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default MySelect;
