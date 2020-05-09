import React, {Component} from 'react';

class Supported extends Component {
    componentDidMount(){
        console.log('component did mount', this.props.dispatch);
    }

    handleClick = () => {
        console.log('in handleClick');
        this.props.history.push('/comments');
    }
  render() {
    return (
      <div>
          <h1>How supported are you feeling today?</h1>
          <select id="supported">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>
        <p>Head to comments!<button onClick={this.handleClick}>Next</button></p>
      </div>
    );
  }
}
export default Supported;