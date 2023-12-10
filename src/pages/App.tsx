import { useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import ReactGA from "react-ga4";

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

	useEffect(() => {
		ReactGA.send({ hitType: "pageview", page: "/", title: "MVP TEST" });
	}, []);

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
