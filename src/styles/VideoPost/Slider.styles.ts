import styled from "styled-components";

export const SliderContainer = styled.div<{
	width?: number;
	height?: number;
}>`
	position: relative;
	width: ${({ width }) => (width ? width : "100%")};
	height: ${({ height }) => (height ? height : "100%")};
	transition: all 0.3s ease-in-out;
`;

export const ArrowButton = styled.button<{
	direction?: string;
	showArrows?: boolean;
}>`
	position: fixed;
	z-index: 10;
	${({ direction }) =>
		direction === "left" ? "left: 10px;" : "right: 10px;"}
`;

export const Slider = styled.div`
	transition: all 0.3s ease-in-out;
	display: flex;
	flex-wrap: nowrap;
`;
