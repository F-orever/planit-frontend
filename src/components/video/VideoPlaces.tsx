import React, { useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";
import PlaceDetail from "./PlaceDetail";

import { useRecoilState } from "recoil";
import { placeDetailSliderIdx } from "../../recoil/placeDetailSliderIdxState";

const mockPlacesId: string[] = [
	"ChIJl8gXNgvpaDURP6m_S0gwF74",
	"ChIJl8gXNgvpaDURP6m_S0gwF74",
	"ChIJYX3RzGXraDURkrB6BWdfyMY",
	"ChIJHZ833WrsaDURsQWExKDNvDI",
];

function VideoPlaces() {
	const sliderRef = useRef<Slider>(null);
	const [idx, setIdx] = useRecoilState(placeDetailSliderIdx);
	const settings: Settings = {
		dots: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
	};

	useEffect(() => {
		sliderRef.current?.slickGoTo(idx);
	}, [idx]);

	useEffect(() => {
		setIdx(0);
	}, [sliderRef.current]);

	return (
		<StyledSlider ref={sliderRef} {...settings}>
			{mockPlacesId.map((place, idx) => {
				if (sliderRef.current !== null) {
					return (
						<PlaceDetail
							key={idx}
							id={place}
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

	@media (max-width: 360px) {
		width: 100%;
	}
`;

export default VideoPlaces;
