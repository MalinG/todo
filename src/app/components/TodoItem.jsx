import React from 'react';

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
    this.editItem = this.editItem.bind(this);

    this.state = {
      editing: false
    };
  }

  checkItem () {
    let val = (this.props.checked) ? 0 : 1;
    this.props.checkItem(this.props.id, val);

  }

  editItem () {
    if(this.state.editing) {
      let val = this.refs.todoText.value;
      this.props.updateItem(this.props.id, val);
    }

    this.setState({
      editing: (this.state.editing) ? false : true
    });

    //this.refs.todoText.focus();
  }

  deleteItem () {
    console.log('delete');
    this.props.deleteItem(this.props.id);
  }

  componentDidUpdate () {
    if(this.state.editing) {
      this.refs.todoText.focus();
    }

  }

  render() {
    console.log('rend');

    let editMode = (this.state.editing) ? '' : 'disabled';
    let buttonClasses = (this.state.editing) ? 'Todo-button Todo-button--update' : 'Todo-button Todo-button--edit';
    let iconClasses = (this.state.editing) ? 'Todo-icon Todo-icon--update' : 'Todo-icon Todo-icon--edit';
    let itemClasses = (this.props.checked) ? 'Todo-item Todo-item--checked' : 'Todo-item';
    return (
      <li key={this.props.key} className={itemClasses}>
        <button id="check" className="Todo-button Todo-button--check"
          onClick={this.checkItem}><i className="Todo-icon Todo-icon--check"></i>
          Done
        </button>
        <input ref="todoText" type="text" disabled={editMode}
          className="Todo-text" autoFocus defaultValue={this.props.text} />
        <button ref="editButton" id="edit" className={buttonClasses}
          onClick={this.editItem}><i className={iconClasses}></i>
          Edit
        </button>
        <button id="delete" className="Todo-button Todo-button--delete"
          onClick={this.deleteItem}><i className="Todo-icon Todo-icon--delete"></i>
          Delete
        </button>
      </li>
    )
  }

}

export default TodoItem;
