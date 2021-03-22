import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const Dot = ({ active, id, handleDotClick }) => {
	const mystyle = {
		backgroundColor: `${active ? "red" : "white"}`,
	};

	return (
		<div
			className={"one_dot_main"}
			style={mystyle}
			onClick={() => handleDotClick(id)}
		></div>
	);
};

export default Dot;
