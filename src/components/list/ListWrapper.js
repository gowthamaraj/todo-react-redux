import React from "react";
import ListItem from './ListItem'
import {useSelector} from 'react-redux'

function ListWrapper(props) {
  const items = useSelector((state)=>state.data)

  return (
    <ul className="comp_list_wrapper list-group">
    {items.map((item)=>{
        return (<ListItem key={item.key} item={item}/>)
    })}
    </ul>
  );
}



export default ListWrapper;
