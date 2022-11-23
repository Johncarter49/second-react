import React  from "react";

class Name extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state= {
            name: this.props.name,
            age: this.props.age,
        }
    }
    increment = ()=>{
        this.setState(prevState=>({
            age: prevState.age + 1,
        }))
        
    }
   
      decrement = ()=>{
        this.setState(prevState=>({
          age: prevState.age - 1,
        }))
      }
      render(){
          let isMessage = false;
     
    if (this.state.age === 40) {
        isMessage = true
    }
          return (
        <div className="App">
      <h1>Hi {this.state.name}, your age is {this.state.age} </h1>
      <button onClick={this.changeName}>Change Name</button>
    <button disabled={isMessage} onClick={this.increment}>Increment Age</button>
    <button onClick={this.decrement}>Decrement Age</button>
      </div>
      )
    }
  }

  export default Name;