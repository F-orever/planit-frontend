import styled from "styled-components";

//Place Detail 전체 Container
export const Container = styled.div`
	width: 100%;
	box-sizing: border-box;
	margin-top: 16px;
	border: 0.5px solid #807b7b;
	border-radius: 10px;
	background-color: #f9f9f9;

	padding: 62px 52px;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 490px) {
		background-color: #f9f9f9;

		padding-top: 18px;
		padding-left: 22px;
		padding-right: 22px;
		padding-bottom: 16px;

		border: 0px;
	}
`;

export const MobileAddBtn = styled.div`
	width: 100%;
	height: 40px;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #5ca767;

	margin-bottom: 34px;

	span {
		color: white;
		font-size: 16px;
		font-weight: 500;
		letter-spacing: -0.4px;
	}
`;

export const SliderHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.leftItems,
	.rightItems {
		display: flex;
		align-items: center;
	}

	.sliderButton {
		width: 36px;
		height: 36px;
		color: #747474;
		cursor: pointer;
	}

	.typeIcon {
		margin-left: 54px;

		@media (max-width: 1300px) {
			margin-left: 24px;
		}

		@media (max-width: 490px) {
			display: none;
		}
	}

	.titleBox {
		margin-left: 16px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		.title {
			color: ${({ theme }) => theme.primary};
			font-size: 48px;
			font-weight: 700;
			letter-spacing: 2.4px;
			word-break: keep-all;

			@media (max-width: 1300px) {
				margin-left: 32px;
			}
			@media (max-width: 490px) {
				display: none;
			}
		}

		.type {
			color: ${({ theme }) => theme.textPrimary};
			font-size: 24px;
			font-weight: normal;
			letter-spacing: 1.2px;

			@media (max-width: 1300px) {
				margin-left: 16px;
			}
			@media (max-width: 490px) {
				display: none;
			}
		}
	}

	.info {
		margin-left: 60px;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;

		@media (max-width: 1300px) {
			margin-left: 24px;
		}
		@media (max-width: 490px) {
			display: none;
		}

		span {
			display: flex;
			justify-content: center;
			align-items: center;

			@media (max-width: 1300px) {
				font-size: 14px;
			}
			svg {
				width: 30px;
				height: 30px;
				color: ${({ theme }) => theme.primary};
				text-align: center;
				margin-right: 20px;
			}
		}
	}

	.addBtnBox {
		margin-right: 52px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 11px;

		@media (max-width: 490px) {
			display: none;
		}

		svg {
			width: 48px;
			height: 48px;
		}
		span {
			width: 100px;
			color: ${({ theme }) => theme.textPrimary};
			text-align: center;
			font-size: 15px;
			font-weight: 500;
		}
	}
`;

export const SeperateLine = styled.div`
	width: 90%;
	height: 0px;

	border-top: 1px solid #d9d9d9;
`;

export const ReviewSummary = styled.div`
	width: 80%;
	height: 140px;
	margin-top: 45px;
	margin-bottom: 45px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 490px) {
		width: 100%;
		height: auto;
		margin-top: 18px;
		margin-bottom: 18px;
	}

	.textArea {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 22px;
	}

	.title {
		display: flex;
		flex-direction: column;
		gap: 14px;
		align-items: flex-start;

		@media (max-width: 490px) {
			display: none;
		}

		.header {
			color: ${({ theme }) => theme.textPrimary};
			font-size: 48px;
			font-weight: 700;
			line-height: normal;
			letter-spacing: 2.4px;
		}

		.tags {
			color: ${({ theme }) => theme.titlePrimary};
			font-size: 19.2px;
			font-weight: 300;
			line-height: 25px;
			letter-spacing: 0.96px;
		}
	}

	.rating {
		display: flex;
		flex-direction: row;
		gap: 30px;
		align-items: center;

		img {
			width: 400px;

			@media (max-width: 1200px) {
				width: 300px;
			}
			@media (max-width: 900px) {
				width: 200px;
			}
			@media (max-width: 490px) {
				width: 60%;
			}
		}

		@media (max-width: 490px) {
			width: 90%;
			justify-content: space-between;

			svg {
				width: 11px;
				height: 11px;
			}
		}

		.header {
			font-size: 42px;
			font-weight: 800;
			letter-spacing: 2.1px;

			@media (max-width: 490px) {
				font-size: 16px;
				font-weight: 800;
				letter-spacing: 0.8px;
			}
		}

		.reviewCount {
			color: ${({ theme }) => theme.textPrimary};
			font-size: 18px;
			font-weight: 700;
			line-height: normal;
			letter-spacing: 0.9px;

			@media (max-width: 490px) {
				font-size: 11px;
				font-weight: 600;
				letter-spacing: -0.3px;
			}
		}
	}
`;

export const ReviewContainer = styled.div`
	width: 100%;
	margin-top: 45px;
	height: 420px;
	overflow-y: auto;

	@media (max-width: 490px) {
		margin-top: 24px;
		height: 390px;
	}

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

export const MobileTitleContainer = styled.div`
	position: relative;

	span {
		color: ${({ theme }) => theme.primary};
		font-size: 20px;
		font-weight: 800;
		font-style: normal;
		line-height: normal;
	}
	.infoBtn {
		position: absolute;
		width: 10px;
		height: 10px;
		top: -2px;
		cursor: pointer;
	}
`;

export const MobileReviewTitle = styled.div`
	font-size: 17px;
	font-weight: 800;
	letter-spacing: 0.85px;
	margin-bottom: 14px;
`;

export const PopupInfo = styled.div<{ isopen: boolean }>`
	display: ${({ isopen }) => (isopen ? "flex" : "none")};

	width: 210px;
	height: 100px;
	background-color: #f9fbf9;
	border: 0.2px solid #807b7b;

	position: absolute;
	top: 130px;
	z-index: 10;

	.info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: 4px;

		padding-left: 23px;
		padding-right: 23px;
	}

	svg {
		width: 16px;
		height: 16px;
		margin-right: 5px;
		color: #349348;
	}

	span {
		font-size: 12px;
		font-weight: 400;
		letter-spacing: -0.25px;
		color: #4a4a4a;

		display: flex;
		align-items: center;
	}

	.closeBtn {
		width: 12px;
		height: 12px;
		color: grey;

		position: absolute;
		right: 3px;
		top: 3px;
	}
`;
