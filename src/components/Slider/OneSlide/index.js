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
		animation: `${leftArrowClicked ? "left" : "right"} 1s`,
	};

	const image = {
		width: width,
		backgroundImage: `${imgUrl ? `url(${imgUrl})` : null}`,
	};

	const hadleToughtStart = (e) => {
		console.log(e.changedTouches[0].pageX);
		console.log(e.clientX);
	};

	return (
		<div
			className={"one_slide_main"}
			style={mystyle}
			onTouchStart={(e) => hadleToughtStart(e)}
		>
			<p className={"slide_content"}>{content}</p>
			<div>
				<img src={imgUrl} className={"image"}></img>
			</div>
		</div>
	);
};

export default Slide;
