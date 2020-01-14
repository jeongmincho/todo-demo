import React from "react";
import logo from "./logo.png";
import "./App.css";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  /* this is Add item function */
  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list: list,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const updated_list = this.state.list.filter(item => item.id !== id);
    this.setState({
      list: updated_list
    });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <div>
        <img src={logo} width="800" height="200" alt="logo" className="logo" />
        <div className="container">
          <TodoInput
            newItem={this.state.newItem}
            updateInput={this.updateInput}
            addItem={this.addItem}
          ></TodoInput>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return (
                  <TodoItem item={item} deleteItem={this.deleteItem}></TodoItem>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// export Default app
export default App;
