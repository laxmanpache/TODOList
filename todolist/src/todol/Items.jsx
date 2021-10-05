import React from 'react'

const Items = (props) => {

   
    return (
        <li>{props.text.name} <i className="far fa-edit" onClick={()=>{props.oncliks(props.text.id)}}></i><i  onClick={()=>{props.onselect(props.text.id)}} className="far fa-trash-alt"></i></li>
    )
}

export default Items;
