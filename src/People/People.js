import React from 'react';
import './People.css';
const people = (props) => {
	return (<div className="People">
		<h1>Title</h1>
		<p onClick={props.click} > {props.title}</p>
	</div>
	)
}


export default people;