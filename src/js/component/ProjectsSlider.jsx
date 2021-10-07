import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { SliderCard } from "./SliderCard.jsx";

export const ProjectsSlider = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="projects__slider">
			<h2>{`Most Viewed Projects`}</h2>
			{store.mostViewedProjects ? (
				store.mostViewedProjects.map(project => {
					return <SliderCard project={project} key={project.projectId} />;
				})
			) : (
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			)}

			<div className="projects__slider--buttons">
				<button className="buttons__prev">{`< Previous`}</button>
				<button className="buttons__next">{`Next >`}</button>
			</div>
		</div>
	);
};
