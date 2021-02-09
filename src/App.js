import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    // this is the place where we put the data which will be changed.  ex ) count: 0
    count: 0
  };

  add = () => {
    //console.log("add");
    this.setState({count: this.state.count + 1})
  }

  minus = () =>{
    //console.log("minus"); 
    this.setState({count: this.state.count - 1 })
  }

  render(){
    return <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;