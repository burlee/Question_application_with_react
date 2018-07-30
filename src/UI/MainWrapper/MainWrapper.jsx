import React from 'react'
import classes from './MainWrapper.css'

export default (props) => {
  return (
    <main className={classes.MainWrapper}>
      {props.children}
    </main>
  )
}
