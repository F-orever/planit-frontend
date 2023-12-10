import { useSetRecoilState } from "recoil";

import * as S from "../../styles/VideoPost/MyTrip.styles";
import { myTripState } from "../../recoil/myTripState";
import { GiHamburgerMenu, BsFillTrashFill } from "../../assets/Icons";

type MyTripTagProps = {
	isgreen: boolean;
	text?: string;
	placeName: string;
	id: number;
};

//내 여행 일정 컴포넌트 내부에 들어가는 태그
function VideoPostMyTripTag({ isgreen, text, placeName, id }: MyTripTagProps) {
	const setMyTrip = useSetRecoilState(myTripState);

	return (
		<S.MyTripTagContainer isgreen={isgreen}>
			{isgreen ? (
				<>
					<S.MyTripHeadText>{text}</S.MyTripHeadText>
					<span>{placeName}</span>
				</>
			) : (
				<>
					<GiHamburgerMenu className="handle" />
					<S.MyTripPlaceName>{placeName}</S.MyTripPlaceName>
				</>
			)}

			{!isgreen && (
				<BsFillTrashFill
					className="trash"
					onClick={() => {
						setMyTrip((prev) =>
							prev.filter((item) => item.id !== id),
						);
					}}
				/>
			)}
		</S.MyTripTagContainer>
	);
}

export default VideoPostMyTripTag;
