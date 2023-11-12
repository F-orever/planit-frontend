import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

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
		query: "(max-width:360px)",
	});
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

	@media (max-width: 360px) {
		grid-template-areas:
			"header header"
			"main main"
			"footer footer";
		grid-template-rows: 80px auto auto 100px;
		grid-row-gap: 0px;
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

		padding-top: 20px;
		padding-left: 150px;

		@media (max-width: 360px) {
			padding: 0px;
		}
	}

	.aside {
		grid-area: aside;
		display: flex;
		flex-direction: column;

		width: 300px;
		padding-top: 20px;
		padding-right: 150px;

		@media (max-width: 360px) {
			padding: 0px;
		}
	}
`;

export default App;
