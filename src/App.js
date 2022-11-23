import React from "react";
import "./App.css";
 import Name from "./Name";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"Ben",
      age: 36
    }
    //this.changeName = this.changeName.bind(this);
  }

  // changeName(){
  //   this.setState({
  //     name: "John"
  //   })
  // }


  changeName= ()=>{
    this.setState({
      name: "John"
    })
  }
  // increment = ()=>{
  //   this.setState(prevState=>({
  //     age: prevState.age + 1,
  //   }))
  // }
  // decrement = ()=>{
  //   this.setState(prevState=>({
  //     age: prevState.age - 1,
  //   }))
  // }
  render(){
    return (
      <div className="App">
    <Name name={this.state.name} age={this.state.age} />
    {/* <button onClick={this.changeName}>Change Name</button>
    <button onClick={this.increment}>Increment Age</button>
    <button onClick={this.decrement}>Decrement Age</button> */}
    </div>
    )}
}


export default App;