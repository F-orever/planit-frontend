import Slider from "react-slick";
import styled from "styled-components";

//PlaceDetail PhotoSlider
export const PhotoStyledSlider = styled(Slider)`
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

//PlaceDetail PhotoSlider
export const PhotoStyledSliderChildren = styled.div`
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

//PlaceDetail Review
export const ReviewContainer = styled.div`
	/* display: flex; */
	display: grid;
	grid-template-columns: 185px 1fr;
	gap: 32px;
	margin-bottom: 47px;
	padding-left: 84px;
	padding-right: 84px;

	@media (max-width: 490px) {
		padding: 0px;
		margin-top: 16px;
		margin-bottom: 16px;
	}

	img {
		width: 185px;
		height: 185px;
	}
`;

export const ReviewAuthorInfo = styled.div`
	display: flex;
	gap: 15px;

	@media (max-width: 490px) {
		gap: 4px;
	}

	svg {
		width: 46px;
		height: 46px;

		@media (max-width: 490px) {
			width: 28px;
			height: 28px;
		}
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin-bottom: 16px;

		@media (max-width: 490px) {
			margin-bottom: 6px;
		}
	}
`;

export const ReviewAuthor = styled.span`
	color: ${({ theme }) => theme.textPrimary};
	font-size: 20px;
	font-weight: 600;
	font-style: normal;

	@media (max-width: 490px) {
		font-size: 13px;
		font-weight: 600;
	}
`;

export const ReviewCounts = styled.span`
	color: ${({ theme }) => theme.titlePrimary};
	font-size: 16px;
	font-weight: 300;
	font-style: normal;

	@media (max-width: 490px) {
		font-size: 11px;
		font-weight: 400;
	}
`;

export const ReviewDesc = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	font-size: 19.2px;
	font-weight: 300;
	color: ${({ theme }) => theme.titlePrimary};
	margin-bottom: 22px;

	@media (max-width: 490px) {
		svg {
			width: 12px;
			height: 12px;
		}

		font-size: 11px;
		font-weight: 400;

		gap: 6px;
		margin-bottom: 8px;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	img {
		width: 46px;
		height: 46px;
		flex-shrink: 0;

		@media (max-width: 490px) {
			display: block;
			width: 30px;
			height: 30px;
		}
	}
`;

export const ReviewText = styled.span`
	font-size: 19.2px;
	color: ${({ theme }) => theme.textPrimary};
	line-height: 25px;
	letter-spacing: 0.96px;
	font-weight: 300;

	width: 100%;
	height: 75px;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;

	@media (max-width: 490px) {
		height: 100px;

		font-size: 14px;
		font-weight: 400;
		letter-spacing: -0.35px;

		-webkit-line-clamp: 6;
	}
`;
