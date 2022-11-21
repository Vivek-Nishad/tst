import React, { useReducer, useState } from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../utils/projects.json";
import backBtn from "../Assets/backBtn.svg";

const initialFormState = {
	projectType: "",
	projectResources: "DEFAULT",
	androidEnv: "",
	iosEnv: "",
	webEnv: "",
	projectDomain: "",
	milestone1: "",
	milestone2: "",
	milestone3: "",
	projectMaintenance: false,
	proRemark: "",
};

const formReducer = (state, action) => {
	switch (action.type) {
		case "fieldChange":
			return {
				...state,
				[action.key]: action.value,
			};

		default:
			return state;
	}
};

const ProjectDetails = () => {
	let { projectId } = useParams();
	let project = projects.find((ele) => ele.projectId == projectId);

	const [formErrors, setFormErrors] = useState({});
	const [state, dispatch] = useReducer(formReducer, initialFormState);

	let handleFormSubmit = (e) => {
		e.preventDefault();

		setFormErrors(validateForm(state));
	};

	let validateForm = (state) => {
		let errors = {};
		if (!state.projectType) {
			errors.projectType = "Project types field is required";
		}
		if (!state.projectResources || state.projectResources == "DEFAULT") {
			errors.projectResources = "Project resource field is required";
		}
		if (!state.projectMaintenance) {
			errors.projectMaintenance = "Project Status option is required";
		}

		if (!state.androidEnv && !state.iosEnv && !state.webEnv) {
			errors.projectEnvironment = "Project Environment is required";
		}

		if (!state.milestone1 && !state.milestone2 && !state.milestone3) {
			errors.projectPayment = "Project Payment is required";
		}

		return errors;
	};

	return (
		<>
			<div className="projectContainer">
				<div className="projectHeader">
					<div className="backBtn">
						<Link to={"/"}>
							<img src={backBtn} className="App-logo" alt="img" />
						</Link>
					</div>
					<div>
						Pro. ID : <span>{project.projectId}</span>
					</div>
					<div>
						Pro. Number : <span>{project.projectNum}</span>
					</div>
				</div>
				<h2 className="pageTitle detailsTitle">Project Details</h2>
				<form className="projectDetailsForm">
					<div className="projectProgressBar"></div>

					<div className="fieldContainer">
						<label htmlFor="projectType">1. Project Type : </label>
						<span>&#42;</span>
						<br />
						<input
							type="text"
							name="projectType"
							id="projectType"
							value={state.projectType}
							onChange={(e) =>
								dispatch({
									type: "fieldChange",
									value: e.target.value,
									key: "projectType",
								})
							}
							className="fullWidth"
						/>
						<div className="errorMsg">{formErrors.projectType}</div>
					</div>

					<div className="fieldContainer">
						<label htmlFor="proRsrc">2. Project Resources : </label>
						<span>&#42;</span>
						<br />

						<select
							name="proRsrc"
							id="proRsrc"
							className="proRsrc fullWidth"
							required
							defaultValue={state.projectResources}
							onChange={(e) =>
								dispatch({
									type: "fieldChange",
									value: e.target.value,
									key: "projectResources",
								})
							}
						>
							{/* <option value="" disabled selected> */}
							<option value="DEFAULT" disabled>
								Select your option
							</option>
							<option value="Opt1">Option 1</option>
							<option value="Opt2">Option 2</option>
							<option value="Opt3">Option 3</option>
						</select>
						<div className="errorMsg">{formErrors.projectResources}</div>
					</div>

					<div className="fieldContainer">
						<label htmlFor="proEnv">3. Project Environment : </label>
						<span>&#42;</span>
						<div className="proEnvContainer">
							<div>
								<input
									type="text"
									name="androidEnv"
									id="androidEnv"
									className="androidEnv"
									value={state.androidEnv}
									onChange={(e) =>
										dispatch({
											type: "fieldChange",
											value: e.target.value,
											key: "androidEnv",
										})
									}
								/>
								<div className="envType">Android</div>
							</div>
							<div>
								<input
									type="text"
									name="iosEnv"
									id="iosEnv"
									className="iosEnv"
									value={state.iosEnv}
									onChange={(e) =>
										dispatch({
											type: "fieldChange",
											value: e.target.value,
											key: "iosEnv",
										})
									}
								/>
								<div className="envType">IOS</div>
							</div>
							<div>
								<input
									type="text"
									name="webEnv"
									id="webEnv"
									className="webEnv"
									value={state.webEnv}
									onChange={(e) =>
										dispatch({
											type: "fieldChange",
											value: e.target.value,
											key: "webEnv",
										})
									}
								/>
								<div className="envType">Web</div>
							</div>
						</div>
						<div className="errorMsg">{formErrors.projectEnvironment}</div>
					</div>

					<div className="fieldContainer">
						<label htmlFor="projectDomain">4. Project Domain : </label>
						<input
							type="text"
							name="projectDomain"
							id="projectDomain"
							className="fullWidth"
							value={state.projectDomain}
							onChange={(e) =>
								dispatch({
									type: "fieldChange",
									value: e.target.value,
									key: "projectDomain",
								})
							}
						/>
					</div>

					<div className="fieldContainer">
						<label>5. Project Payment : </label>
						<span>&#42;</span>
						<div className="mileStones">
							<label htmlFor="milestone1">Milestone 1 :</label>
							<input
								type="text"
								name="milestone1"
								id="milestone1"
								className="milestone1 "
								value={state.milestone1}
								onChange={(e) =>
									dispatch({
										type: "fieldChange",
										value: e.target.value,
										key: "milestone1",
									})
								}
							/>
						</div>
						<div className="mileStones">
							<label htmlFor="milestone2">Milestone 2 :</label>
							<input
								type="text"
								name="milestone2"
								id="milestone2"
								className="milestone2 "
								value={state.milestone2}
								onChange={(e) =>
									dispatch({
										type: "fieldChange",
										value: e.target.value,
										key: "milestone2",
									})
								}
							/>
						</div>
						<div className="mileStones">
							<label htmlFor="milestone3">Milestone 3 :</label>
							<input
								type="text"
								name="milestone3"
								id="milestone3"
								className="milestone3 "
								value={state.milestone3}
								onChange={(e) =>
									dispatch({
										type: "fieldChange",
										value: e.target.value,
										key: "milestone3",
									})
								}
							/>
						</div>
						<div className="errorMsg">{formErrors.projectPayment}</div>
					</div>

					<div className="fieldContainer">
						<label>6. Project in Maintenance : </label>
						<span>&#42;</span>
						<div className="proMaintenance">
							<div className="radioCont">
								<input
									type="radio"
									name="projectMaintenance"
									id="proMainYes"
									onChange={(e) =>
										dispatch({
											type: "fieldChange",
											value: true,
											key: "projectMaintenance",
										})
									}
								/>
								<label htmlFor="proMainYes">Yes</label>
							</div>
							<div className="radioCont">
								<input
									type="radio"
									name="projectMaintenance"
									id="proMainNo"
									onChange={(e) =>
										dispatch({
											type: "fieldChange",
											value: false,
											key: "projectMaintenance",
										})
									}
								/>
								<label htmlFor="proMainNo">No</label>
							</div>
						</div>
						<div className="errorMsg">{formErrors.projectMaintenance}</div>
					</div>

					<div className="fieldContainer">
						<div className="remark">
							<label htmlFor="proRemark">Remarks : </label>
							<input
								type="text"
								name="proRemark"
								id="proRemark"
								className="fullWidth"
								value={state.proRemark}
								onChange={(e) =>
									dispatch({
										type: "fieldChange",
										value: e.target.value,
										key: "proRemark",
									})
								}
							/>
						</div>
					</div>

					<div className="formBtns">
						<input type="submit" value="Save" onClick={handleFormSubmit} />
						<input
							type="submit"
							value="Submit &#10004;"
							className="submitBtn"
							onClick={handleFormSubmit}
						/>
					</div>
				</form>
			</div>
		</>
	);
};

export default ProjectDetails;
