import React, { Component } from "react";
import axios from "axios";
class Admin extends Component {

    state = {
        feedbackList: [],
        feedback: {
          feeling: '',
          understanding: '',
          supported: '',
          comments: ''
        }
      }

 componentDidMount (){
     console.log('in admin');
    //  getFeedback();

 }
 getFeedback = () => {
     console.log('getting data from database');
    axios.get('./feedback')
      .then( response => {
        this.setState({
          feedbackList: response.data
        })
      })
      .catch( error => {
        alert(` Try again later`);
        console.log('Error getting feedback', error);
      })
  }

  render() {
    return (
      <div>
        <h1>You're in Admin! </h1>
       <h1>{JSON.stringify(this.state.feedbackList)}</h1>
       <button onClick={this.getFeedback}>Feedback list</button>
      </div>
    );
  }
}

export default Admin;