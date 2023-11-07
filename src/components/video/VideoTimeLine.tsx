import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import TimeLineTag from "./TimeLineTag";
import TimeLineTagLinker from "./TimeLineTagLinker";

//svg
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { mockData } from "./mockData";
import { useRecoilValue } from "recoil";
import { timelineIdx } from "../../recoil/timelineIdx";

function VideoTimeLine() {
	const index = useRecoilValue(timelineIdx);
	const [isopen, setIsOpen] = useState(true);
	const refArr = useRef<HTMLDivElement[]>([]);
	const tagsContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		tagsContainerRef.current?.scrollTo({
			top: index * 116 - 160,
			left: 0,
			behavior: "smooth",
		});
	}, [index]);

	return (
		<Container isOpen={isopen}>
			<div className="header">
				<span>여행 경로</span>
			</div>
			<TagsContainer isOpen={isopen} ref={tagsContainerRef}>
				<div className="scrollContainer">
					{mockData.map((data, idx) => {
						return (
							<div
								ref={(el) => (refArr.current[idx] = el as HTMLDivElement)
								}
							>
								<TimeLineTag
									index={idx}
									isCenter={idx === index}
									{...data}
								/>
								{idx !== mockData.length - 1 && (
									<TimeLineTagLinker
										type={"bus"}
										time={"30분"}
									/>
								)}
							</div>
						);
					})}
				</div>
			</TagsContainer>
			<div
				className="footer"
				onClick={() => {
					setIsOpen((prev) => !prev);
				}}
			>
				<span>경로 접기</span>
				{isopen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
			</div>
		</Container>
	);
}

const Container = styled.div<{ isOpen: boolean }>`
	width: 100%;
	height: ${(props) => (props.isOpen ? "37vw" : "100px")};
	max-height: 720px;
	position: relative;

	transition: all 0.4s ease-in-out;
	border-radius: 10px;
	border: 0.5px solid #807b7b;

	.header {
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
	}

	.footer {
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
	}
`;

const TagsContainer = styled.div<{ isOpen: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;

	position: relative;
	height: ${(props) => (props.isOpen ? "calc(100% - 100px)" : "0px")};
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

export default VideoTimeLine;
