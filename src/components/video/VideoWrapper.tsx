import React, {useRef, useEffect} from 'react';
import YouTube, {YouTubeProps} from 'react-youtube';

function VideoWrapper() {
	const playerRef = useRef<YouTube>(null);
	const opts: YouTubeProps['opts'] = {
		width:"100%",
		height:"720px"
	};

	useEffect(() => {
		playerRef.current?.getInternalPlayer().playVideoAt(10);
		const interval = setInterval(async() => {
			const elapsed = await playerRef.current?.getInternalPlayer().getCurrentTime();

			const seconds = Math.floor(elapsed);
			//TODO : seconds 실시간 정보 장소 슬라이더 덱과 연동하기
			console.log(seconds);
		  }, 100);

		  return () => {
			clearInterval(interval);
		  }
	}, []);

	return(
		<div style={{
			position:'relative',
			width: '66vw',
			height:'37vw',
		}}>
			<YouTube videoId='_3IU4Ekql1s' opts={opts} ref={playerRef}/>
		</div>
	)
}

export default VideoWrapper;