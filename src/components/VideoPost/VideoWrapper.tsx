import { useState, useRef, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { mockData } from "./mockData";
import { sliderTimeState, timelineIdx } from "../../recoil";
import { YoutubeVideoWrapper } from "../../styles/VideoPost/VideoWrapper";

function VideoPostWrapper() {
	const playerRef = useRef<YouTube>(null);
	const Wrapper = useRef<HTMLDivElement>(null);

	const setCenterIdx = useSetRecoilState(timelineIdx);
	const sliderTime = useRecoilValue(sliderTimeState);

	//Youtube options
	const [opts, setOpts] = useState<YouTubeProps["opts"]>({
		width: Wrapper.current?.offsetWidth,
		height: Wrapper.current?.offsetHeight,
		playerVars: {
			start: 0,
			autoplay: 1,
		},
	});

	//TimeLine이 변할 때 마다 Youtube의 영상 시간 조정
	useEffect(() => {
		setOpts({
			width: Wrapper.current?.offsetWidth,
			height: Wrapper.current?.offsetHeight,
			playerVars: {
				start: sliderTime,
				autoplay: 1,
			},
		});
	}, [sliderTime]);

	//반응형 영상 크기 조절 설정
	useEffect(() => {
		const observer = new ResizeObserver(() => {
			setOpts({
				width: Wrapper.current?.offsetWidth,
				height: Wrapper.current?.offsetHeight,
				playerVars: {
					autoplay: 1,
				},
			});
		});

		if (Wrapper.current !== null) {
			observer.observe(Wrapper.current);
		}
	}, []);

	//setInterval로 0.1초 간격으로 영상 시간 변경에 따른 슬라이더에 영향
	useEffect(() => {
		const interval = setInterval(async () => {
			const elapsed = await playerRef.current
				?.getInternalPlayer()
				.getCurrentTime();

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

	return (
		<YoutubeVideoWrapper ref={Wrapper}>
			<YouTube videoId="Abp2iKMS72E" opts={opts} ref={playerRef} />
		</YoutubeVideoWrapper>
	);
}

export default VideoPostWrapper;
