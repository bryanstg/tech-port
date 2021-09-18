import React, { useState } from "react";
import { Link } from "react-router-dom";
//Images and svg
import { NasaLogo } from "./../svg/NasaLogo.jsx";
import TechPortLogo from "./../../img/TechPort-Logo-2018.png";

export const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<nav className="navbar-techport">
			<a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" className="navbar__nasa-logo">
				<NasaLogo />
			</a>
			<Link to="/" className="navbar__techport-logo">
				<img src={TechPortLogo} alt="Tech Port Logo (2018)" className="navbar__techport-logo--img" />
			</Link>
			<div
				className={`navbar__links--button ${openMenu && "hide"}`}
				onClick={event => {
					setOpenMenu(prev => !prev);
				}}>
				<div className="button__design">{``}</div>
			</div>
			<div className={`navbar__links ${openMenu ? "" : "hide"}`}>
				<Link
					to="/home"
					className="navbar__links--a"
					onClick={event => {
						setOpenMenu(prev => !prev);
					}}>
					Home
				</Link>
				<Link
					to="/taxonomy"
					className="navbar__links--a"
					onClick={event => {
						setOpenMenu(prev => !prev);
					}}>
					Taxonomy
				</Link>
				<Link
					to="/about"
					className="navbar__links--a"
					onClick={event => {
						setOpenMenu(prev => !prev);
					}}>
					About Us
				</Link>
				<Link
					to="/help"
					className="navbar__links--a"
					onClick={event => {
						setOpenMenu(prev => !prev);
					}}>
					Help
				</Link>
				<div
					className="button__close"
					onClick={event => {
						setOpenMenu(prev => !prev);
					}}>
					X
				</div>
			</div>
		</nav>
	);
};
