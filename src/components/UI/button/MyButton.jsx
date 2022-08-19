import React from 'react'
import classes from "./MyButton.module.css"

function MyButton({children, ...props}) {
  return (
    <button {...props} className={classes.mybtn}>{children}</button>
  )
}

export default MyButton