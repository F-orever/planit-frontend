import ReactGA from "react-ga4";
import { useSetRecoilState, useRecoilState } from "recoil";

import * as S from "../../../styles/VideoMobile.styles";

import {
	placeDetailSliderIdx,
	myTripState,
	myTripID,
	sliderTimeState,
	timelineIdx,
} from "../../../recoil";
import { MarketIcon, FillPrimaryCirclePlusIcon } from "../../../assets/svg";

type VideoMobileTimeLineTagProps = {
	index: number;
	place: string;
	placeType: string;
	Icon: React.ReactNode;
	iscenter: boolean;
	time: number;
};

function VideoMobileTimeLineTag({
	index,
	place,
	placeType,
	Icon,
	time,
}: VideoMobileTimeLineTagProps) {
	//TODO : Recoil 가독성 개선
	const setPlaceDetailSliderIdx = useSetRecoilState(placeDetailSliderIdx);
	const setMyTrip = useSetRecoilState(myTripState);
	const setCenterIdx = useSetRecoilState(timelineIdx);
	const setCurrentTime = useSetRecoilState(sliderTimeState);
	const [id, setId] = useRecoilState(myTripID);

	return (
		<S.Tag
			onClick={() => {
				ReactGA.event({
					category: "Event",
					action: "Mobile TimeLine Tag",
					label: "모바일 타임라인 태그 클릭",
				});
				setCurrentTime(time);
				setPlaceDetailSliderIdx(index);
				setCenterIdx(index);
			}}
		>
			<FillPrimaryCirclePlusIcon
				className="plusBtn"
				onClick={() => {
					ReactGA.event({
						category: "Event",
						action: "Mobile TimeLine Tag Add Btn",
						label: "모바일 타임라인 태그 추가버튼 클릭",
					});
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
			<S.TagTextBox>
				<S.TagPlaceName>{place}</S.TagPlaceName>
				<S.TagPlaceType>{placeType}</S.TagPlaceType>
			</S.TagTextBox>
			<S.TagBackgroundIcon>{Icon}</S.TagBackgroundIcon>
		</S.Tag>
	);
}

export default VideoMobileTimeLineTag;
