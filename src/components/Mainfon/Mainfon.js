import React from "react";
import { Link } from "react-router-dom";
import "../../App.scss";
import "./Mainfon.scss";

import { ReactComponent as IconHelpTelegram } from "../../assets/Images/icon-help-telegram.svg";
import { ReactComponent as IconHelpWhatsapp } from "../../assets/Images/icon-help-whatsapp.svg";
import { ReactComponent as IconHelpMobile } from "../../assets/Images/icon-help-mobile.svg";
import { ReactComponent as HeaderLogo } from "../../assets/Images/logo_nov.svg";

import BgMain from "../../assets/Images/img-block-two.jpeg";
// import BgMain from "../../assets/Images/img-block-two.png";

export const Mainfon = () => {
	return (
		<div className="global-background">
			<div className="block-two-background"></div>
			<div className="container">
				<div className="block-two-wrapper">
					<div className="block-two-img-wrapper">
						<img src={BgMain} alt="BgMain" />
					</div>

					<div className="block-two-text-wrapper">
						<spam className="block-two-text-title">О компании</spam>
						<spam className="block-two-text-subtitle">Мы предлагаем больше, чем другие.</spam>
						<spam className="block-two-text-values"> Одна из
						ценностей нашей команды — это стремление использовать
						мировые кризисы как инструмент для новых возможностей и
						роста.</spam>
						<spam className="block-two-text-wish">Нам не важно, откуда наши клиенты,<br/> главное Ваше
						желание изменить свою жизнь. </spam>
						<spam className="block-two-text-joy">
						  И мы Вам с радостью в этом
						поможем!</spam>
						<spam className="block-two-text-efficiency">Эффективность нашей работы обеспечивает
						многолетнее сотрудничество с лучшими специалистами в
						юридической и бухгалтерской сферах,</spam>
						<span className="block-two-text-efficiency2"> а также результаты,
						основанные на нашем личном опыте.</span>
						 
					</div>
				</div>
				{/* <div className="main__fon">
					<img src={BgMain} alt="BgMain" />
					<Link className="" to="/">
						<div className="main__logo-wrapper">
							<HeaderLogo />
						</div>
					</Link>

					<div className="mobaile__social">
						<div>
							<a href="tel:+7 (9950) 07 19 10">
								<IconHelpMobile />
							</a>
						</div>
						<div>
							<a href="https://wa.me/79950071910?text=Здравствуйте%2C+у+меня+есть+вопрос">
								<IconHelpWhatsapp />
							</a>
						</div>
						<div className="mobaile__social_telegram">
							<a href="https://t.me/SafinRenat">
								<IconHelpTelegram />
							</a>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};
