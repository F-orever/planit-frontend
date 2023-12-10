import styled from "styled-components";

export const MyTripContainer = styled.div<{ isopen: boolean }>`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 16px;

	border-radius: 7.5px;
	border: 0.5px solid #807b7b;

	margin-top: 17px;
	position: sticky;
	top: 80px;

	@media (max-width: 490px) {
		display: ${({ isopen }) => (isopen ? "block" : "none")};

		position: fixed;
		right: 58px;
		bottom: 58px;
		z-index: 20;
		top: inherit;

		width: 242px;
		height: 444px;
	}
`;

export const Header = styled.div`
	background-color: #f5f5f5;
	width: 100%;
	height: 56px;

	display: flex;
	justify-content: center;
	align-items: center;

	border-top-right-radius: 7.5px;
	border-top-left-radius: 7.5px;
	border-bottom: 0.75px solid #807b7b;

	@media (max-width: 490px) {
		position: relative;

		svg {
			width: 24px;
			height: 24px;

			position: absolute;
			right: 14px;
			top: 14px;

			color: grey;
		}
	}

	span {
		color: ${({ theme }) => theme.textPrimary};
		font-size: 21px;
		font-weight: 500;

		@media (max-width: 490px) {
			font-size: 18px;
		}
	}
`;

export const Footer = styled.div`
	background-color: #f5f5f5;
	width: 100%;
	height: 56px;

	display: flex;
	justify-content: center;
	align-items: center;

	border-bottom-right-radius: 7.5px;
	border-bottom-left-radius: 7.5px;
	border-top: 0.75px solid #807b7b;

	transition: all ease-in-out 0.3s;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.primary};
		span {
			color: white;
		}
	}

	span {
		color: ${({ theme }) => theme.textPrimary};
		font-size: 21px;
		font-weight: 500;

		@media (max-width: 490px) {
			font-size: 18px;
		}
	}

	a {
		text-decoration: none;
	}
`;

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 490px) {
		padding-top: 20px;
		padding-bottom: 20px;

		background-color: #f9fbf9;

		height: 330px;
		overflow-y: auto;
		box-sizing: border-box;
	}
`;

export const TagWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const AddTag = styled.div`
	width: 250px;
	height: 40px;
	flex-shrink: 0;
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 7.5px;
	border: 0.75px dashed ${({ theme }) => theme.textPrimary};
	background-color: white;

	@media (max-width: 490px) {
		width: 200px;
	}
	span {
		color: ${({ theme }) => theme.textPrimary};
		font-size: 12px;
		font-weight: 400;
		letter-spacing: 1.2px;
	}
`;

export const MobileMyTripBtn = styled.div`
	width: 40px;
	height: 40px;

	border-radius: 100%;

	background-color: ${({ theme }) => theme.primary};

	position: fixed;
	right: 16px;
	bottom: 16px;
	z-index: 20;

	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		color: white;
		width: 24px;
		height: 24px;
	}
`;

export const VerticalLine = styled.div`
	width: 210px;
	height: 20px;
	border-left: 4px dotted #807b7b;
	flex-shrink: 0;

	@media (max-width: 490px) {
		width: auto;
	}
`;

export const MyTripTagContainer = styled.div<{ isgreen: boolean }>`
	width: 250px;
	height: 40px;
	flex-shrink: 0;
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

	border-radius: 7.5px;
	border: 0.75px solid ${({ theme }) => theme.textPrimary};
	background-color: ${({ isgreen, theme }) =>
		isgreen ? "#32543A" : "white"};

	@media (max-width: 490px) {
		width: 200px;
	}

	span {
		color: ${({ isgreen, theme }) =>
			isgreen ? "white" : theme.textPrimary};
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 1.6px;
		max-width: 140px;
	}

	svg {
		width: ${({ isgreen }) => (isgreen ? "20px" : "26px")};
		height: ${({ isgreen }) => (isgreen ? "28px" : "20px")};

		position: absolute;
		left: ${({ isgreen }) => (isgreen ? "52px" : "50px")};
		top: ${({ isgreen }) => (isgreen ? "9px" : "13px")};
	}

	.handle {
		position: absolute;
		top: 14px;
		left: 15px;

		width: 12px;
		height: 12px;
		color: #4a4a4a;
		cursor: pointer;

		@media (max-width: 490px) {
			width: 20px;
			height: 20px;

			top: 10px;
		}
	}

	.trash {
		width: 18px;
		height: 20px;
		cursor: pointer;

		position: absolute;
		left: inherit;
		right: 13px;
		top: 10px;
	}
`;

export const MyTripPlaceName = styled.span`
	display: inline-block;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	color: ${({ theme }) => theme.textPrimary};
	font-size: 16px;
	font-weight: 500;
	letter-spacing: -0.4px;
`;

export const MyTripHeadText = styled.span`
	font-size: 12px;
	font-weight: 500;
	letter-spacing: -0.3px;

	position: absolute;
	left: 9px;
	top: 13px;
`;
