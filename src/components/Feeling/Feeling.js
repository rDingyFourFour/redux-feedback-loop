import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Feeling extends Component {

  handleClick = () => 
    this.props.history.push('/understanding');

  render() {
    return (
      <div>
        <h3>How are you feeling today?</h3>
        <label>Feeling?</label>
        <input type="number"></input>
        <button onClick={this.handleClick}>Next</button>
      </div>
    )
  }
}

export default withRouter(Feeling);
