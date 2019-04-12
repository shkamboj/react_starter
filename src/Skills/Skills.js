import React from 'react';
import './Skills.css';
const skills = (props) => {
	return (<div className="Skills">
	<h1>Skills</h1>
		<p onClick={props.click} > {props.skills}.</p>
	</div>
	)
}


export default skills;