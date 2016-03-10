import React from 'react';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(e) {
    e.preventDefault();
    let item = {
      text : this.refs.text.value,
      checked : 0
    }

    this.props.addItem(item);
    this.refs.text.value = '';
  }

  render() {
    return (
      <div>
        <form ref="todoForm" id="todoForm" className="Todo-form" onSubmit={this.handleForm}>
          <div className="Todo-formItem">
            <input className="Todo-input" ref="text" type="text" placeholder="Title" />
            <button type="submit" className="Todo-button">
              <i className="Todo-icon Todo-icon--add"></i>
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }

}

export default TodoForm;
