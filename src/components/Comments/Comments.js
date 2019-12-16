import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Comments extends Component {

  state = {
    newComment: '',
  }

  handleChange = (event) => {
    console.log('handleChange')
    this.setState({ newComment: event.target.value });
  } 
  
  handleClick = () => {
    this.props.history.push('/review');
    this.props.dispatch({ type: 'COMMENTS', payload: this.state.newComment });
  }
    
  render() {
    return (
      <div>
        <h3>Any comments you want to leave?</h3>
        <label>Comments</label>
        <input type="text"></input>
        <button onClick={this.handleClick}>Next</button>
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default (withRouter, connect(putReduxStateOnProps))(Comments);