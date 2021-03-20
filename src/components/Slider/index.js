import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import ArrowsBlock from "./ArrowsBlock";
import Dot from "./Dot";

import Slide from "./OneSlide";

import "./index.css";

const Slider = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [secondActiveIndex, setSecondActiveIndex] = useState(activeIndex + 1);

	const [infiniteScroll, setInfiniteScroll] = useState(false);

	const [leftArrowClicked, setLeftArrowClicked] = useState();

	const [rightArrowClicked, setRightArrowClicked] = useState();

	const [multipluSlides, setMultipluSlides] = useState(false);

	const disablePreviousArrow = () => {
		return activeIndex <= 0 && infiniteScroll === false ? true : false;
	};

	const disableNextArrow = () => {
		return activeIndex >=
			(multipluSlides ? sliderContent.length - 2 : sliderContent.length - 1) &&
			infiniteScroll === false
			? true
			: false;
	};

	const sliderContent = [
		{ text: "slide1" },
		{ image: "https://www.touropia.com/gfx/b/2020/01/indonesia.jpg" },
		{ text: "slide3" },
		{ image: "https://www.touropia.com/gfx/b/2020/01/indonesia.jpg" },
		{ text: "slide5" },
		{ image: "https://www.touropia.com/gfx/b/2020/01/indonesia.jpg" },
		{ text: "slide7" },
		{ text: "slide8" },
	];

	const handleDotClick = (id) => {
		setActiveIndex(id);
		setSecondActiveIndex(id + 1);
	};

	const nextSlide = () => {
		setLeftArrowClicked(false);
		setRightArrowClicked(true);

		if (multipluSlides) {
			if (activeIndex + 2 >= sliderContent.length) {
				if (secondActiveIndex === 0) {
					setActiveIndex(1);
					setSecondActiveIndex(secondActiveIndex + 2);
					return;
				}
				setActiveIndex(0);
				setSecondActiveIndex(1);

				return;
			}
			if (secondActiveIndex + 2 >= sliderContent.length) {
				setActiveIndex(activeIndex + 2);
				setSecondActiveIndex(0);
				return;
			}
			setActiveIndex(activeIndex + 2);
			setSecondActiveIndex(secondActiveIndex + 2);
			return;
		}

		if (activeIndex + 1 >= sliderContent.length) {
			setActiveIndex(0);
			return;
		}
		setActiveIndex(activeIndex + 1);
		setSecondActiveIndex(secondActiveIndex + 1);
	};

	const previousSlide = () => {
		setRightArrowClicked(false);
		setLeftArrowClicked(true);

		if (multipluSlides) {
			if (activeIndex - 2 < 0) {
				if (activeIndex === 1) {
					setActiveIndex(sliderContent.length - 1);
					setSecondActiveIndex(secondActiveIndex - 2);
					return;
				}

				setActiveIndex(sliderContent.length - 2);
				setSecondActiveIndex(sliderContent.length - 1);
				return;
			}
			setActiveIndex(activeIndex - 2);
			secondActiveIndex === 0
				? setSecondActiveIndex(sliderContent.length - 2)
				: setSecondActiveIndex(secondActiveIndex - 2);
			return;
		}

		if (activeIndex - 1 < 0) {
			setActiveIndex(sliderContent.length - 1);
			return;
		}
		setActiveIndex(activeIndex - 1);
		setSecondActiveIndex(secondActiveIndex - 1);
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
						content={slide.text}
						imgUrl={slide.image}
						leftArrowClicked={leftArrowClicked}
						rightArrowClicked={rightArrowClicked}
					/>
				) : null
			)}

			{multipluSlides
				? sliderContent.map((slide, i) =>
						slide === sliderContent[secondActiveIndex] ? (
							<Slide
								content={slide.text}
								imgUrl={slide.image}
								leftArrowClicked={leftArrowClicked}
								rightArrowClicked={rightArrowClicked}
								width={"100%"}
							/>
						) : null
				  )
				: null}
			<div className={"infinite_scroll"}>
				<button onClick={() => setInfiniteScroll(true)}>
					Бесконечная прокрутка
				</button>
			</div>

			<div className={"slides_to_show"}>
				<button onClick={() => setMultipluSlides(true)}>2 слайда</button>
			</div>

			<div className={"dots_container"}>
				{multipluSlides
					? sliderContent.map((slides, i) =>
							i % 2 === 0 ? (
								<Dot
									key={slides.text}
									active={activeIndex === i}
									id={i}
									handleDotClick={handleDotClick}
								/>
							) : null
					  )
					: sliderContent.map((slides, i) => (
							<Dot
								key={slides.text}
								active={activeIndex === i}
								id={i}
								handleDotClick={handleDotClick}
							/>
					  ))}
			</div>
		</div>
	);
};

export default Slider;
