import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from "react-redux";
import { HashRouter, Route, Link } from "react-router-dom";
import Feeling from "../Feeling/Feeling"
import Understanding from "../Understanding/Understanding"
import Supported from "../Supported/Supported"
import Comments from "../Comments/Comments"
import Reviewing from "../Reviewing/Reviewing"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
         
        </header>
        <HashRouter>
          <Route path='/feeling' component={Feeling} />
          <Link to="/feeling">Get started!</Link>
          </HashRouter>
        <br/>
        <Feeling />
        <Understanding  />
        <Supported />
        <Comments />
        <Reviewing />
      </div>
    );
  }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(App);