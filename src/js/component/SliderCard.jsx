import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const SliderCard = ({ project = null }) => {
	const { store, actions } = useContext(Context);
	const descriptionArray = project.description.split(" ");
	let descriptionReady = "";
	let wordCounter = 0;
	for (let word of descriptionArray) {
		if (wordCounter > 50) break;
		if (word.includes("<p>")) {
			console.log("hola, contengo <p> " + word);
			let newWord = word.replace("<p>", "");
			descriptionReady += ` ${newWord}`;
			wordCounter++;
		}
		if (word.includes("</p>")) {
			console.log("hola, contengo </p> " + word);
			let newWord = word.replace("</p>", "");
			descriptionReady += ` ${newWord}`;
			wordCounter++;
			continue;
		}
		if (word.includes("</br>")) {
			let newWord = word.replace("<br />", "");
			descriptionReady += ` ${newWord}`;
			wordCounter++;
			continue;
		}
		descriptionReady += ` ${word}`;
		wordCounter++;
	}
	console.log(descriptionReady);

	return (
		<React.Fragment>
			{project ? (
				<div className="project">
					<Link to={`/project/${project.projectId}`}>
						<h3 className="project__card--title">{project && project.title}</h3>
						<img
							src={`${store.techPortUrl}/view/${project && project.projectId}/image`}
							alt=""
							width="250"
							className="project__card--image"
						/>
					</Link>
					<i className="far fa-heart" />
					<p className="project__card--info">{project && `${descriptionReady} ...`}</p>
				</div>
			) : (
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			)}
		</React.Fragment>
	);
};

SliderCard.propTypes = {
	project: PropTypes.object
};
