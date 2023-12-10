import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import * as S from "../styles/Layout.styles";

import {
	IoMdNotificationsOutline,
	FaUserCircle,
	GiHamburgerMenu,
	FiChevronUp,
	FiChevronDown,
} from "../assets/Icons";
import Logo from "../assets/Logo.svg";

import ReactGA from "react-ga4";

function GNBHeader() {
	const isMobile: boolean = useMediaQuery({
		query: "(max-width:490px)",
	});
	const [isopen, setIsOpen] = useState<boolean>(false);
	const [subisopen, setsubIsOpen] = useState<boolean>(false);

	return (
		<S.GNBContainer>
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
				<S.MobileDropDownMenu isopen={isopen} subisopen={subisopen}>
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
					<S.SubDropDown isopen={subisopen}>
						<span>반려동물</span>
						<span>캠핑</span>
					</S.SubDropDown>

					<span>여행스냅</span>
					<span>여행정보</span>
					<span>스토어</span>
				</S.MobileDropDownMenu>
			)}
			<S.GNBContainerLeftItems>
				<Logo />
				<S.NavBar
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

					<S.DropDownMenu isopen={isopen}>
						<S.DropDownMenuItem>
							<span>반려동물</span>
							<span>캠핑</span>
						</S.DropDownMenuItem>
					</S.DropDownMenu>
				</S.NavBar>
			</S.GNBContainerLeftItems>

			<S.IconsContainer>
				<IoMdNotificationsOutline style={{ color: "#349348" }} />
				<FaUserCircle style={{ color: "#349348" }} />
			</S.IconsContainer>
		</S.GNBContainer>
	);
}

export default GNBHeader;
