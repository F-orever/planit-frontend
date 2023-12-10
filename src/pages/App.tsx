import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { FixedHeader, GNBHeader, Footer, Modal } from "../components";
import {
	VideoWrapper,
	VideoTimeLine,
	VideoInfomation,
	VideoPlaces,
	MyTrip,
} from "../components/video";
import { VideoMobileTimeline } from "../components/video/mobile";

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
						<VideoInfomation />
						<VideoPlaces />
						<MyTrip />
					</S.Main>
				</>
			) : (
				<>
					<S.Main>
						<VideoWrapper />
						<VideoInfomation />
						<VideoPlaces />
					</S.Main>
					<S.Aside>
						<VideoTimeLine />
						<MyTrip />
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
