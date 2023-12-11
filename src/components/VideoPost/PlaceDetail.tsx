import { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";

import useResponsive from "../../hooks/useResponsive";
import {
	FaLocationDot,
	IoMdCall,
	BiTimeFive,
	BsChevronDoubleLeft,
	BsChevronDoubleRight,
	AiOutlineLeft,
	AiOutlineRight,
	AiOutlineInfoCircle,
	AiOutlineClose,
} from "../../assets/Icons";
import {
	ParkIcon,
	FillPrimaryCirclePlusIcon,
	StarIcon,
	MarketIcon,
} from "../../assets/svg";
import { myTripState, myTripID } from "../../recoil";
import { mockPlaceData } from "./mockData";

import PhotoSlider from "./PhotosSlider";
import MobilePhotoSlider from "./mobile/PhotoSlider";
import Review, { reviewType } from "./Review";

import * as S from "../../styles/VideoPost/PlaceDetail.styles";

type PlaceDetailProps = {
	onNextClick: () => void;
	onPrevClick: () => void;
	id: number;
};

function VideoPostPlaceDetail({
	onNextClick,
	onPrevClick,
	id,
}: PlaceDetailProps) {
	const { isMobile } = useResponsive();

	const setMyTrip = useSetRecoilState(myTripState);
	const [myTripId, setMyTripId] = useRecoilState(myTripID);
	const [isopen, setisopen] = useState(false);

	return (
		<S.Container>
			{isMobile && (
				<S.MobileAddBtn
					onClick={() => {
						setMyTrip((prev) => [
							...prev,
							{
								id: myTripId,
								icon: <MarketIcon />,
								placeName: String(
									mockPlaceData[id].displayName.text,
								),
							},
						]);
						setMyTripId((prev) => prev + 1);
					}}
				>
					<span>내 일정에 추가하기</span>
				</S.MobileAddBtn>
			)}
			<S.SliderHeader>
				<div className="leftItems">
					{isMobile ? (
						<AiOutlineLeft
							className="sliderButton"
							onClick={() => {
								onPrevClick();
							}}
						/>
					) : (
						<BsChevronDoubleLeft
							className="sliderButton"
							onClick={() => {
								onPrevClick();
							}}
						/>
					)}
					<S.PlaceTypeIcon>
						<ParkIcon />
					</S.PlaceTypeIcon>
					<S.PlaceTitleBox>
						<S.PlaceTitle>
							{mockPlaceData[id].displayName.text}
						</S.PlaceTitle>
						<S.PlaceTime>
							{mockPlaceData[id].primaryTypeDisplayName.text}
						</S.PlaceTime>
					</S.PlaceTitleBox>
					<S.PlaceInfomationSummary>
						<span>
							<FaLocationDot />
							{mockPlaceData[id].formattedAddress}
						</span>
						<span>
							<IoMdCall />
							{mockPlaceData[id].nationalPhoneNumber}
						</span>

						<span>
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
					</S.PlaceInfomationSummary>
				</div>
				{isMobile && (
					<S.MobileTitleContainer>
						<span>{mockPlaceData[id].displayName.text}</span>
						<AiOutlineInfoCircle
							onClick={() => {
								setisopen((prev) => !prev);
							}}
						/>
					</S.MobileTitleContainer>
				)}
				<div className="rightItems">
					<S.PlaceAddBtnBox
						onClick={() => {
							setMyTrip((prev) => [
								...prev,
								{
									id: myTripId,
									icon: <MarketIcon />,
									placeName: String(
										mockPlaceData[id].displayName.text,
									),
								},
							]);
							setMyTripId((prev) => prev + 1);
						}}
					>
						<FillPrimaryCirclePlusIcon />
						<span>일정 추가</span>
					</S.PlaceAddBtnBox>
					{isMobile ? (
						<AiOutlineRight
							className="sliderButton"
							onClick={() => {
								onNextClick();
							}}
						/>
					) : (
						<BsChevronDoubleRight
							className="sliderButton"
							onClick={() => {
								onNextClick();
							}}
						/>
					)}
				</div>
			</S.SliderHeader>
			<S.SeperateLine />
			{isMobile && (
				<S.PopupInfo isopen={isopen}>
					<AiOutlineClose
						className="closeBtn"
						onClick={() => {
							setisopen(false);
						}}
					/>
					<div className="info">
						<span>
							<FaLocationDot />
							{mockPlaceData[id].formattedAddress}
						</span>
						<span>
							<IoMdCall />
							{mockPlaceData[id].nationalPhoneNumber}
						</span>

						<span className="time">
							<BiTimeFive />
							<span
								style={{
									color: "#349348",
								}}
							>
								영업 중
							</span>
							<span> 오후 12:00~10:00</span>
						</span>
					</div>
				</S.PopupInfo>
			)}
			{isMobile ? (
				<MobilePhotoSlider
					photoLength={mockPlaceData[id].photoLength}
					id={id}
				/>
			) : (
				<PhotoSlider
					photoLength={mockPlaceData[id].photoLength}
					id={id}
				/>
			)}
			<S.SeperateLine />
			<S.ReviewSummary>
				<S.ReviewTitleBox>
					<span>리뷰 요약</span>
				</S.ReviewTitleBox>
				<S.ReviewRatingBox>
					<img src={`./rating.png`} />
					<div className="textArea">
						<S.ReviewCounts>
							{mockPlaceData[id].rating.value}
						</S.ReviewCounts>
						<span>
							<StarIcon />
							<StarIcon />
							<StarIcon />
							<StarIcon />
							<StarIcon />
						</span>
						<S.ReviewCounts>
							리뷰 {mockPlaceData[id].rating.count}개
						</S.ReviewCounts>
					</div>
				</S.ReviewRatingBox>
			</S.ReviewSummary>
			<S.SeperateLine />
			<S.ReviewContainer>
				{isMobile && <S.MobileReviewTitle>리뷰</S.MobileReviewTitle>}
				{mockPlaceData[id].reviews.map(
					(review: reviewType, idx: number) => (
						<>
							<Review id={id} idx={idx} review={review} />
							{isMobile && <S.SeperateLine />}
						</>
					),
				)}
			</S.ReviewContainer>
		</S.Container>
	);
}

export default VideoPostPlaceDetail;
