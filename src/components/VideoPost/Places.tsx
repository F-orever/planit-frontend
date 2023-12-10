import { useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import { useRecoilState } from "recoil";

import PlaceDetail from "./PlaceDetail";

import { PlacesSlider } from "../../styles/VideoPost/PlaceDetailSlider.styles";
import { mockPlaceData } from "./mockData";
import useResponsive from "../../hooks/useResponsive";
import { placeDetailSliderIdx } from "../../recoil";

function VideoPostPlaces() {
	const { isMobile } = useResponsive();

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
		<PlacesSlider ref={sliderRef} {...settings}>
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
		</PlacesSlider>
	);
}

export default VideoPostPlaces;
