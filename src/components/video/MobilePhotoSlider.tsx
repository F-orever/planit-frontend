import react from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function MobilePhotoSlider({ photoLength, id }: PhotoSliderProps) {
	const settings: Settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		draggable: false,
	};

	function values() {
		const arr = [];
		for (let i = 1; i <= photoLength; i++) {
			arr.push(
				<div key={id}>
					<img
						src={`./imgs/${id + 1}/${i}.png`}
						alt=""
						style={{
							cursor: "pointer",
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
	margin-top: 10px;

	.slick-list {
		width: 340px;
		height: 370px;
	}

	.slick-slide {
		img {
			width: 340px;
			height: 370px;
			border-radius: 10px;
		}
	}

	.slick-prev {
		left: 10px;
		z-index: 10;
	}

	.slick-next {
		right: 10px;
		z-index: 10;
	}

	.slick-dots {
		position: absolute;
		z-index: 10;
		bottom: 10px;
	}

	.slick-dots li button:before {
		opacity: 0.3;
		color: white;
	}
	.slick-dots li.slick-active button:before {
		opacity: 1;
	}
`;

const StyledChildren = styled.div`
	/* width: 60%;
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
	} */
`;

export default MobilePhotoSlider;
