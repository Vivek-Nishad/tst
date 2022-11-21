import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
	return (
		<Router>
			{<Navbar />}
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Home />} />
				<Route path="/project/:projectId" element={<ProjectDetails />} />
			</Routes>
		</Router>
	);
}

export default App;

// {!auth && <Route path="/login" element={<Login />} />}
// {auth && <Route path="/" element={<Home />} />}
// {auth && (
// 	<Route path="/project/:projectId" element={<ProjectDetails />} />
// )}
