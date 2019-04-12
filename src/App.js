import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import People from './People/People.js';
import Hobbies from './Hobbies/Hobbies.js'
import Interest from './Interest/Interest.js'
import Skills from './Skills/Skills.js'

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
      {name : "Shubham Kamboj", age : 12, hobbies : "I am looking for a MERN stack internship.",
       title: "CSE Junior at Indian Institute of Information Technology Una", interest : "Web Development(MERN), Mathematics",
      skills : " Javascript, NodeJS, React.js, C, C++, PHP, MongoDB, MySQL, Python, Algorithms, Data Structures, HTML5 & CSS3, Heroku, mlab "
    }

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
    let buttonshow = "Show Profile";
    let hobbies_row = null;
    let interest_row = null;
    let skills_row = null;
  if(this.state.showPeoples)
  {
    peeps = (
      <div>
      {this.state.peoples.map(people =>{
        return <People title = {people.title}  />
      } )}
      </div>
    );
    hobbies_row = (
      <div>
      {this.state.peoples.map(people =>{
        return <Hobbies hobbies = {people.hobbies}  />
      } )}
      </div>
    );
    interest_row = (
      <div>
      {this.state.peoples.map(people =>{
        return <Interest interest = {people.interest}  />
      } )}
      </div>
    );
    skills_row = (
      <div>
      {this.state.peoples.map(people =>{
        return <Skills skills = {people.skills}  />
      } )}
      </div>
    );
    buttonshow = "Hide Profile";
  }
    return(
    <div className ='App'> 
      <h1> Hi there, I am {this.state.peoples[0].name}.</h1>
      <button onClick= {this.togglePeopleHandler}>{buttonshow}</button>
     {peeps}
     {interest_row}
     {skills_row}
     {hobbies_row}
    </div>
    );
  }
}

export default App;


// ReactDOM.render(app, document.querySelector('#app')); upper cards were rendered by this line