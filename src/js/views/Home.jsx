import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Welcome } from "../component/Welcome.jsx";

export const Home = () => {
	const [openModal, setOpenModal] = useState(true);
	return (
		<div className="home">
			{openModal ? (
				<Welcome modal={openModal} setModal={setOpenModal} />
			) : (
				<React.Fragment>
					<h1>Hello Rigo!</h1>
					<p>
						<img src={rigoImage} />
					</p>
					<a href="#" className="btn btn-success">
						If you see this green button, bootstrap is working
					</a>
				</React.Fragment>
			)}
		</div>
	);
};
