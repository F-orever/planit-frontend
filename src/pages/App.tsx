import { useMediaQuery } from "react-responsive";

import { FixedHeader, GNBHeader, Footer, Modal } from "../components";
import {
	VideoWrapper,
	VideoPostTimeLine,
	VideoPostInfomation,
	VideoPostPlaces,
	VideoPostMyTrip,
} from "../components/VideoPost";
import { VideoMobileTimeline } from "../components/VideoPost/mobile";

import * as S from "../styles/Layout.styles";

function App() {
	const isMobile: boolean = useMediaQuery({
		query: "(max-width:490px)",
	});

	return (
		<S.Body>
			<Modal />
			<S.Header>
				<FixedHeader />
				<GNBHeader />
			</S.Header>
			{isMobile ? (
				<>
					<S.Main>
						<VideoWrapper />
						<VideoMobileTimeline />
						<VideoPostInfomation />
						<VideoPostPlaces />
						<VideoPostMyTrip />
					</S.Main>
				</>
			) : (
				<>
					<S.Main>
						<VideoWrapper />
						<VideoPostInfomation />
						<VideoPostPlaces />
					</S.Main>
					<S.Aside>
						<VideoPostTimeLine />
						<VideoPostMyTrip />
					</S.Aside>
				</>
			)}
			<S.Footer>
				<Footer />
			</S.Footer>
		</S.Body>
	);
}

export default App;
