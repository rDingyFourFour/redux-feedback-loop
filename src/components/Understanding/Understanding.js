import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Understanding extends Component {

  handleClick = () =>
    this.props.history.push('/supported');

  render() {
    return (
      <div>
        <h3>How well are you understanding the content?</h3>
        <label>Understanding?</label>
        <input type="number"></input>
        <button onClick={this.handleClick}>Next</button>
      </div>
    )
  }
}

export default withRouter(Understanding);