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
            <div className="directory-menu" >
        {this.state.section.map(({id,history,match,...ostalo})=>
        {return <Menu key={id} {...ostalo}/>}
        )}
            </div>
        )
    }
}
export default Directory