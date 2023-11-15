import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tag from "./MyTripTag";
import { ReactSortable } from "react-sortablejs";
import { useMediaQuery } from "react-responsive";
import ReactGA from "react-ga4";

import { myTripState } from "../../recoil/myTripState";
import { useRecoilState } from "recoil";

import { MdBackpack } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

function MyTrip() {
	const isMobile: boolean = useMediaQuery({
		query: "(max-width:490px)",
	});
	const [myTripList, setMyTripList] = useRecoilState(myTripState);
	const [isopen, setisopen] = useState(false);

	useEffect(() => {
		console.log(myTripList);
	}, [myTripList]);

	return (
		<>
			<Container isopen={isopen}>
				<Header>
					<span>내 여행 일정</span>
					{isMobile && (
						<AiOutlineClose
							className="closeBtn"
							onClick={() => {
								ReactGA.event({
									category: "Event",
									action: "Mobile MyTrip Close Btn",
									label: "모바일 내 여행 닫기 버튼 클릭",
								});
								setisopen(false);
							}}
						/>
					)}
				</Header>
				<Main>
					<Tag
						isgreen={true}
						text="출발지"
						placeName="서울역"
						id={-1}
					/>
					<VerticalLine />
					<ReactSortable
						list={myTripList.map((x) => ({ ...x, chosen: false }))}
						setList={(newState) => setMyTripList(newState)}
						handle=".handle"
					>
						{myTripList.map((item) => (
							<div
								key={item.id}
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<Tag
									isgreen={false}
									placeName={item.placeName}
									id={item.id}
								/>
								<VerticalLine />
							</div>
						))}
					</ReactSortable>
					<div className="addTag">
						<span>이 위치에 추가됩니다</span>
					</div>
					<VerticalLine />
					<Tag
						isgreen={true}
						text="도착지"
						placeName="부산역"
						id={-2}
					/>
				</Main>
				<Footer>
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSfpCACDU1onaIus8Tz_nanmxIFexfVCcswglm5uEa0W64e_Yg/viewform?usp=sf_link"
						style={{
							textDecoration: "none",
						}}
					>
						<span>계획 실행하기</span>
					</a>
				</Footer>
			</Container>
			{isMobile && (
				<MyTripBtn
					onClick={() => {
						ReactGA.event({
							category: "Event",
							action: "Mobile Mytrip Open",
							label: "모바일 내 여행 열기 버튼 클릭",
						});
						setisopen((prev) => !prev);
					}}
				>
					<MdBackpack />
				</MyTripBtn>
			)}
		</>
	);
}

const MyTripBtn = styled.div`
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

const Container = styled.div<{ isopen: boolean }>`
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

const Header = styled.div`
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

const Footer = styled.div`
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
`;

const Main = styled.div`
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

	.addTag {
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
	}
`;

const VerticalLine = styled.div`
	width: 210px;
	height: 20px;
	border-left: 4px dotted #807b7b;
	flex-shrink: 0;

	@media (max-width: 490px) {
		width: auto;
	}
`;

export default MyTrip;
