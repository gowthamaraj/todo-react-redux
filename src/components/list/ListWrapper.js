import React from "react";
import ListItem from './ListItem'
import {connect} from 'react-redux'

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
        return (<ListItem key={item.key} item={item} del={del}/>)
    })}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {items:state.data}
}

export default connect(mapStateToProps)(ListWrapper);
