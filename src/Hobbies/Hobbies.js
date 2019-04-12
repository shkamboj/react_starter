import React from 'react';
import './Hobbies.css';
const hobbies = (props) => {
	return (<div className="Hobbies">
	<h1>Looking For?</h1>
		<p>{props.hobbies}</p>
	</div>
	)
}

export default hobbies;