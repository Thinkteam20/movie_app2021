import React from "react";

class App extends React.Component{
  constructor(props){
    super(props)
    console.log("hello")
  }
  state = {
    // this is the place where we put the data which will be changed.  ex ) count: 0
    count: 0
  };

  add = () => {
    //console.log("add");
    this.setState(current => ({count: current.count + 1}))
  }

  minus = () =>{ 
    //console.log("minus"); 
    this.setState({count: this.state.count - 1 })
  }
  componentWillUnmount() {
    console.log("Goodbye, Cruel world")
  }
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("I just update")
  }
  render(){
    console.log("I'm rendering")
    return <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;