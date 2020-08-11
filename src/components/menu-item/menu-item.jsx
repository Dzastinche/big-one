import React from 'react'
import '../menu-item/menu-item.scss'
 
const Meni =((props)=>{
    return(
    <div className='menu-item'>
    <div style={{backgroundImage:`url(${props.urlImage})`}}className="background"></div>
    <div className='content'>
      <div className='title'>{props.title}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>)
})

export default Meni