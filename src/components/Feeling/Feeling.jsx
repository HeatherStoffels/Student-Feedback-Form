import React, { Component } from "react";


class Feeling extends Component {

    componentDidMount(){
        console.log('component did mount', this.props.dispatch);
    }

    handleClick = () => {
        console.log('in handleClick');
        this.props.history.push('/understanding');
    }
  render() {
    return (
      <div>
        <p>Head to understanding!<button onClick={this.handleClick}>Click here</button></p>
      </div>
    );
  }
}

export default Feeling;
