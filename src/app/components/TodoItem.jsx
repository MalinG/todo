import React from 'react';

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
  }

  editItem () {
    console.log('edit');
  }

  deleteItem () {
    console.log('delete');
  }

  render() {
    return (
      <li key={this.props.key} className="TodoItem">
        <button id="check" className="Todo-button Todo-button--check"
          onClick={this.editItem}>Done</button>
        <h4>{this.props.text}</h4>
        <button id="edit" className="Todo-button Todo-button--edit"
          onClick={this.editItem}>Edit</button>
        <button id="delete" className="Todo-button Todo-button--delete"
          onClick={this.deleteItem}>Delete</button>
      </li>
    );
  }

}

export default TodoItem;
