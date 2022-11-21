import React from "react";
import logo from "../Assets/companyLogo.svg";
const Logo = () => {
	return (
		<div className="logoContainer">
			<img src={logo} className="App-logo" alt="logo" />
			<h6 className="logoTxt">Technology</h6>
		</div>
	);
};

export default Logo;
