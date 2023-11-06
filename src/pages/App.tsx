import React, { useState } from "react";
import styled from "styled-components";

import FixedHeader from "../components/FixedHeader";
import NavigationMenu from "../components/NavigationMenu";
import VideoWrapper from "../components/video/VideoWrapper";
import VideoTimeLine from "../components/video/VideoTimeLine";
import VideoInfomation from "../components/video/VideoInfomation";
import VideoPlaces from "../components/video/VideoPlaces";
import MyTrip from "../components/video/MyTrip";

import Footer from "../components/Footer";
import Modal from "../components/Modal";

function App() {
	const [currentTime, setCurrentTime] = useState(0);
	const [sliderTime, setSliderTime] = useState(0);

	return (
		<AppContainer>
			<Modal />
			<div className="header">
				<FixedHeader />
				<NavigationMenu />
			</div>

			<main className="main">
				<VideoWrapper
					sliderTime={sliderTime}
					setCurrentTime={setCurrentTime}
				/>
				<VideoInfomation />
				<VideoPlaces />
			</main>
			<aside className="aside">
				<VideoTimeLine
					currentTime={currentTime}
					setCurrentTime={setSliderTime}
				/>
				<MyTrip />
			</aside>

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
	}

	.aside {
		grid-area: aside;
		display: flex;
		flex-direction: column;

		width: 300px;
		padding-top: 20px;
		padding-right: 150px;
	}
`;

export default App;
