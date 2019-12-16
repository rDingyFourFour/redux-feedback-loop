import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Feeling extends Component {

  state = {
    newFeeling: '',
  }
  
  handleChange = (event) => {
    console.log('handleChange')
    this.setState({ newFeeling: event.target.value });  
  } 
    
  handleClick = () => {
    console.log('handleClick');
    this.props.history.push('/understanding');
    this.props.dispatch({ type: 'FEELINGS', payload: this.state.newFeeling });
  
  }
    
  render() {
    return (
      <div>
        <h3>How are you feeling today?</h3>
        <label>Feeling?</label>
        <input type="number" onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Next</button>
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default (withRouter, connect(putReduxStateOnProps))(Feeling);
