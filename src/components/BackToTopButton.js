// import React from "react";
import React, { useState, useEffect } from "react";

// import "../../App.scss";
// import "./Main.scss";


export const BackToTopButton = () => {

    const [backToTopButton, setBackToTopButton] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrolY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)

            }
        })
    }, [])
    

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smocth"
        })
    }


	return (
		<div>
            {backToTopButton && (
                <button style={{
                    position:"fixed",
                    bottom: "50px",
                    right: "50px",
                    height: "50px",
                    width: "50px",
                    fontSize: "50px",
                }}
                onClick={scrollUp}>^</button>
            )}
        </div>
	);
};
