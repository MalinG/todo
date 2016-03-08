import React from 'react';
import {render} from 'react-dom';
import Todo from './components/Todo.jsx';
require('./styles/Todo.scss');

class App extends React.Component {
  render () {
    return (
      <div className="Court">
        <Todo />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
