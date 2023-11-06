import React from "react";
import styled from "styled-components";

//recoil
import { useSetRecoilState, useRecoilState } from "recoil";
import { placeDetailSliderIdx } from "../../recoil/placeDetailSliderIdxState";
import { myTripState, idState } from "../../recoil/myTripState";

import MarketIcon from "../../assets/svg/placetType/MarketIcon.svg";
import FillWhiteCirclePlusIcon from "../../assets/svg/FillWhiteCirclePlusIcon.svg";
import FillPrimaryCirclePlusIcon from "../../assets/svg/FillPrimaryCirclePlusIcon.svg";
import MessageDetailIcon from "../../assets/svg/MessageDetailIcon.svg";

type TimeLineTagProps = {
	index: number;
	place: string;
	placeType: string;
	IconType: string;
	isCenter: boolean;
	time: number;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
	setCenterIdx: React.Dispatch<React.SetStateAction<number>>;
};

function TimeLineTag({
	index,
	place,
	placeType,
	IconType,
	time,
	setCurrentTime,
	isCenter,
	setCenterIdx,
}: TimeLineTagProps) {
	const setPlaceDetailSliderIdx = useSetRecoilState(placeDetailSliderIdx);
	const setMyTrip = useSetRecoilState(myTripState);
	const [id, setId] = useRecoilState(idState);
	return (
		<TagWrapper isCenter={isCenter}>
			<Content
				isCenter={isCenter}
				onClick={() => {
					setCurrentTime(time);
					setPlaceDetailSliderIdx(index);
					setCenterIdx(index);
				}}
			>
				<div>
					<MessageDetailIcon className="infoBtn" />
				</div>
				<VerticalLine />
				<div className="textContainer">
					<span className="place">{place}</span>
					<span className="type">{placeType}</span>
				</div>
				<MarketIcon className="backgroundIcon" />
			</Content>
			{isCenter ? (
				<FillPrimaryCirclePlusIcon
					className="plusBtn"
					onClick={() => {
						setMyTrip((prev) => [
							...prev,
							{
								id: id,
								icon: <MarketIcon />,
								placeName: place,
							},
						]);
						setId((prev) => prev + 1);
					}}
				/>
			) : (
				<FillWhiteCirclePlusIcon
					className="plusBtn"
					onClick={() => {
						setMyTrip((prev) => [
							...prev,
							{
								id: id,
								icon: <MarketIcon />,
								placeName: place,
							},
						]);
						setId((prev) => prev + 1);
					}}
				/>
			)}
		</TagWrapper>
	);
}

const VerticalLine = styled.div`
	height: 40px;
	border-left: 0.25px solid #d9d9d9;
	margin-left: 4px;
	margin-right: 8px;
`;

const TagWrapper = styled.div<{ isCenter: boolean }>`
	width: 240px;
	height: 66px;
	border-radius: 6px;
	background-color: ${(props) => props.isCenter ? "white" : props.theme.primary};

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	position: relative;

	border: 0.25px solid #d6d6d9;
	border-radius: 6px;
	.plusBtn {
		margin-right: 10px;
		cursor: pointer;
	}
`;

const Content = styled.div<{ isCenter?: boolean }>`
	width: 200px;
	height: 66px;
	background-color: ${(props) => props.isCenter ? props.theme.primary : "white"};
	border-radius: 6px;
	border: 0.25px solid #d6d6d9;
	box-shadow: 6px 0px 4px -2px rgba(0, 0, 0, 0.2);

	box-sizing: border-box;
	padding-left: 4px;

	display: flex;
	align-items: center;
	cursor: pointer;

	.infoBtn {
		width: 32px;
		height: 32px;
		color: ${(props) => (props.isCenter ? "white" : "grey")};
		margin-right: 0px;
		z-index: 10;
	}

	.textContainer {
		display: flex;
		flex-direction: column;
		gap: 4px;

		.place {
			font-size: 20px;
			font-weight: 600;
			letter-spacing: -0.5px;
			color: ${(props) => (props.isCenter ? "white" : "black")};
		}

		.type {
			font-size: 14px;
			font-weight: 400;
			letter-spacing: -0.35px;
			color: ${(props) => props.isCenter ? "white" : props.theme.titleSecondary};
		}
	}

	.backgroundIcon {
		width: 60px;
		height: 60px;
		position: absolute;
		right: 40px;
		bottom: 0px;
		filter: grayscale(90%) opacity(10%);
	}
`;

export default TimeLineTag;
