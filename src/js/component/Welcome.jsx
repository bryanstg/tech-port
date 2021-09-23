import React from "react";
import PropTypes from "prop-types";
import { NasaLogo } from "./../svg/NasaLogo.jsx";

export const Welcome = ({ modal, setModal }) => {
	return (
		<div className="welcome-box">
			<div className="welcome">
				<h2 className="welcome__title">{`Welcome to Tech Port | NASA`}</h2>
				<p className="welcome__text">
					{`This is not the official website of the Tech Port by NASA. This is a rebuild web project made with
					the public `}
					<a
						href="https://api.nasa.gov/"
						target="_blank"
						rel="noopener noreferrer"
						className="welcome__text--a">
						{"NASA API"}
					</a>
					{". If you want to visit the original website, please "}
					<a
						href="https://techport.nasa.gov/home"
						target="_blank"
						rel="noopener noreferrer"
						className="welcome__text--a">
						click here
					</a>
				</p>
				<p className="welcome__text">
					{"Made with ❤ by "}
					<a
						href="https://www.linkedin.com/in/bryan-garcia-fullstack/"
						target="_blank"
						rel="noopener noreferrer"
						className="welcome__text--a welcome__bryan">
						{"Bryan García"}
					</a>
					.
				</p>
				<button className="welcome__button" onClick={event => setModal(false)}>{`Let's go`}</button>
				<div className="welcome__nasa-logo">
					<NasaLogo />
				</div>
			</div>
		</div>
	);
};

Welcome.propTypes = {
	modal: PropTypes.bool,
	setModal: PropTypes.func
};
