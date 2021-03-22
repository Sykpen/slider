import React, { useState } from "react";
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

	const [multipleSlides, setmultipleSlides] = useState(false);

	const [sliderContent, setSliderContent] = useState([
		{ text: "slide1" },
		{
			image: "https://cdnimg.rg.ru/img/content/168/10/26/kotik_d_850_d_850.jpg",
		},
		{ text: "slide3" },
		{
			image:
				"https://cs9.pikabu.ru/post_img/big/2017/01/25/6/1485331254192128001.jpg",
		},
		{ text: "slide5" },
		{
			image:
				"https://catmolly.com/wp-content/uploads/2019/01/klichki-dlya-kotov.jpg",
		},
		{ text: "slide7" },
		{ text: "slide8" },
	]);

	const disablePreviousArrow = () => {
		return activeIndex <= 0 && infiniteScroll === false ? true : false;
	};

	const disableNextArrow = () => {
		return activeIndex >=
			(multipleSlides ? sliderContent.length - 2 : sliderContent.length - 1) &&
			infiniteScroll === false
			? true
			: false;
	};

	const handleDotClick = (id) => {
		setActiveIndex(id);
		setSecondActiveIndex(id + 1);
	};

	const nextSlide = () => {
		setLeftArrowClicked(false);
		setRightArrowClicked(true);

		if (multipleSlides) {
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

		if (multipleSlides) {
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

	const handleInfiniteMode = () => {
		setInfiniteScroll(!infiniteScroll);
	};

	const handleMultipleSlidesMode = () => {
		setmultipleSlides(!multipleSlides);
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
						width={multipleSlides ? "40%" : null}
						moveLeft={previousSlide}
						moveRight={nextSlide}
						previousArrowDisable={disablePreviousArrow()}
						nextArrowDisable={disableNextArrow()}
					/>
				) : null
			)}

			{multipleSlides
				? sliderContent.map((slide, i) =>
						slide === sliderContent[secondActiveIndex] ? (
							<Slide
								content={slide.text}
								imgUrl={slide.image}
								leftArrowClicked={leftArrowClicked}
								rightArrowClicked={rightArrowClicked}
								width={"40%"}
								moveLeft={previousSlide}
								moveRight={nextSlide}
								previousArrowDisable={disablePreviousArrow()}
								nextArrowDisable={disableNextArrow()}
							/>
						) : null
				  )
				: null}

			<div className={"slider_options_block"}>
				<div>
					<p>Infinite mode</p>
					<label className={"switch"}>
						<input type="checkbox"></input>
						<span
							className={"slider round"}
							onClick={() => handleInfiniteMode()}
						></span>
					</label>
				</div>
				<div>
					<p>Multiple slides mode</p>
					<label className={"switch"}>
						<input type="checkbox"></input>
						<span
							className={"slider round"}
							onClick={() => handleMultipleSlidesMode()}
						></span>
					</label>
				</div>
			</div>

			<div className={"dots_container"}>
				{multipleSlides
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
