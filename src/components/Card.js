import React from 'react'
import Style from './Card.module.css'
import img from '../asset/image/image1.png'
import { NavLink } from 'react-router-dom'
function Card({name,desc,color}) {
  return (
    <NavLink to="/Enterprise">
    <div className={Style.container}>
    <div style={{backgroundColor:`${color}`,width:"100%",height:"223px",display:"flex",alignItems:"center",justifyContent:"center",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
        <img alt='' width={150} height={150} src={img} />
    </div>
        <div className={Style.desc}>
           <p style={{color:"#212529",fontWeight:"700",fontSize:"16px"}}>{name}</p>
           <p style={{fontSize:"14px",color:"#5B5B5B"}}>{desc}</p>
        </div>
    </div>
    </NavLink>
  )
}

export default Card