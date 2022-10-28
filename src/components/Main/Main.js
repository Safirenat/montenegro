// import React from "react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";

import "../../App.scss";
import "./Main.scss";
// import { ReactComponent as Accessoriesabsolute } from "../../assets/Images/accessories-absolute.svg";
// import { ReactComponent as Woodenabsolute } from "../../assets/Images/wooden-absolute.svg";
// import { ReactComponent as Combinedabsolute } from "../../assets/Images/combined-absolute.svg";
// import { ReactComponent as Glassbsolute } from "../../assets/Images/glass-absolute.svg";
// import { ReactComponent as Windowabsolute } from "../../assets/Images/window-absolute.svg";
// import { ReactComponent as Furnitureabsolute } from "../../assets/Images/furniture-absolute.svg";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import { Mainfon } from "../Mainfon/Mainfon";
import { Pros } from "../Pros/Pros";
import { Benefits } from "../Benefits/Benefits";
import { Analiz } from "../Analiz/Analiz";
import { Documents } from "../Documents/Documents";
// import { BackToTopText } from "../BackToTopText";
import { BackToTopButton } from "../BackToTopButton";
// import { MainInfo } from "../MainInfo/MainInfo";
import BgUp from "../../assets/Images/up.png";
// import ScrollToTop from "../ScrollTop/ScrollToTop";

export const Main = () => {
	document.title = "Montenegro Live";

	

  



	//   var Wooden = require("../../assets/Images/icon-wooden.jpg");
	//   var Glass = require("../../assets/Images/icon-glass.jpg");
	//   var Combined = require("../../assets/Images/icon-combined.jpg");
	//   var Window = require("../../assets/Images/icon-window.jpg");
	//   var Furniture = require("../../assets/Images/icon-furniture.jpg");
	//   var Accessories = require("../../assets/Images/icon-accessories.jpg");

	// document.body.scrollTop = document.documentElement.scrollTop = 0;


	//   }


	return (
		// <div className="container">
		<div className="main-gl">
			<Header />
			<Mainfon />
			<Pros />
			<Benefits />
			<Analiz />
			<Documents />
			{/* <MainInfo /> */}

			{/* <div className="testv">jshfjsf</div> */}

			{/* <div id="testr">Скролл</div> */}
			<Footer />

<BackToTopButton/>



{/* 			
			<div className="icon-up">
				<img src={BgUp} alt="BgMain" />
			</div> */}


			

			{/* <Mainfon />

		<div className="main__info">
			<span>Собственное производство</span>
			<span>Доставка по всей Росии</span>
			<span>Заказ от 1 единицы</span>
			<span>Гарантия 12 месяцев</span>
			<span>Изготовение по уникальным размерам и дизайну</span>
		</div>

		<div className="main__item-wrapper">
			<div className="main__item">
				<Link className="" to="/wooden/">
					<img src={Wooden} />
					<span>Деревянные двери</span>
					<div className="accessories-absolute">
						<Woodenabsolute />
					</div>
				</Link>
			</div>
			<div className="main__item">
				<Link className="" to="/glass/">
					<img src={Glass} />
					<span>Стеклянные двери</span>
					<div className="accessories-absolute">
						<Glassbsolute />
					</div>
				</Link>
			</div>
			<div className="main__item">
				<Link className="" to="/combined/">
					<img src={Combined} />
					<span>Комбинированные двери</span>
					<div className="accessories-absolute">
						<Combinedabsolute />
					</div>
				</Link>
			</div>
			<div className="main__item">
				<Link className="" to="/window/">
					<img src={Window} />
					<span>Форточки</span>
					<div className="accessories-absolute">
						<Windowabsolute />
					</div>
				</Link>
			</div>
			<div className="main__item">
				<Link className="" to="/furniture/">
					<img src={Furniture} />
					<span>Деревянная мебель</span>
					<div className="accessories-absolute">
						<Furnitureabsolute />
					</div>
				</Link>
			</div>
			<div className="main__item" id="anchor">
				<Link className="" to="/accessories/">
					<img src={Accessories} />
					<span>Аксессуары</span>
					<div className="accessories-absolute">
						<Accessoriesabsolute />
					</div>
				</Link>
			</div>
		</div>

		<Footer /> */}
		</div>
	);
};
