import React, { Component } from 'react';

class Understanding extends Component {
  render() {
    return (
      <div>
        <h3>How well are you understanding the content?</h3>
        <label>Understanding?</label>
        <input type="number"></input>
        <button>Next</button>
      </div>
    )
  }
}

export default Understanding;