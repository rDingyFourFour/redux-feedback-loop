import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Understanding extends Component {

  state = {
    newUnderstanding: '',
  }
  
  handleChange = (event) => {
    console.log('handleChange')
    this.setState({ newUnderstanding: event.target.value });
  } 
  
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

export default (withRouter, connect())(Understanding);