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
            <TodoItem key={item.key}
                      id={item.key}
                      text={item.text}
                      checked={item.checked}
                      checkItem={this.props.checkItem}
                      updateItem={this.props.updateItem}
                      deleteItem={this.props.deleteItem} />
      );
    }.bind(this));

    return (
      <ul className="Todo-list">{listItems}</ul>
    );
  }

}

export default TodoList;
