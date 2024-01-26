import React from "react";
import TodoItem from "./TodoItem";
import Edit from "./Edit";

export default function Todos(prop) {
  return (
    <div>
      <h2>Todo List</h2>
      <div>
        {prop.items.length ? (
          prop.items.map((item) => {
            return item.is_editing ? (
              <Edit
                item={item}
                submit={prop.onEditSubmit}
                cancel={prop.onCancel}
              />
            ) : (
              <TodoItem
                key={item.key}
                data={item}
                onDel={prop.onDel}
                onEdit={prop.onEdit}
              />
            );
          })
        ) : (
          <h3>No Todos to show</h3>
        )}
      </div>
    </div>
  );
}
