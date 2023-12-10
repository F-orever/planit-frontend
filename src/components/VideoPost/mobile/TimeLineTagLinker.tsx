import * as S from "../../../styles/VideoPost/Mobile.styles";

type VideoMobileTimeLineTagLinkerProps = {
	Icon: React.ReactNode;
	time: string;
};

function VideoMobileTimeLineTagLinker({
	Icon,
	time,
}: VideoMobileTimeLineTagLinkerProps) {
	return (
		<S.TagLinker>
			{Icon}
			<S.TagSeperateLine />
			<S.TimeText>{time}</S.TimeText>
		</S.TagLinker>
	);
}

export default VideoMobileTimeLineTagLinker;
