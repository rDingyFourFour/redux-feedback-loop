import React, { Component } from 'react';

class Comments extends Component {
  render() {
    return (
      <div>
        <h3>Any comments you want to leave?</h3>
        <label>Comments</label>
        <input type="text"></input>
        <button>Next</button>
      </div>
    )
  }
}

export default Comments;