import { useRef, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { mockData } from "./mockData";
import { sliderTimeState, timelineIdx } from "../../recoil";
import { YoutubeVideoWrapper } from "../../styles/VideoPost/VideoWrapper";
import { getFileURL } from "../../db/repository/storage";

function VideoPostWrapper() {
	const playerRef = useRef<HTMLVideoElement>(null);
	const [fileURL, setFileURL] = useState("");

	const setCenterIdx = useSetRecoilState(timelineIdx);
	const sliderTime = useRecoilValue(sliderTimeState);

	//TimeLine이 변할 때 마다 Youtube의 영상 시간 조정
	useEffect(() => {
		if (playerRef.current) {
			playerRef.current.currentTime = sliderTime;
		}
	}, [sliderTime]);

	useEffect(() => {
		getFileURL("sample.mp4").then((url) => {
			setFileURL(url);
		});
	}, []);

	//setInterval로 0.1초 간격으로 영상 시간 변경에 따른 슬라이더에 영향
	useEffect(() => {
		const interval = setInterval(() => {
			const elapsed = playerRef.current
				? playerRef.current.currentTime
				: 0;
			const seconds = Math.floor(elapsed);
			for (let i = 1; i < mockData.length; i++) {
				if (
					mockData[i - 1].time <= seconds &&
					seconds < mockData[i].time
				) {
					setCenterIdx(i - 1);
				}
			}
			if (mockData[mockData.length - 1].time < seconds) {
				if (seconds !== mockData.length - 1) {
					setCenterIdx(mockData.length - 1);
				}
			}
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return <YoutubeVideoWrapper src={fileURL} ref={playerRef} controls />;
}

export default VideoPostWrapper;
