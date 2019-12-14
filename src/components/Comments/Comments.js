import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Comments extends Component {

  handleClick = () =>
    this.props.history.push('/review');

  render() {
    return (
      <div>
        <h3>Any comments you want to leave?</h3>
        <label>Comments</label>
        <input type="text"></input>
        <button onClick={this.handleClick}>Next</button>
      </div>
    )
  }
}

export default withRouter(Comments);