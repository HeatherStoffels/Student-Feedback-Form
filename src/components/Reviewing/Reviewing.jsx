import React, {Component} from 'react';

class Reviewing extends Component {
    componentDidMount(){
        console.log('component did mount', this.props.dispatch);
    }

    submitFeedback = ()=>{
        console.log("submit was clicked");
        // axios post here
    }
  render() {
    return (
      <div>
        <p>Almost done!<button onClick={this.submitFeedback}>Submit Feedback</button></p>
      </div>
    );
  }
}

export default Reviewing;