import React from "react";
import { Link } from "react-router-dom";
import detailsBtn from "../Assets/detailsBtn.svg";

const ProjectCard = ({ proData, index }) => {
	return (
		<div className="projectCard">
			<span className="proIndex">{index + 1}.</span>
			<div className="proCardDetails">
				{proData.name}
				<br />
				Project ID : <span>{proData.projectId}</span>
				<br />
				Project Number : <span>{proData.projectNum}</span>
			</div>
			<Link to={`/project/${proData.projectId}`} className="projectDetailsBtn">
				<img src={detailsBtn} className="App-logo" alt="img" />
			</Link>
		</div>
	);
};

export default ProjectCard;
