import React from 'react';

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  editItem () {
    console.log('edit');
  }

  deleteItem () {
    console.log('delete');
    //console.log(this.props);
    this.props.deleteItem(this.props.id);
  }

  render() {

    return (
      <li key={this.props.key} className="Todo-item">
        <button id="check" className="Todo-button Todo-button--check"
          onClick={this.editItem}><i className="Todo-icon Todo-icon--check"></i>
          Done
        </button>
        <span className="Todo-text">{this.props.text}</span>
        <button id="edit" className="Todo-button Todo-button--edit"
          onClick={this.editItem}><i className="Todo-icon Todo-icon--edit"></i>
          Edit
        </button>
        <button id="delete" className="Todo-button Todo-button--delete"
          onClick={this.deleteItem}><i className="Todo-icon Todo-icon--delete"></i>
          Delete
        </button>
      </li>
    );
  }

}

export default TodoItem;
