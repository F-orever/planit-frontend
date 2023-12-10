import styled from "styled-components";

//components/video/VideoTimeLine
export const Container = styled.div<{ isopen: boolean }>`
	width: 100%;
	height: ${(props) => (props.isopen ? "37vw" : "100px")};
	max-height: 720px;
	position: relative;

	transition: all 0.4s ease-in-out;
	border-radius: 10px;
	border: 0.5px solid #807b7b;
`;

//components/video/VideoTimeLine
export const Header = styled.div`
	background-color: #f5f5f5;
	height: 50px;
	width: 100%;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;

	display: flex;
	justify-content: center;
	align-items: center;

	span {
		color: ${({ theme }) => theme.textPrimary};
		text-align: center;
		font-size: 21px;
		font-weight: 500;
	}
`;

//components/video/VideoTimeLine
export const TagsContainer = styled.div<{ isopen: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;

	position: relative;
	height: ${(props) => (props.isopen ? "calc(100% - 100px)" : "0px")};
	transition: height 0.4s ease-in-out;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background: rgba(138, 139, 138, 0.8);
		border-radius: 10px;
	}

	&::-webkit-scrollbar-track {
		background: rgba(35, 37, 36, 0.1);
	}
`;

//components/video/VideoTimeLine
export const Footer = styled.div`
	background-color: #f5f5f5;
	height: 50px;
	width: 100%;

	display: flex;
	gap: 8px;
	justify-content: center;
	align-items: center;

	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
	transition: all 0.4s ease-in-out;
	cursor: pointer;

	span {
		color: ${({ theme }) => theme.textPrimary};
		text-align: center;
		font-size: 21px;
		font-weight: 500;
	}

	svg {
		color: ${({ theme }) => theme.textPrimary};
	}

	&:hover {
		background-color: ${({ theme }) => theme.titleSecondary};
		span {
			color: white;
		}
		svg {
			color: white;
		}
	}
`;

//components/video/TimeLineTag
export const TagWrapper = styled.div<{ iscenter: boolean }>`
	width: 240px;
	height: 66px;
	border-radius: 6px;
	background-color: ${(props) =>
		props.iscenter ? "white" : props.theme.primary};

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	position: relative;

	border: 0.25px solid #d6d6d9;
	border-radius: 6px;
	.plusBtn {
		margin-right: 10px;
		cursor: pointer;
	}
`;

export const VerticalLine = styled.div`
	height: 40px;
	border-left: 0.25px solid #d9d9d9;
	margin-left: 4px;
	margin-right: 8px;
`;

export const Content = styled.div<{ iscenter?: boolean }>`
	width: 200px;
	height: 66px;
	background-color: ${(props) =>
		props.iscenter ? props.theme.primary : "white"};
	border-radius: 6px;
	border: 0.25px solid #d6d6d9;
	box-shadow: 6px 0px 4px -2px rgba(0, 0, 0, 0.2);

	box-sizing: border-box;
	padding-left: 4px;

	display: flex;
	align-items: center;
	cursor: pointer;

	.infoBtn {
		width: 32px;
		height: 32px;
		color: ${(props) => (props.iscenter ? "white" : "grey")};
		margin-right: 0px;
		z-index: 10;

		flex-shrink: 0;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const PlaceName = styled.span<{ iscenter: boolean }>`
	font-size: 20px;
	font-weight: 600;
	letter-spacing: -0.5px;
	color: ${(props) => (props.iscenter ? "white" : "black")};
`;

export const TypeName = styled.span<{ iscenter: boolean }>`
	font-size: 14px;
	font-weight: 400;
	letter-spacing: -0.35px;
	color: ${(props) =>
		props.iscenter ? "white" : props.theme.titleSecondary};
`;

export const BackgroundIconWrapper = styled.div`
	svg {
		width: 60px;
		height: 60px;
		position: absolute;
		right: 40px;
		bottom: 0px;
		filter: grayscale(90%) opacity(10%);
	}
`;

export const TimeLineTagLinker = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;

	padding-left: 30px;
`;

export const TimeText = styled.span`
	color: ${({ theme }) => theme.subtitle};
	font-size: 10px;
	font-weight: 600;
	letter-spacing: -0.25px;
`;

export const VerticalDottedLine = styled.div`
	width: 0px;
	height: 48px;
	border-left: 4px dotted ${({ theme }) => theme.subtitle};
`;
