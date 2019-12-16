import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Supported extends Component {

  state = {
    newSupport: '',
  }

  handleChange = (event) => {
    console.log('handleChange')
    this.setState({ newSupport: event.target.value });
  } 
  
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

export default (withRouter, connect())(Supported);