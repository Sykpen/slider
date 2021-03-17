import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const ArrowsBlock = ({
	onPreviousSLide,
	onNextSlide,
	previousArrowDisable,
	nextArrowDisable,
}) => {
	return (
		<>
			<button
				className={"left_arrow"}
				onClick={() => onPreviousSLide()}
				disabled={previousArrowDisable}
			>
				Предыдущий
			</button>
			<button
				className={"right_arrow"}
				onClick={() => onNextSlide()}
				disabled={nextArrowDisable}
			>
				Следующий
			</button>
		</>
	);
};

export default ArrowsBlock;
