import React from 'react';
import './Hobbies.css';
const hobbies = (props) => {
	return (<div className="Hobbies">
		<p>{props.hobbies}</p>
	</div>
	)
}

export default hobbies;