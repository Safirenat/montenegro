import React from "react";

import { Link } from "react-router-dom";
import "./App.scss";

export const Card = () => {
	document.title = "Каталог";

	return (
		<div className="global__container">
			<h1> Каталог</h1>
			<div className="button-wrapper">
				<Link className="" to="/">
					<button>Перейти на первую страницу</button>
				</Link>
				<Link className="" to="/test/">
					<button>Перейти на вторую страницу</button>
				</Link>
			</div>
		</div>
	);
};
