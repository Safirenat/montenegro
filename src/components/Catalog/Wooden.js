import React from "react";
import "../../App.scss";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Mainfon } from "../Mainfon/Mainfon";
import { Back } from "../Back/Back";

import BgMain from "../../assets/Images/icon.jpg";

export const Wooden = () => {
	document.title = "Деревянные двери";
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	

	return (
		<div className="global-background">
			<div className="global__container">
				<Header />
				<Mainfon />

				<Back />
				<h1 className="catalog__title"> Деревнные двери</h1>
				<div>
					<div className="catalog__icon-wrapper">
						<div className="catalog__icon">
							<img src={BgMain} alt="BgMain" />
							<span>"Элит"</span>
						</div>
						<div className="catalog__icon">
							<img src={BgMain} alt="BgMain" />
							<span>"Элит"</span>
						</div>
						<div className="catalog__icon">
							<img src={BgMain} alt="BgMain" />
							<span>"Элит"</span>
						</div>
						<div className="catalog__icon">
							<img src={BgMain} alt="BgMain" />
							<span>"Элит"</span>
						</div>
						<div className="catalog__icon">
							<img src={BgMain} alt="BgMain" />
							<span>"Элит"</span>
						</div>
						<div className="catalog__icon">
							<img src={BgMain} alt="BgMain" />
							<span>"Элит"</span>
						</div>
						<div className="catalog__icon">
							<img src={BgMain} alt="BgMain" />
							<span>"Элит"</span>
						</div>
						<div className="catalog__icon">
							<img src={BgMain} alt="BgMain" />
							<span>"Элит"</span>
						</div>
						<div className="catalog__icon">
							<img src={BgMain} alt="BgMain" />
							<span>"Элит"</span>
						</div>
						<div className="catalog__icon">
							<img src={BgMain} alt="BgMain" />
							<span>"Элит"</span>
						</div>
						<div className="catalog__icon">
							<img src={BgMain} alt="BgMain" />
							<span>"Элит"</span>
						</div>
						<div className="catalog__icon">
							<img src={BgMain} alt="BgMain" />
							<span>"Элит"</span>
						</div>
						<div className="catalog__icon">
							<img src={BgMain} alt="BgMain" />
							<span>"Элит"</span>
						</div>
						<div className="catalog__icon">
							<img src={BgMain} alt="BgMain" />
							<span>"Элит"</span>
						</div>
						<div className="catalog__icon">
							<img src={BgMain} alt="BgMain" />
							<span>"Элит"</span>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</div>
	);
};
