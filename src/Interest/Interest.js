import React from 'react';
import './Interest.css';
const interest = (props) => {
	return (<div className="Interest">
	<h1>Interests</h1>
		<p onClick={props.click} > {props.interest}.</p>
	</div>
	)
}


export default interest;