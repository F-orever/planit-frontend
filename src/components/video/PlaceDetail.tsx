import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { BiTimeFive } from "react-icons/bi";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

import ParkIcon from "../../assets/svg/ParkIcon.svg";
import FillPrimaryCirclePlusIcon from "../../assets/svg/FillPrimaryCirclePlusIcon.svg";
import axios from "axios";

import PhotoSlider from "./PhotosSlider";
import Review, { reviewType } from "./Review";
import StarIcon from "../../assets/svg/StarIcon.svg";

type PlaceDetailProps = {
	onNextClick: () => void;
	onPrevClick: () => void;
	id: string;
};

function PlaceDetail({ onNextClick, onPrevClick, id }: PlaceDetailProps) {
	const [data, setData] = useState<any>(null);

	useEffect(() => {
		axios
			.get(
				`https://places.googleapis.com/v1/places/${id}?fields=*&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
			)
			.then((response) => {
				console.log(response.data.reviews == null);
				setData(response.data);
			});
	}, []);

	return (
		<Container>
			{data && (
				<>
					<SliderHeader>
						<div className="leftItems">
							<BsChevronDoubleLeft
								className="sliderButton"
								onClick={() => {
									onPrevClick();
								}}
							/>
							<div className="typeIcon">
								<ParkIcon />
							</div>
							<div className="titleBox">
								<span className="title">
									{data.displayName.text}
								</span>
								<span className="type">
									{data.primaryTypeDisplayName.text}
								</span>
							</div>
							<div className="info">
								<span>
									<FaLocationDot />
									{data.formattedAddress}
								</span>
								<span>
									<IoMdCall />
									{data.nationalPhoneNumber}
								</span>

								<span className="time">
									<BiTimeFive />
									<span
										style={{
											marginRight: "30px",
										}}
									>
										영업중
									</span>
									<span>오후 12:00~10:00</span>
								</span>
							</div>
						</div>
						<div className="rightItems">
							<div className="addBtnBox">
								<FillPrimaryCirclePlusIcon />
								<span>일정 추가</span>
							</div>
							<BsChevronDoubleRight
								className="sliderButton"
								onClick={() => {
									onNextClick();
								}}
							/>
						</div>
					</SliderHeader>
					<PhotoSlider photos={data ? data.photos : []} />
					<SeperateLine />
					<ReviewSummary>
						<div className="title">
							<span className="header">리뷰 요약</span>
							<span className="tags">
								{data.types.map((type: string) => `#${type} `)}
							</span>
						</div>
						<div className="rating">
							<span className="header">
								{data !== null && data.rating}
							</span>
							<span>
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
							</span>
							<span className="reviewCount">리뷰 5,227개</span>
						</div>
					</ReviewSummary>
					<SeperateLine />
					<ReviewContainer>
						{data.reviews.map((review: reviewType, idx: number) => {
							if (idx <= 1) {
								return <Review {...review} />;
							}
						})}
					</ReviewContainer>
				</>
			)}
		</Container>
	);
}

const SeperateLine = styled.div`
	width: 1035px;
	height: 0px;

	border-top: 1px solid #d9d9d9;
`;

const ReviewSummary = styled.div`
	width: 80%;
	height: 140px;
	margin-top: 45px;
	margin-bottom: 45px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	.title {
		display: flex;
		flex-direction: column;
		gap: 14px;
		align-items: flex-start;

		.header {
			color: ${({ theme }) => theme.textPrimary};
			font-size: 48px;
			font-weight: 700;
			line-height: normal;
			letter-spacing: 2.4px;
		}

		.tags {
			color: ${({ theme }) => theme.titlePrimary};
			font-size: 19.2px;
			font-weight: 300;
			line-height: 25px;
			letter-spacing: 0.96px;
		}
	}

	.rating {
		display: flex;
		flex-direction: column;
		gap: 18px;
		align-items: center;

		.header {
			font-size: 42px;
			font-weight: 800;
			letter-spacing: 2.1px;
		}

		.reviewCount {
			color: ${({ theme }) => theme.textPrimary};
			font-size: 18px;
			font-weight: 700;
			line-height: normal;
			letter-spacing: 0.9px;
		}
	}
`;

const SliderHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.leftItems,
	.rightItems {
		display: flex;
		align-items: center;
	}

	.sliderButton {
		width: 36px;
		height: 36px;
		color: #747474;
		cursor: pointer;
	}

	.typeIcon {
		margin-left: 54px;
	}

	.titleBox {
		margin-left: 16px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		.title {
			color: ${({ theme }) => theme.primary};
			font-size: 48px;
			font-weight: 700;
			letter-spacing: 2.4px;
		}

		.type {
			color: ${({ theme }) => theme.textPrimary};
			font-size: 24px;
			font-weight: normal;
			letter-spacing: 1.2px;
		}
	}

	.info {
		margin-left: 60px;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;

		span {
			display: flex;
			justify-content: center;
			align-items: center;
			svg {
				width: 30px;
				height: 30px;
				color: ${({ theme }) => theme.primary};
				text-align: center;
				margin-right: 20px;
			}
		}
	}

	.addBtnBox {
		margin-right: 52px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 11px;

		svg {
			width: 48px;
			height: 48px;
		}
		span {
			color: ${({ theme }) => theme.textPrimary};
			text-align: center;
			font-size: 15px;
			font-weight: 500;
		}
	}
`;

const Container = styled.div`
	width: 100%;
	box-sizing: border-box;
	margin-top: 16px;
	border: 0.5px solid #807b7b;
	border-radius: 10px;
	background-color: #f9f9f9;

	padding: 62px 52px;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ReviewContainer = styled.div`
	width: 100%;
	margin-top: 45px;
`;

export default PlaceDetail;
