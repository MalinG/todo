import React from 'react';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';
import Firebase from 'firebase';

class Todo extends React.Component {

  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.loadTodos = this.loadTodos.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
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

        item = item.val();
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

  addItem (item) {
    var dataRef = new Firebase('https://fiery-inferno-3889.firebaseio.com/todos');
    dataRef.push(item);

    this.loadTodos();
  }

  deleteItem (id) {
    console.log(id);
    var dataRef = new Firebase('https://fiery-inferno-3889.firebaseio.com/todos/' + id);

    dataRef.remove();
    this.loadTodos();
  }

  render() {
    return (
      <div className="Todo-inner">
        <h2>Stuff to get done</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList items={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    );
  }

}
export default Todo;
