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
        <p>Head to comments!<button onClick={this.handleClick}>Click here</button></p>
      </div>
    );
  }
}
export default Supported;