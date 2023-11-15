import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import ReactGA from "react-ga4";

import FixedHeader from "../components/FixedHeader";
import NavigationMenu from "../components/NavigationMenu";
import VideoWrapper from "../components/video/VideoWrapper";
import VideoTimeLine from "../components/video/VideoTimeLine";
import VideoInfomation from "../components/video/VideoInfomation";
import VideoPlaces from "../components/video/VideoPlaces";
import MyTrip from "../components/video/MyTrip";

import Footer from "../components/Footer";
import Modal from "../components/Modal";
import MobileVideoTimeline from "../components/video/MobileVideoTimeline";

function App() {
	const isMobile: boolean = useMediaQuery({
		query: "(max-width:490px)",
	});

	useEffect(() => {
		ReactGA.send({ hitType: "pageview", page: "/", title: "MVP TEST " });
	}, []);

	return (
		<AppContainer>
			<Modal />
			<div className="header">
				<FixedHeader />
				<NavigationMenu />
			</div>
			{isMobile ? (
				<>
					<main className="main">
						<VideoWrapper />
						<MobileVideoTimeline />
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

		display: flex;
		flex-direction: column;

		padding-left: 7vw;
		@media (max-width: 1670px) {
			padding-left: 3vw;
		}

		@media (max-width: 490px) {
			padding: 0px;
		}
	}

	.aside {
		grid-area: aside;
		display: flex;
		flex-direction: column;

		width: 300px;
		padding-right: 7vw;

		@media (max-width: 1670px) {
			padding-right: 3vw;
		}

		@media (max-width: 490px) {
			padding: 0px;
		}
	}
`;

export default App;
