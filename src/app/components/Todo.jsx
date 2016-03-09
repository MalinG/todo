import React from 'react';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';

class Todo extends React.Component {

  constructor() {
    super();
    this.addItem = this.addItem.bind(this);

    var todoItems = [
      
    ]

    this.state = {
      items: todoItems,
      key : todoItems.length
    };


  }

  addItem (item) {
    let newItems = this.state.items.concat([item]);

    this.setState({
      items: newItems,
      key : newItems.length
    });

    console.log(newItems.length);
    console.log(this.state.items);
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoForm addItem={this.addItem} tid={this.state.key} />
        <TodoList items={this.state.items} />
      </div>
    );
  }

}
export default Todo;
