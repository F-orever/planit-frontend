import styled, { css } from "styled-components";

//pages/App
export const Body = styled.div`
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
`;

export const Header = styled.header`
	grid-area: header;
`;

export const Footer = styled.footer`
	grid-area: footer;
`;

export const Main = styled.div`
	grid-area: main;

	justify-self: flex-end;

	display: flex;
	flex-direction: column;
	position: relative;

	@media (max-width: 490px) {
		width: 100vw;
	}
`;

export const Aside = styled.aside`
	grid-area: aside;
	display: flex;
	flex-direction: column;

	width: 300px;

	@media (max-width: 490px) {
		padding: 0px;
	}
`;

//components/FixedHeader.tsx
export const FixedHeaderWrapper = styled.div`
	width: 100%;
	height: 60px;

	background-color: ${({ theme }) => theme.primary};
	color: white;
	font-size: 24px;
	font-weight: 600;

	display: flex;
	justify-content: center;
	align-items: center;

	position: fixed;
	top: 0px;
	z-index: 10;

	@media (max-width: 490px) {
		position: absolute;
		top: 60px;
		height: 20px;
		font-size: 13px;
		font-weight: 800;
	}

	a {
		cursor: pointer;
		text-decoration: none;
		color: white;
	}
`;

//components/GNBHeader.tsx
export const GNBContainer = styled.div`
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

export const GNBContainerLeftItems = styled.div`
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
`;

export const NavBar = styled.nav`
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

export const MobileDropDownMenu = styled.div<MobileDropDownMenuProps>`
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

export const SubDropDown = styled.div<{ isopen: boolean }>`
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

export const DropDownMenu = styled.div<{ isopen: boolean }>`
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

	@media (max-width: 490px) {
		display: none;
	}
`;

export const DropDownMenuItem = styled.div`
	margin-left: 490px;

	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 36px;

	span {
		font-size: 16px;
	}
`;

export const IconsContainer = styled.div`
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

//components/Footer.tsx
export const FooterContainer = styled.footer`
	width: 100%;
	border-top: 0.5px solid #807b7b;
	background-color: #f9f9f9;

	padding-bottom: 33px;
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 490px) {
		padding-bottom: 21px;
	}

	svg {
		margin-top: 33px;
		width: 58px;
		height: 58px;

		@media (max-width: 490px) {
			margin-top: 21px;
			width: 24px;
			height: 24px;
		}
	}
`;

//components/Footer.tsx
export const FooterTitle = styled.span`
	margin-top: 26px;
	font-size: 20px;
	font-weight: 500;

	@media (max-width: 490px) {
		font-size: 13px;
		margin-top: 15px;
	}
`;

//components/Footer.tsx
export const FooterInfomation = styled.span`
	font-size: 19px;
	font-weight: 200;
	margin-top: 9px;
	line-break: normal;

	@media (max-width: 490px) {
		font-size: 11px;

		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

//components/Footer.tsx
export const FooterRules = styled.div`
	display: flex;
	gap: 36px;
	margin-top: 35px;

	@media (max-width: 490px) {
		margin-top: 15px;
		gap: 29px;
	}

	span:nth-child(1) {
		font-size: 20px;
		font-weight: 300;

		@media (max-width: 490px) {
			font-size: 13px;
		}
	}

	span:nth-child(2) {
		font-size: 20px;
		font-weight: 600;

		@media (max-width: 490px) {
			font-size: 13px;
		}
	}
`;

//components/Footer.tsx
export const FooterCopyRight = styled.span`
	margin-top: 35px;
	font-size: 20px;
	font-weight: 300;

	@media (max-width: 490px) {
		font-size: 13px;
		margin-top: 15px;
	}
`;

//components/Dialog.tsx
export const ModalWrapper = styled.div<{ isopen: boolean }>`
	width: 100vw;
	height: 100%;

	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;

	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(10px);

	display: ${({ isopen }) => (isopen ? "block" : "none")};
	transition: all 0.3s;
`;

//components/Dialog.tsx
export const ModalContent = styled.div`
	width: 100%;
	height: 100%;

	position: fixed;
	z-index: 100;

	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(10px);
	transition: all 0.3s;

	display: flex;
	justify-content: center;
	align-items: center;
`;
