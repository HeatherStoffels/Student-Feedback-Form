import React, { Component } from "react";

class Understanding extends Component {
  state = {
    understanding: "1",
  };

  componentDidMount() {
    console.log("component did mount", this.props);
  }
  backButton = ()=>{
    this.props.history.push("/");
  }
  handleChange = (event, property) => {
    console.log("in handlechange");
    if (property === "understanding")
      this.setState({
        [property]: event.target.value,
      });
  };

  handleClick = () => {
    console.log("in handleClick");
    this.props.dispatch({
      type: "understanding",
      payload: this.state.understanding,
    });
    this.props.history.push("/support");
  };
  render() {
    return (
      <div>
        <h1>How well are you understanding the material today?</h1>
        <select
          id="understanding"
          onChange={(event) => this.handleChange(event, "understanding")}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p>
          Head to supported!<button onClick={this.handleClick}>Next</button>
        </p>
        <button onClick={this.backButton}>Back</button>
      </div>
    );
  }
}

export default Understanding;
