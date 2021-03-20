import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const Slide = ({
	content,
	imgUrl,
	leftArrowClicked,
	rightArrowClicked,
	width,
}) => {
	const mystyle = {
		width: width,
		animation: `${leftArrowClicked ? "reverse_alina" : "alina"} 1s`,
	};

	const image = {
		width: width,
		backgroundImage: `${imgUrl ? `url(${imgUrl})` : null}`,
	};

	return (
		<div className={"one_slide_main"} style={mystyle}>
			<p className={"slide_content"}>{content}</p>
			<div>
				<img src={imgUrl} className={"image"}></img>
			</div>
		</div>
	);
};

export default Slide;
