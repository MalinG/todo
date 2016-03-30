import React from 'react';
import {render} from 'react-dom';
import Todo from './components/Todo.jsx';
import './styles/Todo.scss';

class App extends React.Component {
  render () {
    return (
      <div className="Todo">
        <Todo />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
