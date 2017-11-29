import React from 'react';

export default class TodoForm extends React.Component {
  state = {
    newTodo: ''
  };

  handleAddClick = () => {
    this.props.addTodo(this.state.newTodo);
  };

  handleChange = (event) => {
    this.setState({
      newTodo: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.newTodo}
        />
        <button onClick={this.handleAddClick}>
          Add List
        </button>
      </div>
    );
  }
}
