import react from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineRight, AiOutlineLeft, AiOutlineClose } from "react-icons/ai";

import { useSetRecoilState } from "recoil";
import { modalState } from "../../recoil/modalState";
import LazyImage from "../../utils/LazyImage";

type photoType = {
	authorAttributions: [];
	heightPx: number;
	name: string;
	widthPx: number;
};

type PhotoSliderProps = {
	photoLength: number;
	id: number;
};

function PhotoSlider({ photoLength, id }: PhotoSliderProps) {
	const setModalState = useSetRecoilState(modalState);
	const settings: Settings = {
		dots: false,
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
						src={`./imgs/${id + 1}/${i}.png`}
						onClick={() => {
							setModalState({
								children: (
									<StyledChildren
										onClick={(e) => {
											e.stopPropagation();
										}}
									>
										<LazyImage
											src={`./imgs/${id + 1}/${i}.png`}
										/>
										<AiOutlineClose
											onClick={() => {
												setModalState({
													children: <></>,
													isopen: false,
												});
											}}
										/>
									</StyledChildren>
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

	return <StyledSlider {...settings}>{values()}</StyledSlider>;
}

const StyledSlider = styled(Slider)`
	width: 720px;
	height: 180px;

	margin-top: 60px;
	margin-bottom: 66px;

	svg {
		color: #a8a8a8;
	}
	.slick-list {
		margin: 0 -72px;
		height: 180px;
	}
	.slick-track {
		height: 180px;
	}

	.slick-slide {
		width: 180px !important;
		margin: 0 18px;
		img {
			width: 180px;
			height: 180px;
			border-radius: 10px;
		}
	}

	.slick-prev {
		width: 15px;
		height: 24px;
		left: -85px;
		cursor: pointer;
	}
	.slick-next {
		width: 15px;
		height: 24px;
		right: -85px;
		cursor: pointer;
	}
`;

const StyledChildren = styled.div`
	width: 60%;
	height: 60%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
		max-height: 100%;
	}

	svg {
		font-size: 36px;
		position: absolute;
		top: 20px;
		right: 20px;
		color: white;
		cursor: pointer;
	}
`;

export default PhotoSlider;
