import React, {Component} from 'react';
import axios from "axios";
import { connect } from "react-redux";

class Reviewing extends Component {
    componentDidMount(){
        console.log('component did mount', this.props.dispatch);
    }

    submitFeedback = ()=>{
        console.log("submit was clicked");
        this.props.history.push("/done");
        // axios post here

  axios.post("./feedback",this.props.reduxState)
    .then((response) => {
      console.log("back from post with", response.data);
    })
    .catch((err) => {
      console.log("error in post", err);
    });
    
    }
  render() {
    return (
      <div>
          <h3>Feeling: {this.props.reduxState.feeling}</h3>
          <h3>Understanding: {this.props.reduxState.understanding}</h3>
          <h3>Support: {this.props.reduxState.support}</h3>
          <h3>Comments: {this.props.reduxState.comments}</h3>
        <p>Almost done!<button onClick={this.submitFeedback}>Submit Feedback</button></p>
      </div>
    );
  }
}
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(Reviewing);
