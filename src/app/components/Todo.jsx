import React from 'react';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';
import Firebase from 'firebase';

const dataUrl = 'https://fiery-inferno-3889.firebaseio.com/todos';

class Todo extends React.Component {
  constructor() {
    super();

    // Bind this to methods.
    this.addItem = this.addItem.bind(this);
    this.loadTodos = this.loadTodos.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      items: []
    };

  }

  loadTodos() {

    // Set firebase reference
    var dataRef = new Firebase(dataUrl);

    dataRef.on('value', function(snapshot) {
      var itemList = [];
      // Loop through all items in database and add to itemList array
      snapshot.forEach(function(item) {
        var key = item.key();
        // Assign value and unique key to each item
        item = item.val();
        item.key = key;
        itemList.push(item);
      });

      // Update component state with the items form the database
      this.setState({
        items: itemList
      });
    }.bind(this));
  }

  componentWillMount() {
    // Load todo items from firebase.
    this.loadTodos();
  }

  addItem (item) {
    // Add to database. Triggered from TodoForm component.
    var dataRef = new Firebase(dataUrl);
    dataRef.push(item);
  }

  deleteItem (id) {
    // Delete from database. Triggered from TodoItem component.
    var dataRef = new Firebase(dataUrl + id);
    dataRef.remove();
  }

  checkItem (id, val) {
    // Update checked status. Triggered from TodoItem component.
    var dataRef = new Firebase(dataUrl + id);
    dataRef.update({checked: val});
  }

  updateItem(id, val) {
    // Update edited todo item text value. Triggered from TodoItem component.
    var dataRef = new Firebase(dataUrl + id);
    dataRef.update({text: val});
  }

  render() {
    // Pass props to subcomponents
    return (
      <div className="Todo-inner">
        <h2>Stuff to get done</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList items={this.state.items}
                  deleteItem={this.deleteItem}
                  updateItem={this.updateItem}
                  checkItem={this.checkItem} />
      </div>
    );
  }

}
export default Todo;
