import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

class Review extends Component {

  addFeedback() {
    console.log('payload', this.props.reduxState);
    let payload = {
      feeling: this.props.reduxState.feelings.feeling
      // understanding: this.props.reduxState.understand,
      // supported: this.props.reduxState.supported,
      // comments: this.props.reduxState.comments
    }
    axios.post('/feedback', payload)
      .then(response => {
        console.log('back from post', response);
        
      })
      .catch(function (error) {
        console.log('error from post:', error);
      })
  }

  handleClick = () => {
    this.props.history.push('/success');
    this.addFeedback();
  }
    
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default (withRouter, connect(putReduxStateOnProps))(Review);