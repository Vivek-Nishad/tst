import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import HomeSvg from "../Assets/Home.svg";
import profileSvg from "../Assets/profile.svg";

const Navbar = () => {
	const location = useLocation();

	return (
		<nav className="navbar">
			<Link to="/">
				<Logo />
			</Link>
			<div className="profile">
				{location.pathname === "/login" ? (
					<></>
				) : location.pathname === "/" ? (
					<div className="profileImgContainer">
						<img src={profileSvg} className="App-logo" alt="img" />
					</div>
				) : (
					<Link to="/">
						<img src={HomeSvg} className="App-logo" alt="img" />
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
