import React, { useState } from "react";

export default function Form({ submit, cancel, item }) {
  const [title, setTitle] = useState(item.title);
  const [desc, setDesc] = useState(item.dec);
  // console.log(title, desc)
  function onSubmit(e) {
    if (title && desc) {
      submit(item, title, desc);
    }
    e.preventDefault();
  }

  return (
    <div>
      <div>
        <h5>
          <input
            onChange={(elem) => {
              setTitle(elem.target.value);
            }}
            type="text"
            placeholder="Title"
            value={title}
            id="title"
          />
        </h5>
        <p>
          <input
            onChange={(elem) => {
              setDesc(elem.target.value);
            }}
            autoFocus
            type="text"
            placeholder="Description"
            value={desc}
            id="desc"
          />
        </p>
        <button onClick={onSubmit}>
          Save
        </button>
        <button
          onClick={() => {
            cancel(item);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
