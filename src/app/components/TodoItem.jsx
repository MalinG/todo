import React from 'react';
// Enable editable div
import ContentEditable from "react-contenteditable";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.handleChange = this.handleChange.bind(this);

    // Initial state
    this.state = {
      editing: false,
      html: this.props.text,
      id: this.props.id
    };
  }

  checkItem () {
    let val = (this.props.checked) ? 0 : 1;
    // Pass checked value to main component checkItem method.
    this.props.checkItem(this.props.id, val);
  }

  editItem () {
    // Update item on edit save
    if(this.state.editing) {
      let val = this.state.html;
      // Pass new value to updateItem method in main component.
      this.props.updateItem(this.props.id, val);
    }

    this.setState({
      // Toggle editing state.
      editing: (this.state.editing) ? false : true
    });
  }

  deleteItem () {
    // Pass item key to deleteItem method in main component.
    this.props.deleteItem(this.props.id);
  }

  componentDidUpdate () {
    let id = this.state.id;
    // Set focus on editable field.
    if(this.state.editing) {
      let el = document.getElementById(id);
      el.focus();
    }

  }

  handleChange (e){
    // Update state value on edited item
    this.setState(
      {
        html: e.target.value
      }
    );
  }

  render() {
    // Change classes on checked and editable
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
        <div className="Todo-text">
        <ContentEditable
                id={this.state.id}
                html={this.state.html}
                disabled={editMode}
                onChange={this.handleChange}
              />
        </div>
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
