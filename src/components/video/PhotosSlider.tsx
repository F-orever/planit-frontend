import react from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineRight, AiOutlineLeft, AiOutlineClose } from "react-icons/ai";

import { useSetRecoilState } from "recoil";
import { modalState } from "../../recoil/modalState";

type photoType = {
	authorAttributions: [];
	heightPx: number;
	name: string;
	widthPx: number;
};

type PhotoSliderProps = {
	photos: photoType[];
};

function PhotoSlider({ photos }: PhotoSliderProps) {
	const setModalState = useSetRecoilState(modalState);
	const settings: Settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <AiOutlineRight />,
		prevArrow: <AiOutlineLeft />,
	};

	return (
		<StyledSlider {...settings}>
			{photos !== null &&
				photos.map((photo: photoType, idx: number) => {
					return (
						<div key={idx}>
							<img
								src={`https://places.googleapis.com/v1/${photo.name}/media?maxHeightPx=400&maxWidthPx=400&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
								alt=""
								style={{
									cursor: "pointer",
								}}
								onClick={() => {
									setModalState({
										children: (
											<StyledChildren>
												<img
													onClick={(e) => e.stopPropagation()
													}
													src={`https://places.googleapis.com/v1/${photo.name}/media?maxHeightPx=1080&maxWidthPx=1920&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
													alt=""
												></img>
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
						</div>
					);
				})}
		</StyledSlider>
	);
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
		left: -75px;
	}
	.slick-next {
		right: -75px;
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
