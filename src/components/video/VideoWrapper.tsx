import React, { useState, useRef, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

type currentTimeProps = {
	sliderTime: number;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
};

function VideoWrapper({ sliderTime, setCurrentTime }: currentTimeProps) {
	const playerRef = useRef<YouTube>(null);
	const Wrapper = useRef<HTMLDivElement>(null);
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
			setCurrentTime(seconds);
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div
			ref={Wrapper}
			style={{
				position: "relative",
				width: "calc(100vw / 3 * 2)",
				height: "37vw",
			}}
		>
			<YouTube videoId="_3IU4Ekql1s" opts={opts} ref={playerRef} />
		</div>
	);
}

export default VideoWrapper;
