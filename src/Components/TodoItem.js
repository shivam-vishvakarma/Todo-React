import React from "react";

export default function TodoItem({data, onDel, onEdit}) {
  return (
    <div>
      <div>
        <h5>{data.title?data.title:"Card title"}</h5>
        <p>
            {data.dec?data.dec:"No description provided"}
        </p>
        <button onClick={()=>{onEdit(data)}}>
          Edit
        </button>
        <button onClick={()=>{onDel(data)}}>
          Delete
        </button>
      </div>
    </div>
  );
}
