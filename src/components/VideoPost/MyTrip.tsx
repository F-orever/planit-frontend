import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ReactSortable } from "react-sortablejs";

import MyTripTag from "./MyTripTag";
import { myTripState } from "../../recoil";
import { MdBackpack, AiOutlineClose } from "../../assets/Icons";
import useResponsive from "../../hooks/useResponsive";
import * as S from "../../styles/VideoPost/MyTrip.styles";

// 내 여행 일정 리스트 컴포넌트
function VideoPostMyTrip() {
	const { isMobile } = useResponsive();
	const [myTripList, setMyTripList] = useRecoilState(myTripState);
	const [isopen, setisopen] = useState(false);

	useEffect(() => {}, [myTripList]);

	return (
		<>
			<S.MyTripContainer isopen={isopen}>
				<S.Header>
					<span>내 여행 일정</span>
					{isMobile && (
						<AiOutlineClose
							onClick={() => {
								setisopen(false);
							}}
						/>
					)}
				</S.Header>
				<S.Main>
					<MyTripTag
						isgreen={true}
						text="출발지"
						placeName="서울역"
						id={-1}
					/>
					<S.VerticalLine />
					<ReactSortable
						list={myTripList.map((x) => ({ ...x, chosen: false }))}
						setList={(newState) => setMyTripList(newState)}
						handle=".handle"
					>
						{myTripList.map((item) => (
							<S.TagWrapper key={item.id}>
								<MyTripTag
									isgreen={false}
									placeName={item.placeName}
									id={item.id}
								/>
								<S.VerticalLine />
							</S.TagWrapper>
						))}
					</ReactSortable>
					<S.AddTag>
						<span>이 위치에 추가됩니다</span>
					</S.AddTag>
					<S.VerticalLine />
					<MyTripTag
						isgreen={true}
						text="도착지"
						placeName="부산역"
						id={-2}
					/>
				</S.Main>
				<S.Footer>
					<a href="https://docs.google.com/forms/d/e/1FAIpQLSfpCACDU1onaIus8Tz_nanmxIFexfVCcswglm5uEa0W64e_Yg/viewform?usp=sf_link">
						<span>계획 실행하기</span>
					</a>
				</S.Footer>
			</S.MyTripContainer>
			{isMobile && (
				<S.MobileMyTripBtn
					onClick={() => {
						setisopen((prev) => !prev);
					}}
				>
					<MdBackpack />
				</S.MobileMyTripBtn>
			)}
		</>
	);
}

export default VideoPostMyTrip;
