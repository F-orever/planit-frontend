import React from 'react';
import styled from 'styled-components';

import FixedHeader from '../components/FixedHeader';
import NavigationMenu from '../components/NavigationMenu';
import VideoWrapper from '../components/video/VideoWrapper';
import VideoTimeLine from '../components/video/VideoTimeLine';
import VideoInfomation from '../components/video/VideoInfomation';
import VideoPlaces from '../components/video/VideoPlaces';
import MyTrip from '../components/MyTrip';

import Footer from '../components/Footer';

function App() {
	return(
		<AppContainer>
			<div className="header">
				<FixedHeader/>
				<NavigationMenu />
			</div>

			<main className="main" style={{marginTop:"100px"}}>
				<VideoWrapper />
				<VideoInfomation />
				<VideoPlaces />
			</main>
			<aside className="aside"  style={{marginTop:"100px"}}>
				<VideoTimeLine />
				<MyTrip />
			</aside>
			
			<footer className="footer">
				<Footer />
			</footer>
		</AppContainer>
	)
}

const AppContainer = styled.div`
	width:100%;
	display:grid;
	grid-template-columns: 4fr 1fr;
	grid-template-rows: 140px auto 100px;
	grid-template-areas:
		"header header"
		"main aside"
		"footer footer";
	
	.header{
		grid-area:header;
	}

	.footer {
		grid-area:footer;
	}

	.main {
		grid-area:main;
		display:flex;
		flex-direction:column;
	}

	.aside {
		grid-area:aside;
		display:flex;
		flex-direction:column;
	}
`

export default App;
