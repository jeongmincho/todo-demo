import React from "react";

const TodoInput = ({ newItem, updateInput, addItem }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-text"
        placeholder="Write a todo"
        value={newItem}
        onChange={e => updateInput(e.target.value)}
      />
      <button
        className="add-btn"
        onClick={() => addItem(newItem)}
        disabled={!newItem.length}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
