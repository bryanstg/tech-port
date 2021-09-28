import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { WelcomeModal } from "../component/WelcomeModal.jsx";
import { Welcome } from "../component/Welcome.jsx";

export const Home = () => {
	const [openModal, setOpenModal] = useState(false);
	const { store, actions } = useContext(Context);
	const getProject = async () => {
		const response = await fetch(`${store.techPortUrl / view / 89555 / image}`);
		return response;
	};
	return (
		<div className="home">
			{openModal ? (
				<WelcomeModal modal={openModal} setModal={setOpenModal} />
			) : (
				<div className="background">
					<Welcome />
				</div>
			)}
		</div>
	);
};

{
	/* <img src={`${store.techPortUrl}/view/93531/image`} alt={""} /> */
}
