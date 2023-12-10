import { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LazyImage from "../../../utils/LazyImage";
import * as S from "../../../styles/VideoPost/Mobile.styles";

type VideoMobilePhotoSliderProps = {
	photoLength: number;
	id: number;
};

function VideoMobilePhotoSlider({
	photoLength,
	id,
}: VideoMobilePhotoSliderProps) {
	const settings: Settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		draggable: false,
	};

	function photos() {
		const arr = [];
		for (let i = 1; i <= photoLength; i++) {
			arr.push(
				<div key={id}>
					<LazyImage src={`./imgs/${id + 1}/${i}.png`} />
				</div>,
			);
		}
		return arr;
	}

	return <S.PhotoSlider {...settings}>{photos()}</S.PhotoSlider>;
}

export default VideoMobilePhotoSlider;
