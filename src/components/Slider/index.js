import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import ArrowsBlock from "./ArrowsBlock";

import Slide from "./OneSlide";

import "./index.css";

const Slider = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const [infiniteScroll, setInfiniteScroll] = useState(false);

	const [leftArrowClicked, setLeftArrowClicked] = useState();

	const [rightArrowClicked, setRightArrowClicked] = useState();

	const [slidesToShow, setSlidesToShow] = useState(1);

	const disablePreviousArrow = () => {
		return activeIndex <= 0 && infiniteScroll === false ? true : false;
	};

	const disableNextArrow = () => {
		return activeIndex >= sliderContent.length - 1 && infiniteScroll === false
			? true
			: false;
	};

	const sliderContent = [
		"slide1",
		"slide2",
		"slide3",
		"slide4",
		"slide5",
		"slide6",
		"slide7",
		"slide8",
	];

	console.log(sliderContent.slice(-activeIndex));

	const nextSlide = () => {
		setLeftArrowClicked(false);
		setRightArrowClicked(true);
		if (activeIndex + 1 >= sliderContent.length) {
			setActiveIndex(0);
			return;
		}
		setActiveIndex(activeIndex + 1);
	};

	const previousSlide = () => {
		setRightArrowClicked(false);
		setLeftArrowClicked(true);
		if (activeIndex - 1 < 0) {
			setActiveIndex(sliderContent.length - 1);
			return;
		}
		setActiveIndex(activeIndex - 1);
	};

	return (
		<div className={"slider_main"}>
			<ArrowsBlock
				onPreviousSLide={previousSlide}
				onNextSlide={nextSlide}
				previousArrowDisable={disablePreviousArrow()}
				nextArrowDisable={disableNextArrow()}
			/>
			{sliderContent.map((slide, i) =>
				slide === sliderContent[activeIndex] ? (
					<Slide
						content={slide}
						leftArrowClicked={leftArrowClicked}
						rightArrowClicked={rightArrowClicked}
					/>
				) : null
			)}
			<div className={"infinite_scroll"}>
				<button onClick={() => setInfiniteScroll(true)}>
					Бесконечная прокрутка
				</button>
			</div>

			<div className={"slides_to_show"}>
				<button onClick={() => setSlidesToShow(2)}>2 слайда</button>
			</div>
		</div>
	);
};

export default Slider;
