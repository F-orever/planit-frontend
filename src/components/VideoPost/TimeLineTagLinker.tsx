import * as S from "../../styles/VideoPost/TimeLine.styles";

type LinkerProps = {
	type: React.ReactNode;
	time: string;
};

function VideoPostTimeLineTagLinker({ type, time }: LinkerProps) {
	return (
		<S.TimeLineTagLinker>
			{type}
			<S.VerticalDottedLine />
			<S.TimeText>{time}</S.TimeText>
		</S.TimeLineTagLinker>
	);
}

export default VideoPostTimeLineTagLinker;
