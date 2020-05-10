import React, { Component } from "react";

class Done extends Component {
  handleClick = () => {
    console.log("in handleClick");
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>You're done! </h1>
        <button onClick={this.handleClick}>Take a new survey!</button>
      </div>
    );
  }
}

export default Done;
