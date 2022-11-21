import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImag from "../Assets/loginImg.svg";
const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const inputChangeHandler = (setterFunc, e) => {
		setterFunc(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		navigate("/");
	};
	return (
		<div className="loginPage">
			<div className="loginFormContainer">
				<img src={loginImag} className="App-logo" alt="img" />
				<h1 className="pageHeading">Login</h1>
				<form className="loginForm" onSubmit={submitHandler}>
					<label htmlFor="username" className="loginFormLabels">
						Username
					</label>
					<input
						type="text"
						name="username"
						id="username"
						placeholder="abcd@gmail.com"
						className="loginFormInputs"
						onChange={(e) => inputChangeHandler(setUsername, e)}
					/>
					<label htmlFor="password" className="loginFormLabels">
						Password
					</label>
					<input
						type="password"
						name="password"
						className="loginFormInputs"
						id="password"
						placeholder="admin123"
						onChange={(e) => inputChangeHandler(setPassword, e)}
					/>
					<input type="submit" value="Login" className="loginBtn" />
				</form>
			</div>
		</div>
	);
};

export default Login;
