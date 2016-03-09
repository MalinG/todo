import React from 'react';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';
import Firebase from 'firebase';

class Todo extends React.Component {

  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.loadTodos = this.loadTodos.bind(this);

    this.state = {
      items: []
    };
  }

  loadTodos() {
    var dataRef = new Firebase('https://fiery-inferno-3889.firebaseio.com/todos');
    let itemList = [];

    dataRef.on("value", function(snapshot) {

      snapshot.forEach(function(item) {
        console.log(item.key());
        var item = item.val();
        //item.id = item.key();

        itemList.push(item);
      });

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

    this.setState({
      items: itemList,
    });
  }

  componentDidMount() {
    this.loadTodos();
  }

  addItem (item) {
    var dataRef = new Firebase('https://fiery-inferno-3889.firebaseio.com/todos');
    let newItems = this.state.items.concat([item]);

    this.setState({
      items: newItems
    });

    console.log(newItems.length);
    console.log(this.state.items);

    dataRef.push(item);
  }

  render() {
    console.log('render');
    return (
      <div>
        <h2>Todo List</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList items={this.state.items} />
      </div>
    );
  }

}
export default Todo;
