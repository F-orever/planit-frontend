import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

import PlaceDetail from "./VideoPost/PlaceDetail";

import Slider from "./Slider";
import { mockPlaceData } from "./VideoPost/mockData";
import useResponsive from "../hooks/useResponsive";
import { placeDetailSliderIdx } from "../recoil";

const TestComponent = () => {
	// const { isMobile } = useResponsive();

	// const sliderRef = useRef<Slider>(null);
	const [idx, setIdx] = useRecoilState(placeDetailSliderIdx);
	const settings = {
		showArrows: true,
		slidesToShow: 1,
	};

	// useEffect(() => {
	// 	sliderRef.current?.slickGoTo(idx);
	// }, [idx]);

	// useEffect(() => {
	// 	setIdx(0);
	// }, [sliderRef.current]);

	return (
		<Slider {...settings}>
			{/* <Slider ref={sliderRef} {...settings}> */}
			{mockPlaceData.map((place, idx) => {
				// if (sliderRef.current) {
				return (
					<PlaceDetail
						key={idx}
						id={idx}
						onNextClick={() => {}}
						onPrevClick={() => {}}
					/>
				);
				// }
			})}
		</Slider>
	);
};

export default TestComponent;
