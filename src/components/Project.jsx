// import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";

function Project(props) {
	return (
		<div className="project-box">
			<a href={props.url}>
				<img className="project-image" src={props.img} alt={props.imgalt} />
			</a>
			<div className="project-texts">
				<p className="project-title">{props.title}</p>
				<p className="project-sub-title">
					{props.info} {props.year}
				</p>
				{/* <p className="project-title"></p> */}
			</div>
		</div>
	);
}

export default Project;
