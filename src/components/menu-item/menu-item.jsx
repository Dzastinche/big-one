import React from 'react'
import '../menu-item/menu-item.scss'
import {withRouter} from 'react-router-dom'
 
const Meni =((props)=>{
    return(
    <div className={`menu-item ${props.size}`} onClick={()=>props.history.push(`${props.match.url}${props.linkUrl}`)}>
    <div style={{backgroundImage:`url(${props.imageUrl})`}}className="background"></div>
    <div className='content'>
      <div className='title'>{props.title.toUpperCase()}</div>
      <span className='subtitle'>BUY NOW</span>
    </div>
  </div>)
})

export default withRouter(Meni)