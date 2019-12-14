import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Review extends Component {

  handleClick = () =>
    this.props.history.push('/success');

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

export default withRouter(Review);