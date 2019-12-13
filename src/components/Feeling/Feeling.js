import React, { Component } from 'react';

class Feeling extends Component {
  render() {
    return (
      <div>
        <h3>How are you feeling today?</h3>
        <label>Feeling?</label>
        <input type="number"></input>
        <button>Next</button>
      </div>
    )
  }
}

export default Feeling;
