import styled from "styled-components";

export const Container = styled.div`
	width: calc(100vw / 3 * 2);
	margin-top: 20px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@media (max-width: 490px) {
		width: 100%;
		box-sizing: border-box;
	}
`;

export const Dates = styled.span`
	color: ${({ theme }) => theme.textPrimary};
	font-size: 20px;
	font-weight: 400;

	@media (max-width: 490px) {
		padding-left: 20px;
		padding-right: 16px;

		font-size: 12px;
		letter-spacing: -0.3px;
	}
`;

export const TitleContainer = styled.div`
	width: 100%;
	margin-top: 8px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 490px) {
		padding-left: 20px;
		padding-right: 16px;

		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
		box-sizing: border-box;
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		span {
			color: #ccc;
			font-size: 20px;
			font-weight: normal;
			letter-spacing: -1px;

			@media (max-width: 490px) {
				font-size: 12px;
				font-weight: 600;
				letter-spacing: -0.3px;
			}
		}
	}
`;

export const Title = styled.span`
	color: ${({ theme }) => theme.textPrimary};
	font-size: 32px;
	font-weight: 600;

	@media (max-width: 490px) {
		font-size: 20px;
		font-weight: 600;
		letter-spacing: -0.5px;
	}
`;

export const Icons = styled.div`
	display: flex;
	gap: 30px;

	@media (max-width: 1280px) {
		gap: 20px;
	}

	@media (max-width: 490px) {
		gap: 10px;
	}

	svg {
		width: 26px;
		height: 26px;
		color: #cccccc;

		@media (max-width: 490px) {
			width: 16px;
			height: 16px;
		}
	}
	span {
		margin-left: 6px;
	}
`;

export const HeartBox = styled.div<{ isclick: boolean }>`
	svg {
		cursor: pointer;
		color: ${({ isclick, theme }) =>
			isclick ? theme.primary : "#cccccc"} !important;
	}

	span {
		color: ${({ isclick, theme }) =>
			isclick ? theme.primary : "#cccccc"} !important;
		margin-left: 6px;
	}
`;

export const UserContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 36px;
	margin-top: 20px;

	@media (max-width: 490px) {
		padding-left: 20px;
		padding-right: 16px;

		justify-content: space-between;
		margin-top: 26px;
		margin-bottom: 20px;
	}

	img {
		width: 60px;
		height: 60px;
		margin-right: 16px;
		color: ${({ theme }) => theme.textPrimary};
		border-radius: 100%;

		@media (max-width: 490px) {
			width: 32px;
			height: 32px;
			margin-right: 0px;
		}
	}
`;

export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const UserInfoContainer = styled.div`
	display: flex;
	gap: 6px;

	@media (max-width: 490px) {
		display: flex;
		align-items: center;
		gap: 16px;
	}
`;

export const UserName = styled.span`
	color: ${({ theme }) => theme.titlePrimary};
	font-size: 24px;
	font-weight: 500;

	@media (max-width: 490px) {
		font-size: 15px;
		font-weight: 500;
	}
`;

export const UserFollwers = styled.span`
	color: ${({ theme }) => theme.titlePrimary};
	font-size: 15px;
	font-weight: 300;

	@media (max-width: 490px) {
		font-size: 12px;
		font-weight: 400;
		letter-spacing: -0.3px;
	}
`;

export const FollowBtn = styled.span`
	width: 100px;
	height: 36px;
	border-radius: 8px;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${({ theme }) => theme.textPrimary};
	color: white;

	font-size: 15px;
	font-weight: 700;

	@media (max-width: 490px) {
		width: 64px;
		height: 24px;
		padding: 8px 10px;
	}
`;

export const VideoInfo = styled.div<{ isopen: boolean }>`
	width: 100%;
	height: ${({ isopen }) => (isopen ? "auto" : "37px")};
	transition: height 1s ease-in-out;

	position: relative;
	box-sizing: border-box;

	padding-top: 25px;
	padding-bottom: 25px;
	padding-left: 90px;
	padding-right: 90px;

	@media (max-width: 1280px) {
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 20px;
		padding-right: 20px;
	}

	border-radius: 10px;
	border: 0.5px solid #807b7b;
	background-color: #f8f8f8;

	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 490px) {
		border-radius: 0px;

		padding-bottom: ${({ isopen }) => (isopen ? "36px" : "0px")};
		padding-top: ${({ isopen }) => (isopen ? "20px" : "0px")};
		padding-left: 20px;
		padding-right: 20px;
	}

	.icons {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding-bottom: 18px;
		border-bottom: 1px solid #d9d9d9;

		@media (max-width: 490px) {
			flex-direction: column;
			display: ${({ isopen }) => (isopen ? "flex" : "none")};

			.iconContainer:nth-child(1) {
				width: 70px;
			}

			.iconContainer:nth-child(3) {
				margin-left: 20px;
				width: 90px;
			}

			.iconContainer:nth-child(5),
			.themeContainer {
				margin-left: 20px;
				width: 150px;

				.theme {
					margin-right: 6px;
				}
			}
		}
	}
`;

export const KeywordContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;

	@media (max-width: 490px) {
		gap: 5px;
	}

	svg,
	img {
		width: 42px;
		height: 42px;
		color: ${({ theme }) => theme.primary};

		@media (max-width: 1280px) {
			width: 30px;
			height: 30px;
		}

		@media (max-width: 490px) {
			width: 22px;
			height: 22px;
		}
	}

	span {
		color: #747474;
		font-size: 24px;
		font-weight: 300;
		letter-spacing: 1.2px;

		@media (max-width: 1280px) {
			font-size: 18px;
			letter-spacing: 0px;
		}

		@media (max-width: 490px) {
			font-size: 13px;
			font-weight: 400;
			letter-spacing: -0.1px;
		}
	}
`;

export const MobileKeywordContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

export const KeywordSeperateLine = styled.div`
	height: 16px;
	border-left: 1px solid #d9d9d9;

	@media (max-width: 490px) {
		height: 14px;
	}
`;

export const ThemeContainer = styled.div`
	margin-top: 26px;
	display: flex;
	align-items: center;
	gap: 24px;

	@media (max-width: 490px) {
		margin-top: 0px;
		gap: 0px;
	}
`;

export const ThemeTitle = styled.span`
	color: #349348;
	font-size: 24px;
	font-weight: 500;
	letter-spacing: 1.2px;

	@media (max-width: 1280px) {
		font-size: 18px;
		letter-spacing: 0px;
	}

	@media (max-width: 490px) {
		font-size: 13px;
		font-weight: 600;
		letter-spacing: -0.1px;
	}
`;

export const ThemeText = styled.span`
	color: #747474;
	font-size: 24px;
	font-weight: 300;
	letter-spacing: 1.2px;

	@media (max-width: 1280px) {
		font-size: 16px;
		letter-spacing: 0px;
	}

	@media (max-width: 490px) {
		font-size: 13px;
		font-weight: 400;
		letter-spacing: -0.1px;
	}
`;

export const Desc = styled.span<{ isopen: boolean }>`
	margin-top: 22px;
	color: #767676;
	text-align: justify;
	font-size: 24px;
	font-weight: 400;
	line-height: 35px;

	@media (max-width: 490px) {
		margin-top: 18px;
		display: ${({ isopen }) => (isopen ? "inline-block" : "none")};

		font-size: 12px;
		font-weight: 400;
		line-height: 20px;
		letter-spacing: -0.3px;
	}
`;

export const ShortButton = styled.span`
	font-size: 11px;
	font-weight: 600;
	letter-spacing: 0.55px;

	position: absolute;
	right: 16px;
	bottom: 12px;
`;
