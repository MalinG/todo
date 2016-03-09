import React from 'react';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    //this.createItems = this.createItems.bind(this);

  }

  render() {
    let listItems = this.props.items.map(function (item) {
      console.log(item.text);
      console.log(item.key);
      return (
            <li key={item.key} data-key={item.key} className="Todo-item">{item.text}</li>

      );
    });

    return (
      <div>{listItems}</div>
    );
  }

}

export default TodoList;
