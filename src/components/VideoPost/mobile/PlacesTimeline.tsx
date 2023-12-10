import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

import { timelineIdx } from "../../../recoil";
import { BusIcon } from "../../../assets/svg";
import * as S from "../../../styles/VideoPost/Mobile.styles";
import { mockData } from "../mockData";

import VideoMobileTimeLineTag from "./TimeLineTag";
import VideoMobileTimeLineTagLinker from "./TimeLineTagLinker";

function VideoMobilePlacesTimeline() {
	const index = useRecoilValue(timelineIdx);
	const refArr = useRef<HTMLDivElement[]>([]);
	const tagsContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		tagsContainerRef.current?.scrollTo({
			left: index * 190 - tagsContainerRef.current.offsetWidth / 2 + 70,
			top: 0,
			behavior: "smooth",
		});
	}, [index]);

	return (
		<S.TagsContainer>
			<S.TagsScrollContainer ref={tagsContainerRef}>
				{mockData.map((data, idx) => {
					return (
						<div
							key={idx}
							ref={(el) =>
								(refArr.current[idx] = el as HTMLDivElement)
							}
							style={{
								display: "flex",
							}}
						>
							<VideoMobileTimeLineTag
								index={idx}
								iscenter={idx === index}
								{...data}
							/>
							{idx !== mockData.length - 1 && (
								<VideoMobileTimeLineTagLinker
									Icon={<BusIcon />}
									time={"30분"}
								/>
							)}
						</div>
					);
				})}
			</S.TagsScrollContainer>
		</S.TagsContainer>
	);
}

export default VideoMobilePlacesTimeline;
