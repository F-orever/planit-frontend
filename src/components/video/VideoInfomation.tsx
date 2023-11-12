import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { get, statics, update } from "../../db/repository/statics";
import { useMediaQuery } from "react-responsive";

//icons
import { BsFillBookmarkFill, BsFillPersonFill } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiFillHeart, AiOutlineCalendar } from "react-icons/ai";
import { PiShareFatFill } from "react-icons/pi";
import { HiLocationMarker } from "react-icons/hi";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { LiaMoneyBillAltSolid } from "react-icons/lia";
import { PiCaretUpBold, PiCaretDownBold } from "react-icons/pi";

function VideoInfomation() {
	const [isclick, setClick] = useState(false);
	const [isopen, setisopen] = useState(true);
	const [statics, setStatics] = useState<statics>({
		id: "",
		views: -1,
		loves: -1,
	});

	const isMobile: boolean = useMediaQuery({
		query: "(max-width:360px)",
	});

	//useEffect(() => {}, [statics]);

	useEffect(() => {
		fetchStatics();
	}, []);

	const fetchStatics = async () => {
		const _statics = await get();

		setStatics(_statics);
		update(_statics.id, {
			id: _statics.id,
			views: _statics.views + 1,
			loves: _statics.loves,
		});
	};

	const fetchHearts = async () => {
		const _statics = await get();

		setStatics(_statics);
		update(_statics.id, {
			id: _statics.id,
			views: _statics.views,
			loves: _statics.loves,
		});
	};

	return (
		<Container>
			<span className="date">2023. 10. 19.</span>
			<TitleContainer>
				<span className="title">
					부산 풀코스! 서울에서 부산 당일치기 도전기
				</span>
				<div className="icons">
					<div>
						<BsFillPersonFill />
						<span
							style={{
								marginLeft: "6px",
							}}
						>
							{statics.views && statics.views}
						</span>
					</div>
					<HeartBox isclick={isclick}>
						<AiFillHeart
							onClick={() => {
								if (!isclick) {
									update(statics.id, {
										id: statics.id,
										views: statics.views,
										loves: statics.loves + 1,
									});
								}

								fetchHearts();
								setClick((prev) => !prev);
							}}
						/>
						<span>{statics.loves && statics.loves}</span>
					</HeartBox>
					<PiShareFatFill />
					<BsFillBookmarkFill />
				</div>
			</TitleContainer>
			<UserContainer>
				{isMobile ? (
					<div
						style={{
							display: "flex",
							gap: "6px",
						}}
					>
						<BiSolidUserCircle />
						<div className="userinfo">
							<span className="name">tree_jin99</span>
							<span className="followers">팔로워 23.4만명</span>
						</div>
					</div>
				) : (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "16px",
						}}
					>
						<BiSolidUserCircle />
						<div className="userinfo">
							<span className="name">tree_jin99</span>
							<span className="followers">팔로워 23.4만명</span>
						</div>
					</div>
				)}

				<span className="followBtn">+ 팔로우</span>
			</UserContainer>
			<VideoInfo isopen={isopen}>
				{isMobile ? (
					<>
						<div className="icons">
							<div className="mobileContainer">
								<div className="iconContainer">
									<HiLocationMarker />
									<span>부산</span>
								</div>
								<div className="verticalLine"></div>
								<div className="iconContainer">
									<BsFillPersonFill />
									<span>1인</span>
								</div>
								<div className="verticalLine"></div>
								<div className="iconContainer">
									<AiOutlineCalendar />
									<span>당일치기</span>
								</div>
							</div>
							<div className="mobileContainer">
								<div className="iconContainer">
									<FaCanadianMapleLeaf />
									<span>가을</span>
								</div>
								<div className="verticalLine"></div>
								<div className="iconContainer">
									<LiaMoneyBillAltSolid />
									<span>~20만원</span>
								</div>
								<div className="verticalLine"></div>
								<div className="themeContainer">
									<span className="theme">테마</span>
									<span className="themeText">
										#자연#미식#관광
									</span>
								</div>
							</div>
						</div>
					</>
				) : (
					<>
						<div className="icons">
							<div className="iconContainer">
								<HiLocationMarker />
								<span>부산</span>
							</div>
							<div className="verticalLine"></div>
							<div className="iconContainer">
								<BsFillPersonFill />
								<span>1인</span>
							</div>
							<div className="verticalLine"></div>
							<div className="iconContainer">
								<AiOutlineCalendar />
								<span>당일치기</span>
							</div>
							<div className="verticalLine"></div>
							<div className="iconContainer">
								<FaCanadianMapleLeaf />
								<span>가을</span>
							</div>
							<div className="verticalLine"></div>
							<div className="iconContainer">
								<LiaMoneyBillAltSolid />
								<span>~20만원</span>
							</div>
						</div>

						<div className="themeContainer">
							<span className="theme">테마</span>
							<span className="themeText">
								자연 · 미식 · 관광
							</span>
						</div>
					</>
				)}
				<span className="desc">
					서울에서 부산까지! 시간은 없는데 멀리 떠나고 싶어서 부산
					지인의 도움 하에 당일치기 여행을 했습니다! <br />
					조금 바쁜 영상이 될테니 두 눈 부릅뜨고 시청해주세요 :)
				</span>

				{isMobile && (
					<ShortButton
						onClick={() => {
							setisopen((prev) => !prev);
						}}
					>
						{isopen ? "간략히" : "여행 정보 보기"}
						{isopen ? <PiCaretUpBold /> : <PiCaretDownBold />}
					</ShortButton>
				)}
			</VideoInfo>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	margin-top: 20px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@media (max-width: 360px) {
		box-sizing: border-box;
	}

	.date {
		color: ${({ theme }) => theme.textPrimary};
		font-size: 20px;
		font-weight: 400;

		@media (max-width: 360px) {
			padding-left: 20px;
			padding-right: 16px;

			font-size: 12px;
			letter-spacing: -0.3px;
		}
	}
