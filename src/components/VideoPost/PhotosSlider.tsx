import { Settings } from "react-slick";
import { useSetRecoilState } from "recoil";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
	AiOutlineRight,
	AiOutlineLeft,
	AiOutlineClose,
} from "../../assets/Icons";
import { modalState } from "../../recoil";
import { LazyImage } from "../../utils";
import * as S from "../../styles/VideoPost/PlaceDetailComponents.styles";
import { getFileURL } from "../../db/repository/storage";

type PhotoSliderProps = {
	photoLength: number;
	id: number;
};

function VideoPostPhotoSlider({ photoLength, id }: PhotoSliderProps) {
	const setModalState = useSetRecoilState(modalState);
	const settings: Settings = {
		dots: false,
		lazyLoad: "ondemand",
		infinite: true,
		speed: 500,
		swipeToSlide: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <AiOutlineRight />,
		prevArrow: <AiOutlineLeft />,
	};

	function values() {
		const arr = [];
		for (let i = 1; i <= photoLength; i++) {
			arr.push(
				<div key={i}>
					<LazyImage
						src={getFileURL(`${id + 1}/${i}.png`)}
						onClick={() => {
							setModalState({
								children: (
									<S.PhotoStyledSliderChildren
										onClick={(e) => {
											e.stopPropagation();
										}}
									>
										<LazyImage
											src={getFileURL(
												`${id + 1}/${i}.png`,
											)}
										/>
										<AiOutlineClose
											onClick={() => {
												setModalState({
													children: <></>,
													isopen: false,
												});
											}}
										/>
									</S.PhotoStyledSliderChildren>
								),
								isopen: true,
							});
						}}
					/>
				</div>,
			);
		}

		return arr;
	}

	return <S.PhotoStyledSlider {...settings}>{values()}</S.PhotoStyledSlider>;
}

export default VideoPostPhotoSlider;
