import React from "react";
import PropTypes from "prop-types";
import { NasaLogo } from "./../svg/NasaLogo.jsx";

export const WelcomeModal = ({ modal, setModal }) => {
	return (
		<div className="w-modal-box">
			<div className="w-modal">
				<h2 className="w-modal__title">{`Welcome to Tech Port | NASA`}</h2>
				<p className="w-modal__text">
					{`This is not the official website of the Tech Port by NASA. This is a rebuild web project made with
					the public `}
					<a
						href="https://api.nasa.gov/"
						target="_blank"
						rel="noopener noreferrer"
						className="w-modal__text--a">
						{"NASA API"}
					</a>
					{". If you want to visit the original website, please "}
					<a
						href="https://techport.nasa.gov/home"
						target="_blank"
						rel="noopener noreferrer"
						className="w-modal__text--a">
						click here
					</a>
				</p>
				<p className="w-modal__text">
					{"Made with ❤ by "}
					<a
						href="https://www.linkedin.com/in/bryan-garcia-fullstack/"
						target="_blank"
						rel="noopener noreferrer"
						className="w-modal__text--a w-modal__bryan">
						{"Bryan García"}
					</a>
					.
				</p>
				<button className="w-modal__button" onClick={event => setModal(false)}>{`Let's go`}</button>
				<div className="w-modal__nasa-logo">
					<NasaLogo />
				</div>
			</div>
		</div>
	);
};

WelcomeModal.propTypes = {
	modal: PropTypes.bool,
	setModal: PropTypes.func
};
