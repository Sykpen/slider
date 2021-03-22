import React, { useState } from "react";
import ReactDom from "react-dom";

import "./index.css";

const Slide = ({
	content,
	imgUrl,
	leftArrowClicked,
	width,
	moveLeft,
	moveRight,
	previousArrowDisable,
	nextArrowDisable,
}) => {
	const mystyle = {
		width: width,
		animation: `${leftArrowClicked ? "left" : "right"} 1s`,
	};

	const [toughtStartPoint, setToughtStartPoint] = useState();

	const hadleToughtStart = (e) => {
		setToughtStartPoint(e.changedTouches[0].pageX);
	};

	const hadleToughtEnd = (e) => {
		if (
			toughtStartPoint > e.changedTouches[0].pageX &&
			toughtStartPoint - e.changedTouches[0].pageX > 50 &&
			nextArrowDisable === false
		) {
			moveRight();
			return;
		}
		if (
			toughtStartPoint < e.changedTouches[0].pageX &&
			e.changedTouches[0].pageX - toughtStartPoint > 50 &&
			previousArrowDisable === false
		) {
			moveLeft();
		}
	};

	return (
		<div
			className={"one_slide_main"}
			style={mystyle}
			onTouchStart={(e) => hadleToughtStart(e)}
			onTouchEnd={(e) => hadleToughtEnd(e)}
		>
			<p className={"slide_content"}>{content}</p>
			<div>
				<img src={imgUrl} className={"image"}></img>
			</div>
		</div>
	);
};

export default Slide;
