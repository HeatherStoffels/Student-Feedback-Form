import React, { Component } from "react";

class Comments extends Component {
  state = {
    comments: "",
  };
  adminPage = () => {
    console.log("in admin page");
    this.props.history.push("/admin");
}

  componentDidMount() {
    console.log("component did mount", this.props);
  }
  backButton = ()=>{
    this.props.history.push("/support");
  }
  handleChange = (event, property) => {
    console.log("in handlechange");
    if (property === "comments")
      this.setState({
        [property]: event.target.value,
      });
  };

  handleClick = () => {
    console.log("in handleClick");
    this.props.dispatch({ type: "comments", payload: this.state.comments });
    this.props.history.push("/reviewing");
  };
  render() {
    return (
      <div>
          <header><button onClick={this.adminPage}>Admin</button></header>
        <h1>Any additional comments you would like to share?</h1>
        <input
          type="text"
          placeholder="comments"
          onChange={(event) => this.handleChange(event, "comments")}
        />
        <p>
          Head to review! <button onClick={this.handleClick}>Click here</button>
        </p>
        <button onClick={this.backButton}>Back</button>
      </div>
    );
  }
}

export default Comments;
