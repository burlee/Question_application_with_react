import React from 'react'
import LogoJavaScript from '../../ASSETS/JavaScriptLogo.png'
import classes from './Header.css'

export default () => {
  return (
    <header className={classes.Header}>
      <h1>Przekonaj się na ile znasz <span className={classes.Script}>Java</span>Script</h1>
      <img src={LogoJavaScript} alt="JavaScript"/>
    </header>
  )
}
