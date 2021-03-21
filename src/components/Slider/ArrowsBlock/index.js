import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const ArrowsBlock = ({
	onPreviousSLide,
	onNextSlide,
	previousArrowDisable,
	nextArrowDisable,
}) => {
	const previousDisableButtonStyle = {
		cursor: `${previousArrowDisable ? "not-allowed" : "pointer"}`,
		opacity: `${previousArrowDisable ? "0.5" : "1"}`,
	};

	const nextDisableButtonStyle = {
		cursor: `${nextArrowDisable ? "not-allowed" : "pointer"}`,
		opacity: `${nextArrowDisable ? "0.5" : "1"}`,
	};

	return (
		<>
			<button
				className={"arrow left_arrow"}
				onClick={() => onPreviousSLide()}
				disabled={previousArrowDisable}
				style={previousDisableButtonStyle}
			></button>
			<button
				className={"arrow right_arrow"}
				onClick={() => onNextSlide()}
				disabled={nextArrowDisable}
				style={nextDisableButtonStyle}
			></button>
		</>
	);
};

export default ArrowsBlock;
