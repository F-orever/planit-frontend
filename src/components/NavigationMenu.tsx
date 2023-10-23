import React, {useState} from 'react';
import styled, {css} from 'styled-components';

import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa'

import Logo from '../assets/logo.svg';

function NavigationMenu() {
	const [isopen, setIsOpen] = useState<boolean>(false);

	return(
		<StyledHeader>
			<div className="leftItems">
				<img src={Logo} alt="logo" />
				<NavBar 
					onMouseOver={() => {
						setIsOpen(true);
					}}
					onMouseLeave={() => {
						setTimeout(() => {
							setIsOpen(false);
						}, 500);
					}}
				>
					<span>여행기</span>
					<span>여행스냅</span>
					<span>여행정보</span>
					<span>스토어</span>
					
					<DropDownMenu $isopen={isopen}>
						<div className="menu">
							<span>반려동물</span>
							<span>캠핑</span>
						</div>
					</DropDownMenu>
				</NavBar>
			</div>
			
			<IconsContainer>
				<IoMdNotificationsOutline style={{color:"#349348"}}/>
				<FaUserCircle style={{color:"#349348"}}/>
			</IconsContainer>
		</StyledHeader>
	)
}

const StyledHeader = styled.div`
	width:100%;
	height:80px;

	padding-top:60px;
	border-bottom:1px solid #D9D9D9;

	position:relative;

	display:flex;
	flex-direction:row;
	justify-content:space-between;
	align-items:center;

	div.leftItems{
		height:100%;

		display:flex;
		flex-direction:row;
		align-items:center;

		margin-left:150px;
	}
	img {
		width:160px;
		height:30px;
	}
	span{
		display:block;
	}
`;

const NavBar = styled.nav`
	height:100%;

	display:flex;
	flex-direction:row;
	align-items:center;
	gap:30px;

	margin-left:50px;
	span {
		cursor:pointer;
		font-size:21px;
	}
`;

const DropDownMenu = styled.div<{$isopen: boolean}>`
	width:100%;
	height:0px;

	background-color:#F9F9F9;
	
	position:absolute;
	z-index:10;
	top:140px;
	left:0px;
	
	opacity:0;
	visibility:hidden;
	transition: opacity 0.6s ease-in-out, 
		visibility 0.6s ease-in-out, 
		height 0.6s ease-in-out;

	
	${({ $isopen }) => $isopen &&
	css`
		opacity: 1;
		visibility: visible;
		height:110px;
	`};

	.menu{
		margin-left:360px;

		height:100%;

		display:flex;
		flex-direction:column;
		justify-content:center;
		gap:36px;

		span{
			font-size:16px;
		}
	}
`;

const IconsContainer = styled.div`
	display:flex;
	flex-direction:row;
	align-items:center;
	gap:23px;

	margin-right:153px;

	svg{
		width:30px;
		height:30px;
		cursor:pointer;
	}
`

export default NavigationMenu;