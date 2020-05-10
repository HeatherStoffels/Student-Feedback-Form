import React, { Component } from "react";

class Feeling extends Component {
  state = {
    feeling: "1",
  };

  componentDidMount() {
    console.log("component did mount", this.props);
  }

  handleChange = (event, property) => {
    console.log("in handlechange");
    if (property === "feeling")
      this.setState({
        [property]: event.target.value,
      });
  };

  handleClick = () => {
    console.log("in handleClick");
    this.props.dispatch({ type: "feeling", payload: this.state.feeling });

    this.props.history.push("/understanding");
  };

  adminPage = () => {
    console.log("in admin page");
    this.props.history.push("/admin");
  };
  render() {
    return (
      <div>
        <header>
          <button onClick={this.adminPage}>Admin</button>
        </header>
        <h1>How are you feeling today?</h1>
        <select
          id="feeling"
          onChange={(event) => this.handleChange(event, "feeling")}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p>
          Head to understanding!<button onClick={this.handleClick}>Next</button>
        </p>
      </div>
    );
  }
}

export default Feeling;
