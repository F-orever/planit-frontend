import React, { useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import { mockPlaceData } from "./mockData";

import { useRecoilState } from "recoil";
import { placeDetailSliderIdx } from "../../recoil/placeDetailSliderIdxState";
import PlaceDetail from "./PlaceDetail";

function VideoPlaces() {
	const isMobile: boolean = useMediaQuery({
		query: "(max-width:490px)",
	});

	const sliderRef = useRef<Slider>(null);
	const [idx, setIdx] = useRecoilState(placeDetailSliderIdx);
	const settings: Settings = {
		dots: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		arrows: isMobile ? false : true,
	};

	useEffect(() => {
		sliderRef.current?.slickGoTo(idx);
	}, [idx]);

	useEffect(() => {
		setIdx(0);
	}, [sliderRef.current]);

	return (
		<StyledSlider ref={sliderRef} {...settings}>
			{mockPlaceData.map((place, idx) => {
				if (sliderRef.current !== null) {
					return (
						<PlaceDetail
							key={idx}
							id={idx}
							onNextClick={sliderRef.current.slickNext}
							onPrevClick={sliderRef.current.slickPrev}
						/>
					);
				}
			})}
		</StyledSlider>
	);
}

const StyledSlider = styled(Slider)`
	width: calc(100vw / 3 * 2);

	@media (max-width: 490px) {
		width: 100vw;
	}
`;

export default VideoPlaces;
