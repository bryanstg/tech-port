import React from "react";
import { ProjectsSlider } from "./ProjectsSlider.jsx";

export const Projects = () => {
	return (
		<div className="projects-container">
			<div className="projects">
				<ProjectsSlider />
				<div className="projects__box" />
				<div className="projects__box" />
				<div className="projects__box" />
				<div className="projects__box" />
				<div className="projects__box" />
				<div className="projects__box" />
			</div>
		</div>
	);
};
