import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Supported extends Component {

  handleClick = () =>
    this.props.history.push('/comments');

  render() {
    return (
      <div>
        <h3>How well are you being supported?</h3>
        <label>Support?</label>
        <input type="number"></input>
        <button onClick={this.handleClick}>Next</button>
      </div>
    )
  }
}

export default withRouter(Supported);