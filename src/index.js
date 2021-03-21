import React from "react";
import ReactDom from "react-dom";
import Slider from "./components/Slider";
const root = document.getElementById("root");

const App = () => {
	return <Slider />;
};
ReactDom.render(<App />, root);
