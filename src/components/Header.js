import React from 'react'
import Style from './Header.module.css'
import logo from '../asset/image/logo.svg'
import avatar from '../asset/image/Ellipse 1.png'
import { AiOutlineSearch } from "react-icons/ai";
function Header() {
  return (
    <div className={Style.headerContainer}>
      <img src={logo} alt="logo" width={120} height={60} />

      <div className={Style.inputContainer}>
      <input placeholder='Find apps and search' className={Style.input} />
      <AiOutlineSearch color='#9B9B9B' size={25} />
      </div>

      <div className={Style.avatar}>
          <img alt='' width={40} height={40} src={avatar} />
      </div>


    </div>
  )
}

export default Header