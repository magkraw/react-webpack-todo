import React from 'react';

export default class Title extends React.Component {
  render() {
    return (
      <h1>
        To-do list ({this.props.listCount} items)
      </h1>
    );
  }
}
