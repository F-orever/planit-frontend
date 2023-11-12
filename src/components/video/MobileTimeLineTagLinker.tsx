import React from "react";
import styled from "styled-components";

type LinkerProps = {
	type: string;
	time: string;
};

function MobileTimeLineTagLinker({ type, time }: LinkerProps) {
	return (
		<Container>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 42 42"
				fill="none"
			>
				<g clipPath="url(#clip0_399_2907)">
					<path
						d="M7 28C7 29.54 7.6825 30.9225 8.75 31.885V35C8.75 35.9625 9.5375 36.75 10.5 36.75H12.25C13.2125 36.75 14 35.9625 14 35V33.25H28V35C28 35.9625 28.7875 36.75 29.75 36.75H31.5C32.4625 36.75 33.25 35.9625 33.25 35V31.885C34.3175 30.9225 35 29.54 35 28V10.5C35 4.375 28.735 3.5 21 3.5C13.265 3.5 7 4.375 7 10.5V28ZM13.125 29.75C11.6725 29.75 10.5 28.5775 10.5 27.125C10.5 25.6725 11.6725 24.5 13.125 24.5C14.5775 24.5 15.75 25.6725 15.75 27.125C15.75 28.5775 14.5775 29.75 13.125 29.75ZM28.875 29.75C27.4225 29.75 26.25 28.5775 26.25 27.125C26.25 25.6725 27.4225 24.5 28.875 24.5C30.3275 24.5 31.5 25.6725 31.5 27.125C31.5 28.5775 30.3275 29.75 28.875 29.75ZM31.5 19.25H10.5V10.5H31.5V19.25Z"
						fill="#D9D9D9"
					/>
				</g>
				<defs>
					<clipPath id="clip0_399_2907">
						<rect width="42" height="42" fill="white" />
					</clipPath>
				</defs>
			</svg>
			<VerticalLine />
			<span className="time">{time}</span>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4px;

	svg {
		width: 14px;
		height: 16px;
	}

	.time {
		color: ${({ theme }) => theme.subtitle};
		font-size: 12px;
		font-weight: 600;
		letter-spacing: -0.3px;
	}
`;

const VerticalLine = styled.div`
	width: 50px;
	height: 0px;
	border-bottom: 1px solid rgba(118, 118, 118, 0.5);
`;

export default MobileTimeLineTagLinker;
