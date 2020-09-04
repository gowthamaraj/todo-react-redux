import React from "react";
import ListItem from './ListItem'

function ListWrapper(props) {
    const del = (key)=>{
       let data = props.items.filter((item)=>{
            return item.key !== key
        })
        props.update(data)
    }
  return (
    <ul className="comp_list_wrapper list-group">
    {props.items.map((item)=>{
        return (<ListItem item={item} del={del}/>)
    })}
    </ul>
  );
}

export default ListWrapper;
