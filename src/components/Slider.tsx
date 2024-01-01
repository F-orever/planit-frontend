import React, { useEffect, useRef, useState } from "react";

import { AiOutlineRight, AiOutlineLeft } from "../assets/Icons";
import * as S from "../styles/VideoPost/Slider.styles";

type SliderProps = {
	children?: React.ReactNode;
	showArrows?: boolean | undefined;
	className?: string | undefined;
	width?: number;
	height?: number;
	slidesToShow?: number | undefined;
};

const Slider = ({
	children, // children에 slider에 들어갈 요소들 list 받기
	showArrows = true, // 화살표 보이게/안보이게
	slidesToShow = 1, // 슬라이더 뷰에 한번에 몇 개 보일지
	className,
	width,
	height,
}: SliderProps) => {
	const [currIndex, setCurrIndex] = useState<number>(0);
	const sliderRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (sliderRef.current !== null) {
			sliderRef.current.style.transform = `translateX(-${currIndex}00%)`;
		}
	}, [currIndex]);

	// handlers
	const sliderPrev = () => {
		setCurrIndex((prev) => prev - 1);
	};
	const sliderNext = () => {
		setCurrIndex((prev) => prev + 1);
	};

	return (
		<S.SliderContainer>
			<S.ArrowButton direction="left" onClick={sliderPrev}>
				<AiOutlineLeft />
			</S.ArrowButton>
			<S.ArrowButton direction="right" onClick={sliderNext}>
				<AiOutlineRight />
			</S.ArrowButton>
			<S.Slider ref={sliderRef}>{children}</S.Slider>
		</S.SliderContainer>
	);
};

export default Slider;
