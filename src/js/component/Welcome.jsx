import React, { useEffect, useState } from "react";

export const Welcome = () => {
	const [APODImage, setAPODImage] = useState({});
	const [imageModal, setImageModal] = useState(false);
	const apiKey = process.env.API_KEY;
	const getAPOD = async () => {
		const APOD_URL = "https://api.nasa.gov/planetary/apod";
		const response = await fetch(`${APOD_URL}?api_key=${apiKey}`);
		if (response.ok) {
			const body = await response.json();
			setAPODImage(body);
		}
	};

	useEffect(() => {
		getAPOD();
	}, []);
	return (
		<>
			<div className="welcome-box">
				<div className="welcome__info">
					<h1 className="welcome__info--title">
						{"Welcome to "}
						<br /> {"Tech Port"}
					</h1>
					<p className="welcome__info--text">
						{`Techport allows the public to discover the technologies NASA is working on every day to explore space, understand the universe, and improve aeronautics. NASA is developing technologies in areas such as propulsion, nanotechnology, robotics, and human health`}
						.
					</p>
				</div>
				<div className="welcome__img">
					<img
						src={`https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png`}
						alt=""
					/>
					{/* <div className="image-modal">
						<div className={`welcome__img--info ${imageModal ? "image-modal__open" : "image-modal__close"}`}>
							<h4>{`Title: ${APODImage.title}`}</h4>
							<p>{APODImage.explanation}</p>
							<p>{`Date: ${APODImage.date}`}</p>
						</div>
						<div
							onClick={event => {
								setImageModal(prevStatus => !prevStatus);
							}}
							className="welcome__img--button">
							{`${imageModal ? "Close " : "Image Info"}`}
						</div>
					</div> */}
				</div>
			</div>
			<div className="welcome__button">{`See more`}</div>
		</>
	);
};
