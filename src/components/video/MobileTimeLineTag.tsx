import React from "react";
import styled from "styled-components";

//recoil
import { useSetRecoilState, useRecoilState } from "recoil";
import { placeDetailSliderIdx } from "../../recoil/placeDetailSliderIdxState";
import { myTripState, idState } from "../../recoil/myTripState";

//svg
import MarketIcon from "../../assets/svg/placetType/MarketIcon.svg";
import FillWhiteCirclePlusIcon from "../../assets/svg/FillWhiteCirclePlusIcon.svg";
import FillPrimaryCirclePlusIcon from "../../assets/svg/FillPrimaryCirclePlusIcon.svg";
import MessageDetailIcon from "../../assets/svg/MessageDetailIcon.svg";
import { sliderTimeState, timelineIdx } from "../../recoil/timelineIdx";

type TimeLineTagProps = {
	index: number;
	place: string;
	placeType: string;
	Icon: React.ReactNode;
	iscenter: boolean;
	time: number;
};

function MobileTimeLineTag({
	index,
	place,
	placeType,
	Icon,
	time,
	iscenter,
}: TimeLineTagProps) {
	const setPlaceDetailSliderIdx = useSetRecoilState(placeDetailSliderIdx);
	const setMyTrip = useSetRecoilState(myTripState);
	const setCenterIdx = useSetRecoilState(timelineIdx);
	const setCurrentTime = useSetRecoilState(sliderTimeState);
	const [id, setId] = useRecoilState(idState);
	return (
		<Content
			onClick={() => {
				setCurrentTime(time);
				setPlaceDetailSliderIdx(index);
				setCenterIdx(index);
			}}
		>
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
			<div className="textContainer">
				<span className="place">{place}</span>
				<span className="type">{placeType}</span>
			</div>
			<BackgroundIconWrapper>{Icon}</BackgroundIconWrapper>
		</Content>
	);
}

const Content = styled.div`
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

	.textContainer {
		display: flex;
		flex-direction: column;

		.place {
			font-size: 14px;
			font-weight: 600;
			letter-spacing: -0.35px;
			color: #111;
		}

		.type {
			color: #767676;
			font-size: 12px;
			font-weight: 400;
			letter-spacing: -0.3px;
		}
	}
`;

const BackgroundIconWrapper = styled.div`
	svg {
		width: 40px;
		height: 40px;
		position: absolute;
		right: 0px;
		bottom: -4px;
		filter: grayscale(90%) opacity(10%);
	}
`;

export default MobileTimeLineTag;
