import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const Slide = ({ content, leftArrowClicked, rightArrowClicked, width }) => {
	const mystyle = {
		width: width,
		animation: `${leftArrowClicked ? "reverse_alina" : "alina"} 1s`,
	};

	return (
		<div className={"one_slide_main"} style={mystyle}>
			{content}
		</div>
	);
};

export default Slide;
