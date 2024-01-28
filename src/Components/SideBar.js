import React, { useState } from "react";
import './SideBar.css'

export default function SideBar({submit}) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  function onSubmit(e) {
    if (title && desc) {
      submit(title, desc);
      setTitle("");
      setDesc("");
    }
    e.preventDefault();
  }
  return (
    <div className="side">
      <h2>Add To-Do</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(elem) => {
              setTitle(elem.target.value);
            }}
            id="title"
          />
        </div>
        <div>
          <label htmlFor="desc">
            Description
          </label>
          <textarea 
            id="desc"
            value={desc}
            onChange={(elem)=>{
              setDesc(elem.target.value);
            }}>
          </textarea>
          {/* <input
            type="text"
            value={desc}
            onChange={(elem) => {
              setDesc(elem.target.value);
            }}
            id="desc"
          /> */}
        </div>
        <button
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
