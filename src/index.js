import React from "react";
import ReactDom from "react-dom";
import Slider from "./components/Slider";
const root = document.getElementById("root");

const App = () => {
	return (
		<div>
			<Slider />
		</div>
	);
};
ReactDom.render(<App />, root);
