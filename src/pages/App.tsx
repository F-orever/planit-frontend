import React, { useEffect } from "react";
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

function App() {
	const isMobile: boolean = useMediaQuery({
		query: "(max-width:490px)",
	});

	useEffect(() => {
		ReactGA.send({ hitType: "pageview", page: "/", title: "MVP TEST" });
	}, []);

	return (
		<AppContainer>
			<Modal />
			<div className="header">
				<FixedHeader />
				<GNBHeader />
			</div>
			{isMobile ? (
				<>
					<main className="main">
						<VideoWrapper />
						<VideoMobileTimeline />
						<VideoInfomation />
						<VideoPlaces />
						<MyTrip />
					</main>
				</>
			) : (
				<>
					<main className="main">
						<VideoWrapper />
						<VideoInfomation />
						<VideoPlaces />
					</main>
					<aside className="aside">
						<VideoTimeLine />
						<MyTrip />
					</aside>
				</>
			)}

			<footer className="footer">
				<Footer />
			</footer>
		</AppContainer>
	);
}

const AppContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 4fr 1fr;
	grid-template-rows: 140px auto 100px;
	grid-template-areas:
		"header header"
		"main aside"
		"footer footer";

	grid-column-gap: 20px;
	grid-row-gap: 40px;

	@media (max-width: 490px) {
		grid-template-areas:
			"header header"
			"main main"
			"footer footer";
		grid-template-rows: 80px auto auto 100px;
		grid-row-gap: 0px;
		@media (max-width: 490px) {
			grid-template-rows: 80px auto auto;
		}
	}

	.header {
		grid-area: header;
	}

	.footer {
		grid-area: footer;
	}

	.main {
		grid-area: main;

		justify-self: flex-end;

		display: flex;
		flex-direction: column;

		@media (max-width: 490px) {
			width: 100vw;
		}
	}

	.aside {
		grid-area: aside;
		display: flex;
		flex-direction: column;

		width: 300px;

		@media (max-width: 490px) {
			padding: 0px;
		}
	}
`;

export default App;
