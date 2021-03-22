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

	const [touchStartPoint, setTouchStartPoint] = useState();

	const hadleTouchStart = (e) => {
		setTouchStartPoint(e.changedTouches[0].pageX);
	};

	const hadleTouchEnd = (e) => {
		if (
			touchStartPoint > e.changedTouches[0].pageX &&
			touchStartPoint - e.changedTouches[0].pageX > 50 &&
			nextArrowDisable === false
		) {
			moveRight();
			return;
		}
		if (
			touchStartPoint < e.changedTouches[0].pageX &&
			e.changedTouches[0].pageX - touchStartPoint > 50 &&
			previousArrowDisable === false
		) {
			moveLeft();
		}
	};

	return (
		<div
			className={"one_slide_main"}
			style={mystyle}
			onTouchStart={(e) => hadleTouchStart(e)}
			onTouchEnd={(e) => hadleTouchEnd(e)}
		>
			<p className={"slide_content"}>{content}</p>
			<div>
				<img src={imgUrl} className={"image"}></img>
			</div>
		</div>
	);
};

export default Slide;
