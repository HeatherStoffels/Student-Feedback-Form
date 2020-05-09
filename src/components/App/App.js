import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { connect } from "react-redux";
import { HashRouter, Route} from "react-router-dom";
import Feeling from "../Feeling/Feeling"
import Understanding from "../Understanding/Understanding"
import Supported from "../Supported/Supported"
import Comments from "../Comments/Comments"
import Reviewing from "../Reviewing/Reviewing"

class App extends Component {

    componentDidMount(){
        console.log("in app.js", this.props);
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
         
        </header>
        <HashRouter>
          <Route exact path='/' render={(props) => <Feeling {...props} dispatch={this.props.dispatch}/>} />
          <Route path='/understanding' render={(props) => <Understanding {...props} dispatch={this.props.dispatch}/>} />
          <Route path='/supported' render={(props) => <Supported {...props} dispatch={this.props.dispatch}/>} />
          <Route path='/comments' render={(props) => <Comments {...props} dispatch={this.props.dispatch}/>} />
          <Route path='/reviewing' render={(props) => <Reviewing {...props} dispatch={this.props.dispatch}/>} />
        
          
          </HashRouter>
        <br/>
       

     
        
      </div>
    );
  }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(App);