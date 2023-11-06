import React, { useEffect } from "react";
import styled from "styled-components";
import Tag from "./MyTripTag";
import { ReactSortable } from "react-sortablejs";

import { myTripState } from "../../recoil/myTripState";
import { useRecoilState } from "recoil";

import TrainIcon from "../../assets/svg/transportation/Train.svg";

function MyTrip() {
	const [myTripList, setMyTripList] = useRecoilState(myTripState);

	useEffect(() => {
		console.log(myTripList);
	}, [myTripList]);

	return (
		<Container>
			<Header>
				<span>내 여행 일정</span>
			</Header>
			<Main>
				<Tag
					isGreen={true}
					text="출발지"
					icon={<TrainIcon />}
					placeName="부산역"
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
								isGreen={false}
								icon={item.icon}
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
					isGreen={true}
					text="도착지"
					icon={<TrainIcon />}
					placeName="부산역"
					id={-2}
				/>
			</Main>
			<Footer>
				<span>계획 실행하기</span>
			</Footer>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;

	border-radius: 7.5px;
	border: 0.5px solid #807b7b;

	margin-top: 17px;
	position: sticky;
	top: 80px;
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
	span {
		color: ${({ theme }) => theme.textPrimary};
		font-size: 21px;
		font-weight: 500;
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
	}
`;

const Main = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	.addTag {
		width: 250px;
		height: 46px;
		flex-shrink: 0;
		position: relative;

		display: flex;
		justify-content: center;
		align-items: center;

		border-radius: 7.5px;
		border: 0.75px dashed ${({ theme }) => theme.textPrimary};
		background-color: white;

		span {
			color: ${({ theme }) => theme.textPrimary};
			font-size: 12px;
			font-weight: 400;
			letter-spacing: 1.2px;
		}
	}
`;

const VerticalLine = styled.div`
	width: 200px;
	height: 20px;
	border-left: 4px dotted #807b7b;
`;

export default MyTrip;
