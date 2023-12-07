import { useState } from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";
import ReactGA from "react-ga4";

import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import Logo from "../assets/Logo.svg";

function GNBHeader() {
	const isMobile: boolean = useMediaQuery({
		query: "(max-width:490px)",
	});
	const [isopen, setIsOpen] = useState<boolean>(false);
	const [subisopen, setsubIsOpen] = useState<boolean>(false);

	return (
		<StyledHeader>
			{isMobile && (
				<GiHamburgerMenu
					className="navBtn"
					onClick={() => {
						ReactGA.event({
							category: "Event",
							action: "Mobile Open Dropdown Menu",
							label: "모바일 드롭 다운 메뉴 버튼 클릭",
						});
						setIsOpen((prev) => !prev);
					}}
				/>
			)}
			{isMobile && (
				<MobileDropDownMenu isopen={isopen} subisopen={subisopen}>
					<span
						onClick={() => {
							ReactGA.event({
								category: "Event",
								action: "Mobile Open Sub Dropdown Menu",
								label: "모바일 드롭 다운 서브메뉴 버튼 클릭",
							});
							setsubIsOpen((prev) => !prev);
						}}
					>
						여행기 {subisopen ? <FiChevronUp /> : <FiChevronDown />}
					</span>
					<SubDropDown isopen={subisopen}>
						<span>반려동물</span>
						<span>캠핑</span>
					</SubDropDown>

					<span>여행스냅</span>
					<span>여행정보</span>
					<span>스토어</span>
				</MobileDropDownMenu>
			)}
			<div className="leftItems">
				<Logo />
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

					<DropDownMenu isopen={isopen}>
						<div className="menu">
							<span>반려동물</span>
							<span>캠핑</span>
						</div>
					</DropDownMenu>
				</NavBar>
			</div>

			<IconsContainer>
				<IoMdNotificationsOutline style={{ color: "#349348" }} />
				<FaUserCircle style={{ color: "#349348" }} />
			</IconsContainer>
		</StyledHeader>
	);
}

const StyledHeader = styled.div`
	width: 100%;
	height: 80px;

	padding-top: 60px;
	border-bottom: 1px solid #d9d9d9;

	position: relative;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 490px) {
		padding-top: 0px;
		height: 60px;
		justify-content: center;
	}

	div.leftItems {
		height: 100%;

		display: flex;
		flex-direction: row;
		align-items: center;

		margin-left: 150px;

		@media (max-width: 1280px) {
			margin-left: 40px;
		}

		@media (max-width: 490px) {
			margin-left: 0px;
		}
	}
	svg {
		width: 160px;
		height: 30px;
	}
	span {
		display: block;
	}

	.navBtn {
		color: ${({ theme }) => theme.primary};
		width: 32px;
		height: 32px;
		position: absolute;
		top: 14px;
		left: 12px;
	}
`;

const NavBar = styled.nav`
	height: 100%;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 30px;

	margin-left: 50px;
	span {
		cursor: pointer;
		font-size: 21px;
	}

	@media (max-width: 490px) {
		display: none;
	}
`;

type MobileDropDownMenuProps = {
	isopen: boolean;
	subisopen: boolean;
};

const MobileDropDownMenu = styled.div<MobileDropDownMenuProps>`
	width: 90px;
	height: 0px;

	background-color: #349348;

	position: absolute;
	left: 0px;
	top: 61px;
	z-index: 10;

	opacity: 0;
	visibility: hidden;
	transition:
		opacity 0.6s ease-in-out,
		visibility 0.6s ease-in-out,
		height 0.6s ease-in-out;

	${({ isopen, subisopen }) =>
		isopen &&
		css`
			opacity: 1;
			visibility: visible;
			height: ${subisopen ? "200px" : "150px"};
		`};

	span {
		height: 36px;

		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 15px;
		font-weight: 700;
		color: white;

		svg {
			width: 18px;
			height: 18px;
		}
	}
`;

const SubDropDown = styled.div<{ isopen: boolean }>`
	width: 100%;
	height: 0px;
	opacity: 0;
	visibility: hidden;

	transition:
		opacity 0.6s ease-in-out,
		visibility 0.6s ease-in-out,
		height 0.6s ease-in-out;

	${({ isopen }) =>
		isopen &&
		css`
			opacity: 1;
			visibility: visible;
			height: 50px;
		`};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 8px;

	span {
		height: auto;
		font-size: 13px;
		font-weight: 600;
	}
`;

const DropDownMenu = styled.div<{ isopen: boolean }>`
	width: 100%;
	height: 0px;

	background-color: #f9f9f9;

	position: absolute;
	z-index: 10;
	top: 140px;
	left: 0px;

	opacity: 0;
	visibility: hidden;
	transition:
		opacity 0.6s ease-in-out,
		visibility 0.6s ease-in-out,
		height 0.6s ease-in-out;

	${({ isopen }) =>
		isopen &&
		css`
			opacity: 1;
			visibility: visible;
			height: 110px;
		`};

	.menu {
		margin-left: 490px;

		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 36px;

		span {
			font-size: 16px;
		}
	}

	@media (max-width: 490px) {
		display: none;
	}
`;

const IconsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 23px;

	margin-right: 153px;

	@media (max-width: 1280px) {
		margin-right: 40px;
	}

	svg {
		width: 30px;
		height: 30px;
		cursor: pointer;
	}

	@media (max-width: 490px) {
		display: none;
	}
`;

export default GNBHeader;
