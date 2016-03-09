import React from 'react';
import TodoItem from './TodoItem.jsx';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    //this.createItems = this.createItems.bind(this);

  }

  render() {
    let listItems = this.props.items.map(function (item) {
      return (
            <TodoItem key={item.key} text={item.text} />
      );
    });

    return (
      <ul>{listItems}</ul>
    );
  }

}

export default TodoList;
