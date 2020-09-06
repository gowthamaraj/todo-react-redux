import React from "react";
import {useDispatch} from 'react-redux'

 function Input() {
   const dispatch = useDispatch()
  const sub = (e)=>{
    e.preventDefault()
    let data ={'key':Math.random(),'content':e.target.inp.value.trim()}
    dispatch({type:"UPDATE", payload:data})
    e.target.inp.value = ''
  }
  return (
      <form className="input-group comp_input" onSubmit={sub}>
        <input
          type="text"
          name='inp'
          className="form-control"
          placeholder="Add your item"
        />
        <div className="input-group-append">
          <button className="btn btn-orange" type="submit">
            Add
          </button>
        </div>
      </form>
  );
}
export default Input