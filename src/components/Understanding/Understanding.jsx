import React, {Component} from 'react';



class Understanding extends Component {
  
    componentDidMount(){
        console.log('component did mount', this.props.dispatch);
    }

    handleClick = () => {
        console.log('in handleClick');
        this.props.history.push('/supported');
    }
  render() {
    return (
      <div>
          <h1>How well are you understanding the material today?</h1>
          <select id="understanding">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>
        <p>Head to supported!<button onClick={this.handleClick}>Next</button></p>
      </div>
    );
  }
}

export default Understanding;