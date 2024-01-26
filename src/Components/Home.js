import React, { useEffect } from "react";
import { useState } from "react";
import Todos from "./Todos";
import SideBar from "./SideBar";

export default function Home() {
  let storage;
  if(localStorage.hasOwnProperty('todos')){
    storage = JSON.parse(localStorage.getItem('todos'));
  }
  else{
    storage = [
      {
        key: 1,
        title: "Welcome to My Todo",
        dec: "You can manage your work here",
        is_editing: false,
      },
    ]
  }

  const [todos, setTodos] = useState(storage);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDel = (data) => {
    setTodos(
      todos.filter((elem) => {
        return elem !== data;
      })
    );
  };

  const onEdit = (data) => {
    setTodos(
      todos.map((item) => {
        if (data === item) {
          item.is_editing = true;
        }
        return item;
      })
    );
  };

  const onCancel = (data) => {
    setTodos(
      todos.map((item) => {
        if (data === item) {
          item.is_editing = false;
        }
        return item;
      })
    );
  };

  const onEditSubmit = (data, title, desc) => {
    setTodos(
      todos.map((item) => {
        if (data === item) {
          item.title = title;
          item.dec = desc;
          item.is_editing = false;
        }
        return item;
      })
    );
  };

  const submit = (title, desc) => {
    let srn = todos[0] ? todos[0].key + 1 : 0;
    let item = {
      key: srn,
      title: title,
      dec: desc,
      is_editing: false,
    };
    setTodos([item, ...todos]);
  };
  return (
    <>
      <div>
        <Todos
          items={todos}
          onDel={onDel}
          onEdit={onEdit}
          onCancel={onCancel}
          onEditSubmit={onEditSubmit}
        />
        <SideBar submit={submit} />
      </div>
    </>
  );
}
