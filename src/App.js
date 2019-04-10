import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import People from './People/People.js';


function Person (props){
  return (
    <div className = "person"> 
      <h1>{props.name}</h1>
      <p> Your age is {props.age} </p>
    </div>

  );
}
var app = (
  <div>
    <Person name="Anurag" age = "28"/>
    <Person name="Udit" age = "30"/>
    <Person name="Shubham" age = "35"/>
    <Person name="Abhijeet" age = "40"/>
  </div>
);

class App extends Component{
  state = {
    peoples : [
      {name : "Shubham Kamboj"},
      {name : "Anurag Chandel"},
      {name : "Udit Gulati"}
    ],
    showPeoples : false
  }
  
  switchNameHandler = (name_to) => {
    // console.log("was clicked successfully");
    // DON'T DO THIS : this.state.peoples[0].name = "Abhijeet Rai";
    this.setState({                        // setState is a function
      peoples : [
        {name : name_to},
        {name : "Anil Sharma"},
        {name : "Vikas"}
      ]
    })
  }


  nameChangedHandler = (event) =>{
    this.setState({
      peoples : [
        {name : "Shubham Kamboj"},
        {name : event.target.value},
        {name : "Vikas"}
      ]
    })

  }

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeoples;
    this.setState({
      showPeoples : true
    })
  }

  render(){

    return(
    <div className ='App'> 
      <h1>This line is written using Class</h1>
      <button onClick= {this.switchNameHandler.bind(this, "Abhijeet")}>Switch Name</button>
      <button onClick= {this.togglePeopleHandler}>Dynamic</button>
     {
       this.state.showPeoples ?
        <div>
      <People name = {this.state.peoples[0].name}>
       </People> 
      <People name = {this.state.peoples[1].name}
      click = {this.switchNameHandler.bind(this, 'MAX')} changed = {this.nameChangedHandler}> MY Hobbies 
      </People> 
      <People name = {this.state.peoples[2].name}>
      </People>
      </div> : null
      }
    </div>
    );
  }
}

export default App;


// ReactDOM.render(app, document.querySelector('#app')); upper cards were rendered by this line