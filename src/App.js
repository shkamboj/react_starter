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
      {name : "Udit Gulati"},
      {name : "Abhijeet Rai"},
      {name : "Anurag Bansal"}
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
        {name : "Vikas"},
        {name : "Abhijeet Rai"},
        {name : "Anurag Bansal"}
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
    if(this.state.showPeoples)
    {
      this.setState({
        showPeoples : false
      })
    }
    
    else
    {
      this.setState({
        showPeoples : true
      })
    }
  }

  

  render(){
    let peeps = null;
  if(this.state.showPeoples)
  {
    peeps = (
      <div>
      {this.state.peoples.map(people =>{
        return <People name = {people.name} />
      } )}
      </div>
    );
  }
    return(
    <div className ='App'> 
      <h1>This line is written using Class</h1>
      <button onClick= {this.switchNameHandler.bind(this, "Abhijeet")}>Switch Name</button>
      <button onClick= {this.togglePeopleHandler}>Dynamic</button>
     {peeps}
    </div>
    );
  }
}

export default App;


// ReactDOM.render(app, document.querySelector('#app')); upper cards were rendered by this line