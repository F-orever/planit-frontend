import styled from "styled-components";
import Slider from "react-slick";

export const PhotoSlider = styled(Slider)`
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

export const Tag = styled.div`
	width: 140px;
	height: 48px;
	background-color: white;
	border-radius: 6px;
	border-bottom: 0.25px solid #d6d6d9;

	box-sizing: border-box;
	padding-left: 10px;

	display: flex;
	align-items: center;
	gap: 10px;

	cursor: pointer;
	position: relative;

	svg {
		width: 14px;
		height: 14px;
	}

	.infoBtn {
		width: 32px;
		height: 32px;
		color: grey;
		margin-right: 0px;
		z-index: 10;
	}

	.plusBtn {
		flex-shrink: 0;
	}
`;

export const TagTextBox = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TagPlaceName = styled.span`
	font-size: 14px;
	font-weight: 600;
	letter-spacing: -0.35px;
	color: #111;
`;

export const TagPlaceType = styled.span`
	color: #767676;
	font-size: 12px;
	font-weight: 400;
	letter-spacing: -0.3px;
`;

export const TagBackgroundIcon = styled.div`
	svg {
		width: 40px;
		height: 40px;
		position: absolute;
		right: 0px;
		bottom: -4px;
		filter: grayscale(90%) opacity(10%);
	}
`;

export const TagLinker = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4px;

	svg {
		width: 14px;
		height: 16px;
	}
`;

export const TimeText = styled.span`
	color: ${({ theme }) => theme.subtitle};
	font-size: 12px;
	font-weight: 600;
	letter-spacing: -0.3px;
`;

export const TagSeperateLine = styled.div`
	width: 50px;
	height: 0px;
	border-bottom: 1px solid rgba(118, 118, 118, 0.5);
`;

export const TagsContainer = styled.div`
	width: 100vw;
	height: 100px;
	position: relative;

	border-bottom: 1.3px solid rgba(128, 123, 123, 0.2);
`;

export const TagsScrollContainer = styled.div`
	width: 100%;
	height: 100%;

	background-color: #f9f9f9;

	display: flex;
	align-items: center;
	overflow-x: auto;
`;
