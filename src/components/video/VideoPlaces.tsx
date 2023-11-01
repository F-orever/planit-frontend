import React, { useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";
import PlaceDetail from "./PlaceDetail";

import { useRecoilValue } from "recoil";
import { sliderIdx } from "../../recoil/sliderState";

const mockPlacesId: string[] = [
	"ChIJl8gXNgvpaDURP6m_S0gwF74",
	"ChIJYX3RzGXraDURkrB6BWdfyMY",
	"ChIJHZ833WrsaDURsQWExKDNvDI",
];

function VideoPlaces() {
	const sliderRef = useRef<Slider>(null);
	const settings: Settings = {
		dots: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
	};
	const idx = useRecoilValue(sliderIdx);

	useEffect(() => {
		sliderRef.current?.slickGoTo(idx);
	}, [idx]);

	return (
		<StyledSlider ref={sliderRef} {...settings}>
			{mockPlacesId.map((place) => {
				if (sliderRef.current !== null) {
					return (
						<PlaceDetail
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
`;

export default VideoPlaces;
