import React, {Component} from 'react';

class Comments extends Component {
    componentDidMount(){
        console.log('component did mount', this.props.dispatch);
    }

    handleClick = () => {
        console.log('in handleClick');
        this.props.history.push('/reviewing');
    }
  render() {
    return (
      <div>
          <h1>Any additional comments you would like to share?</h1>
          <input type="text" placeholder="comments" />
        <p>Head to review! <button onClick={this.handleClick}>Click here</button></p>
      </div>
    );
  }
}

export default Comments;