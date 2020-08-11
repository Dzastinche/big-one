import React from 'react';
import '../directory/directory.scss'
import Menu from '../menu-item/menu-item'
import Sections from '../../sections'

class Directory extends React.Component{
    constructor(props){
        super(props)
        this.state={
            section:Sections
        }
    }
    render(){
        return(
            <div className="directory-menu">
        {this.state.section.map((sec)=>
        {return <Menu title={sec.title} urlImage={sec.imageUrl}/>}
        )}
            </div>
        )
    }
}
export default Directory