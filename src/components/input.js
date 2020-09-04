import React from "react";

export default function Input(props) {
  const sub = (e)=>{
    e.preventDefault()
    let data = [...props.items,{'key':Math.random,'content':e.target.inp.value.trim()}]
    props.update(data)
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
