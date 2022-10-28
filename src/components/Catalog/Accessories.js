import React from "react";
import "../../App.scss";

import { Header } from "../Header/Header";
import { Mainfon } from "../Mainfon/Mainfon";
import { Footer } from "../Footer/Footer";
import { Back } from "../Back/Back";

export const Accessories = () => {
	document.title = "Аксессуары";

	return (
		<div className="global-background">
			<div className="global__container">
				<Header />
				<Mainfon />
				<Back />

				<h1>Аксессуары</h1>

				<Footer />
			</div>
		</div>
	);
};
