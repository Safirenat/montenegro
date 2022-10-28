import React from "react";
import "./Back.scss";

import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as IconBack } from "../../assets/Images/icon-back.svg";

export const Back = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const hasPreviousState = location.key !== "default";

	const handleClick = () => {
		if (hasPreviousState) {
			navigate(-1);
		} else {
			navigate("/");
		}
	};

	return (
		<div className="global-background">
			<div className="global__container">
				<div className="icon__back-wrapper">
					<div onClick={handleClick} className="transfer__icon">
						<div className="icon-back">
							<IconBack />
						</div>
					</div>
					<span>Назад</span>
				</div>
			</div>
		</div>
	);
};
