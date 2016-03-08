import React from 'react';
import TodoForm from './TodoForm.jsx';

class Todo extends React.Component {

  constructor() {
    super();
    this.addItem = this.addItem.bind(this);

    var todoItems = [
      {key: 1, text: 'Homework'},
      {key: 2, text: 'Clean room'},
    ]

    this.state = {
      items: todoItems,
      key : todoItems.length
    };


  }

  addItem (item) {
    let newItems = this.state.items.concat([item]);
    //let newItem = TODO: Get item from form;
    //console.log(newItems);

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
      </div>
    );
  }

}
export default Todo;
