import React from "react";

const TodoItem = ({ item, deleteItem }) => {
  return (
    <div>
      <li key={item.id} className="todo-container">
        <div className="todo-text-container">
          <input type="checkbox" className="checkbox"></input>
          <div className="todo-text">{item.value}</div>
        </div>
        <button className="btn" onClick={() => deleteItem(item.id)}>
          Complete
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
