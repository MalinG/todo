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
    // TODO: Fix binding
    var that = this;

    dataRef.on('value', function(snapshot) {
      var itemList = [];
      snapshot.forEach(function(item) {
        var key = item.key();
        var item = item.val();
        item.key = key;
        itemList.push(item);

      });

      that.setState({
        items: itemList
      });
    });




  }

  componentWillMount() {
    this.loadTodos();

  }

  // componentWillMount() {
  //   this.firebaseRef = new Firebase("https://fiery-inferno-3889.firebaseio.com/todos");
  //   this.firebaseRef.on("child_added", function(dataSnapshot) {
  //     this.items.push(dataSnapshot.val());
  //     this.setState({
  //       items: this.items
  //     });
  //   }.bind(this));
  // }

  addItem (item) {
    var dataRef = new Firebase('https://fiery-inferno-3889.firebaseio.com/todos');
    dataRef.push(item);

    this.loadTodos();
  }

  render() {
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
