import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Success extends Component {

  handleClick = () =>
    this.props.history.push('/');

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Leave New Feedback</button>
      </div>
    )
  }
}

export default withRouter(Success);