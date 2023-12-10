import { useSetRecoilState, useRecoilState } from "recoil";

import {
	placeDetailSliderIdx,
	myTripState,
	myTripID,
	sliderTimeState,
	timelineIdx,
} from "../../recoil";
import {
	MarketIcon,
	FillWhiteCirclePlusIcon,
	FillPrimaryCirclePlusIcon,
	MessageDetailIcon,
} from "../../assets/svg";

import * as S from "../../styles/VideoPost/TimeLine.styles";

type TimeLineTagProps = {
	index: number;
	place: string;
	placeType: string;
	Icon: React.ReactNode;
	iscenter: boolean;
	time: number;
};

function VideoPostTimeLineTag({
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
	const [myTripId, setMyTripId] = useRecoilState(myTripID);
	return (
		<S.TagWrapper iscenter={iscenter}>
			<S.Content
				iscenter={iscenter}
				onClick={() => {
					setCurrentTime(time);
					setPlaceDetailSliderIdx(index);
					setCenterIdx(index);
				}}
			>
				<MessageDetailIcon className="infoBtn" />
				<S.VerticalLine />
				<S.TextContainer>
					<S.PlaceName iscenter={iscenter}>{place}</S.PlaceName>
					<S.TypeName iscenter={iscenter}>{placeType}</S.TypeName>
				</S.TextContainer>
				<S.BackgroundIconWrapper>{Icon}</S.BackgroundIconWrapper>
			</S.Content>
			{iscenter ? (
				<FillPrimaryCirclePlusIcon
					className="plusBtn"
					onClick={() => {
						setMyTrip((prev) => [
							...prev,
							{
								id: myTripId,
								icon: <MarketIcon />,
								placeName: place,
							},
						]);
						setMyTripId((prev) => prev + 1);
					}}
				/>
			) : (
				<FillWhiteCirclePlusIcon
					className="plusBtn"
					onClick={() => {
						setMyTrip((prev) => [
							...prev,
							{
								id: myTripId,
								icon: <MarketIcon />,
								placeName: place,
							},
						]);
						setMyTripId((prev) => prev + 1);
					}}
				/>
			)}
		</S.TagWrapper>
	);
}

export default VideoPostTimeLineTag;
