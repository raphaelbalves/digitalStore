import React from 'react'
import style from "./Header.module.css"
import logo from '../assets/logo-digital-college.svg'

const Header = () => {
  return (
    <div className={style.box}>
      <img src={logo} />
      <p>Digital College</p>
    </div>
  )
}

export default Header