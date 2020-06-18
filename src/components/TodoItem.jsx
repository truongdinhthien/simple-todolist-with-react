import React from "react";

const TodoItem = ({value, deleteItem, updateItem}) => {
  console.log(value);
  return (
    <span>
        {value.id} ---- {value.content} ---- {value.isActive ? "Active" : "Inactive"}
        <button onClick = {() => deleteItem(value.id)}>Xoa</button>
        <button onClick = {() => updateItem(value.id)}>Sua</button>
    </span>
  );
};

export default TodoItem;
