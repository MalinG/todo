import React from 'react';

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
  }

  checkItem () {
    let val = (this.props.checked) ? 0 : 1;
    this.props.checkItem(this.props.id, val);
  }

  editItem () {
    console.log('edit');
  }

  deleteItem () {
    console.log('delete');
    this.props.deleteItem(this.props.id);
  }

  render() {
    console.log(this.props.checked);
    var itemClasses = (this.props.checked) ? 'Todo-item Todo-item--checked' : 'Todo-item';
    return (
      <li key={this.props.key} className={itemClasses}>
        <button id="check" className="Todo-button Todo-button--check"
          onClick={this.checkItem}><i className="Todo-icon Todo-icon--check"></i>
          Done
        </button>
        <input type="text" disabled className="Todo-text" value={this.props.text} />
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
