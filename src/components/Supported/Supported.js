import React, { Component } from 'react';

class Supported extends Component {
  render() {
    return (
      <div>
        <h3>How well are you being supported?</h3>
        <label>Support?</label>
        <input type="number"></input>
        <button>Next</button>
      </div>
    )
  }
}

export default Supported;