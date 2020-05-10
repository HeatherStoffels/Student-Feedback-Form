import React, {Component} from 'react';

class Support extends Component {

    state={
        support: "1",
    }


    componentDidMount(){
        console.log('component did mount', this.props);
    }
    handleChange = (event, property)=>{
        console.log('in handlechange' )
        if (property === "support")
        this.setState({
            [property]: event.target.value
        })
    }

    handleClick = () => {
        console.log('in handleClick');
        this.props.dispatch({type: "support", payload: this.state.support})
        
        this.props.history.push('/comments');
    }
  render() {
    return (
      <div>
          <h1>How supported are you feeling today?</h1>
          <select id="support" onChange={(event)=>this.handleChange(event, "support")}>
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
export default Support;