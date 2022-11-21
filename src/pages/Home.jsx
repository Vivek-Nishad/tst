import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../utils/projects.json";

// const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
// console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));
// a.filter(function(value){
//     return value === false;
// }).length

const Home = () => {
	const [projectStatus, setProjectStatus] = useState("Assigned");

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [projectStatus]);

	const getProjectCount = (sts) => {
		return projects.filter((ele) => ele.projectStatus === sts).length;
	};

	const tabChange = (sts) => {
		setProjectStatus(sts);
	};

	return (
		<>
			<div className="homeContainer">
				<h2 className="pageTitle">Welcome, TST</h2>
				<div className="projectTabs">
					<button
						className={
							projectStatus === "assigned" ? "tabBtns tabBtnActive" : "tabBtns"
						}
						onClick={(e) => tabChange("assigned")}
					>
						{getProjectCount("assigned")} <br /> Assigned
					</button>
					<button
						className={
							projectStatus === "inprogress"
								? "tabBtns tabBtnActive"
								: "tabBtns"
						}
						onClick={(e) => tabChange("inprogress")}
					>
						{getProjectCount("inprogress")} <br /> IN PROGRESS
					</button>
					<button
						className={
							projectStatus === "done" ? "tabBtns tabBtnActive" : "tabBtns"
						}
						onClick={(e) => tabChange("done")}
					>
						{getProjectCount("done")} <br /> DONE
					</button>
				</div>

				{loading ? (
					<div className="loader-container">
						<div className="spinner"></div>
					</div>
				) : (
					<div className="projectListContainer">
						{projects
							.filter((ele) => ele.projectStatus === projectStatus)
							.map((element, index) => (
								<ProjectCard
									proData={element}
									index={index}
									key={element.projectId}
								/>
							))}
					</div>
				)}
			</div>
		</>
	);
};

export default Home;
