import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Welcome } from "../component/Welcome.jsx";

export const Home = () => {
	const [openModal, setOpenModal] = useState(true);
	const { store, actions } = useContext(Context);
	const getProject = async () => {
		const response = await fetch(`${store.techPortUrl / view / 89555 / image}`);
		return response;
	};
	return (
		<div className="home">
			{openModal ? (
				<Welcome modal={openModal} setModal={setOpenModal} />
			) : (
				<React.Fragment>
					<img src={`${store.techPortUrl}/view/93531/image`} alt={""} />
				</React.Fragment>
			)}
		</div>
	);
};
