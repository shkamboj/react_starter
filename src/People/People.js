import React from 'react';
import './People.css';
const people = (props) => {
	return (<div className="People">
		<p onClick={props.click} > I m {props.name} & I am {Math.floor(Math.random()*30)} years old(by importing to App.js)</p>
		<p>{props.children}</p>
		<input type="text" onChange = {props.changed} value = {props.name}></input>
	</div>
	)
}

export default people;