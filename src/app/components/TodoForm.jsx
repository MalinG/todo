import React from 'react';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    //this.addItem = this.addItem.bind(this);

    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(e) {
    e.preventDefault();
    let item = {
      key : this.props.tid + 1,
      text : this.refs.item.value
    }
    //console.log(this.props);
    this.props.addItem(item);
  }


  render() {
    return (
      <div>
        <form ref="feedForm" id="feedForm" className="Todo-form" onSubmit={this.handleForm}>
          <div className="form-group">
            <input ref="item" type="text" placeholder="Title" />
            <button type="submit" className="Todo-button">Add</button>
          </div>
        </form>
      </div>
    );
  }

}

export default TodoForm;
