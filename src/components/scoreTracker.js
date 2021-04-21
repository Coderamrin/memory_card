import React from "react";

function ScoreTracker(props) {
	return(
		<div className="scoreTracker"> 
			<h3>Current Score: {props.cScore} </h3>
			<h3>Highest Score: {props.hScore} </h3>
		</div>
		)
}

export default ScoreTracker;
 