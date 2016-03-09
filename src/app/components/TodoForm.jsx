import React from 'react';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(e) {
    e.preventDefault();
    let item = {
      text : this.refs.text.value
    }

    this.props.addItem(item);
    // Reset input field
    this.refs.text.value = '';
  }

  render() {
    return (
      <div>
        <form ref="feedForm" id="feedForm" className="Todo-form" onSubmit={this.handleForm}>
          <div className="form-group">
            <input ref="text" type="text" placeholder="Title" />
            <button type="submit" className="Todo-button">Add</button>
          </div>
        </form>
      </div>
    );
  }

}

export default TodoForm;
