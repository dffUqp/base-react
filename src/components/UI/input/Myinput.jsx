import React from 'react'
import classes from "./Myinput.module.css"

function Myinput(props) {
  return (
    <input className={classes.myinput} {...props} />
  );
}

export default Myinput