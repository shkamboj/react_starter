import React from 'react';
import './Skills.css';
const skills = (props) => {
	return (<div className="Skills">
		<p onClick={props.click} > {props.skills}.</p>
	</div>
	)
}


export default skills;