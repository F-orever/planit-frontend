import React, { useState, useRef, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { mockData } from "./mockData";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { sliderTimeState, timelineIdx } from "../../recoil/timelineIdx";
import styled from "styled-components";
import ReactGA from "react-ga4";

function VideoWrapper() {
	const playerRef = useRef<YouTube>(null);
	const Wrapper = useRef<HTMLDivElement>(null);
	const setCenterIdx = useSetRecoilState(timelineIdx);
	const sliderTime = useRecoilValue(sliderTimeState);
	const [opts, setOpts] = useState<YouTubeProps["opts"]>({
		width: Wrapper.current?.offsetWidth,
		height: Wrapper.current?.offsetHeight,
		playerVars: {
			start: 0,
			autoplay: 1,
		},
	});

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

	//반응형 영상 크기 조절
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
		<StyledWrapper
			ref={Wrapper}
			onClick={() => {
				ReactGA.event({
					category: "Event",
					action: "Youtube Player Play",
					label: "유튜브 영상 클릭",
				});
			}}
		>
			<YouTube videoId="Abp2iKMS72E" opts={opts} ref={playerRef} />
		</StyledWrapper>
	);
}

const StyledWrapper = styled.div`
	position: relative;
	width: calc(100vw / 3 * 2);
	//width: 100%;
	height: 37vw;

	@media (max-width: 490px) {
		width: 100vw;
		height: 200px;
	}
`;

export default VideoWrapper;