`;

const TitleContainer = styled.div`
	width: 100%;
	margin-top: 8px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 360px) {
		padding-left: 20px;
		padding-right: 16px;

		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
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

			@media (max-width: 360px) {
				font-size: 12px;
				font-weight: 600;
				letter-spacing: -0.3px;
			}
		}
	}

	.title {
		color: ${({ theme }) => theme.textPrimary};
		font-size: 32px;
		font-weight: 600;

		@media (max-width: 360px) {
			font-size: 20px;
			font-weight: 700;
			letter-spacing: -0.5px;
		}
	}

	.icons {
		display: flex;
		gap: 30px;

		@media (max-width: 360px) {
			gap: 10px;
		}

		svg {
			width: 26px;
			height: 26px;
			color: #cccccc;

			@media (max-width: 360px) {
				width: 16px;
				height: 16px;
			}
		}
	}
`;

const HeartBox = styled.div<{ isclick: boolean }>`
	svg {
		cursor: pointer;
		color: ${({ isclick, theme }) => isclick ? theme.primary : "#cccccc"} !important;
	}

	span {
		color: ${({ theme }) => theme.primary} !important;
		margin-left: 6px;
	}
`;

const UserContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 36px;
	margin-top: 20px;

	@media (max-width: 360px) {
		padding-left: 20px;
		padding-right: 16px;

		justify-content: space-between;
		margin-top: 26px;
		margin-bottom: 20px;
	}

	svg {
		width: 60px;
		height: 60px;
		margin-right: 16px;
		color: ${({ theme }) => theme.textPrimary};

		@media (max-width: 360px) {
			width: 32px;
			height: 32px;
			margin-right: 0px;
		}
	}

	.userinfo {
		display: flex;
		flex-direction: column;
		gap: 4px;

		.name {
			color: ${({ theme }) => theme.titlePrimary};
			font-size: 24px;
			font-weight: 500;

			@media (max-width: 360px) {
				font-size: 15px;
				font-weight: 500;
			}
		}

		.followers {
			color: ${({ theme }) => theme.titlePrimary};
			font-size: 15px;
			font-weight: 300;

			@media (max-width: 360px) {
				font-size: 12px;
				font-weight: 400;
				letter-spacing: -0.3px;
			}
		}
	}

	.followBtn {
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

		@media (max-width: 360px) {
			width: 64px;
			height: 24px;
			padding: 8px 10px;
		}
	}
`;

const VideoInfo = styled.div<{ isopen: boolean }>`
	width: 100%;
	height: ${({ isopen }) => (isopen ? "auto" : "37px")};
	transition: height 1s ease-in-out;

	position: relative;
	box-sizing: border-box;

	padding-top: 25px;
	padding-bottom: 25px;
	padding-left: 90px;
	padding-right: 90px;

	border-radius: 10px;
	border: 0.5px solid #807b7b;
	background-color: #f8f8f8;

	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 360px) {
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

		@media (max-width: 360px) {
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

		.iconContainer {
			display: flex;
			align-items: center;
			gap: 20px;

			@media (max-width: 360px) {
				gap: 5px;
			}

			svg {
				width: 42px;
				height: 42px;
				color: ${({ theme }) => theme.primary};

				@media (max-width: 360px) {
					width: 22px;
					height: 22px;
				}
			}

			span {
				color: #747474;
				font-size: 24px;
				font-weight: 300;
				letter-spacing: 1.2px;

				@media (max-width: 360px) {
					font-size: 13px;
					font-weight: 400;
					letter-spacing: -0.1px;
				}
			}
		}
		.mobileContainer {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
		}

		.verticalLine {
			height: 16px;
			border-left: 1px solid #d9d9d9;

			@media (max-width: 360px) {
				height: 14px;
			}
		}
	}

	.themeContainer {
		margin-top: 26px;
		display: flex;
		align-items: center;
		gap: 24px;

		@media (max-width: 360px) {
			margin-top: 0px;
			gap: 0px;
		}

		.theme {
			color: #349348;
			font-size: 24px;
			font-weight: 500;
			letter-spacing: 1.2px;

			@media (max-width: 360px) {
				font-size: 13px;
				font-weight: 600;
				letter-spacing: -0.1px;
			}
		}

		.themeText {
			color: #747474;
			font-size: 24px;
			font-weight: 300;
			letter-spacing: 1.2px;

			@media (max-width: 360px) {
				font-size: 13px;
				font-weight: 400;
				letter-spacing: -0.1px;
			}
		}
	}

	.desc {
		margin-top: 22px;
		color: #767676;
		text-align: justify;
		font-size: 24px;
		font-weight: 400;
		line-height: 35px;

		@media (max-width: 360px) {
			margin-top: 18px;
			display: ${({ isopen }) => (isopen ? "inline-block" : "none")};

			font-size: 12px;
			font-weight: 400;
			line-height: 20px;
			letter-spacing: -0.3px;
		}
	}
`;

const ShortButton = styled.span`
	font-size: 11px;
	font-weight: 600;
	letter-spacing: 0.55px;

	position: absolute;
	right: 16px;
	bottom: 12px;
`;

export default VideoInfomation;
