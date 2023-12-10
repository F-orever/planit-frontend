import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

import VideoPostTimeLineTag from "./TimeLineTag";
import VideoPostTimeLineTagLinker from "./TimeLineTagLinker";

//svg
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { mockData } from "./mockData";
import { timelineIdx } from "../../recoil/timelineIdx";
import * as S from "../../styles/VideoPost/TimeLine.styles";
import { BusIcon } from "../../assets/svg";

function VideoPostTimeLine() {
	const index = useRecoilValue(timelineIdx);
	const [isopen, setIsOpen] = useState(true);
	const refArr = useRef<HTMLDivElement[]>([]);
	const tagsContainerRef = useRef<HTMLDivElement>(null);

	//highlight index 변경시 scroll
	useEffect(() => {
		tagsContainerRef.current?.scrollTo({
			top: index * 116 - 160,
			left: 0,
			behavior: "smooth",
		});
	}, [index]);

	return (
		<S.Container isopen={isopen}>
			<S.Header>
				<span>여행 경로</span>
			</S.Header>
			<S.TagsContainer isopen={isopen} ref={tagsContainerRef}>
				<div>
					{mockData.map((data, idx) => {
						return (
							<div
								key={idx}
								ref={(el) =>
									(refArr.current[idx] = el as HTMLDivElement)
								}
							>
								<VideoPostTimeLineTag
									index={idx}
									iscenter={idx === index}
									{...data}
								/>
								{idx !== mockData.length - 1 && (
									<VideoPostTimeLineTagLinker
										type={<BusIcon />}
										time={"30분"}
									/>
								)}
							</div>
						);
					})}
				</div>
			</S.TagsContainer>
			<S.Footer
				onClick={() => {
					setIsOpen((prev) => !prev);
				}}
			>
				<span>{isopen ? "경로 접기" : "경로 펼치기"} </span>
				{isopen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
			</S.Footer>
		</S.Container>
	);
}

export default VideoPostTimeLine;
