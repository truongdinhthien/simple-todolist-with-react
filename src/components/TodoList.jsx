import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { v1 as uuidv1 } from 'uuid';

const TodoList = () => {
  const [todoList, setTodoList] = useState([
    {
      id: uuidv1(),
      content: "This is a long content",
      isActive: true,
    },
  ]);

  const renderItem = () => {
    return todoList.map((value, index) => {
      return (
        <li key = {index}>
          <TodoItem value={value} deleteItem = {deleteItem} updateItem = {updateItem}></TodoItem>
        </li>
      );
    });
  };

  const addItem = (data) => {
      setTodoList ([
          ...todoList,
          {
              id : uuidv1(),
              content : data,
              isActive : true
          }
      ])
  }

  const deleteItem = (value) => {
      setTodoList(todoList.filter(item => item.id !== value))
  }

  const updateItem = (value) => {
      var index = todoList.findIndex(item => item.id === value)

      todoList[index].isActive = !todoList[index].isActive;

      setTodoList([...todoList]);
  }

  return (
    <div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <ul>{renderItem()}</ul>
      </div>
      <TodoForm addItem = {addItem}></TodoForm>
    </div>
  );
};

export default TodoList;
