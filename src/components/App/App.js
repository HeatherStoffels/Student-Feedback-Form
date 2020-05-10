import React, { Component } from "react";
// import axios from 'axios';
import "./App.css";
import { connect } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Reviewing from "../Reviewing/Reviewing";
import Done from "../Done/Done";
import Admin from "../Admin/Admin";



class App extends Component {
  // page load
  componentDidMount() {
    console.log("in app.js", this.props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
          {/* all routes to other pages */}
        </header>
        <HashRouter>
          <Route
            exact
            path="/"
            render={(props) => (
              <Feeling {...props} dispatch={this.props.dispatch} />
            )}
          />
          <Route
            path="/understanding"
            render={(props) => (
              <Understanding {...props} dispatch={this.props.dispatch} />
            )}
          />
          <Route
            path="/support"
            render={(props) => (
              <Support {...props} dispatch={this.props.dispatch} />
            )}
          />
          <Route
            path="/comments"
            render={(props) => (
              <Comments {...props} dispatch={this.props.dispatch} />
            )}
          />
          <Route
            path="/reviewing"
            render={(props) => (
              <Reviewing
                {...props}
                dispatch={this.props.dispatch}
                reduxState={this.props.reduxState}
              />
            )}
          />
          <Route
            path="/done"
            render={(props) => (
              <Done {...props} dispatch={this.props.dispatch} />
            )}
          />
            <Route
            path="/admin"
            render={(props) => (
              <Admin {...props} dispatch={this.props.dispatch} />
            )}
          />
        </HashRouter>
        <br />
        
      </div>
    );
  }
}


// magic potion code below
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(App);
