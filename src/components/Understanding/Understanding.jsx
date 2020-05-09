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
        <p>Head to supported!<button onClick={this.handleClick}>Click here</button></p>
      </div>
    );
  }
}

export default Understanding;