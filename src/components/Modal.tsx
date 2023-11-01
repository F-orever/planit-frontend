import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { modalState } from "../recoil/modalState";

function Modal() {
	const [{ children, isopen }, setModalState] = useRecoilState(modalState);

	return (
		<Dialog
			isopen={isopen}
			onClick={() => {
				setModalState({
					children: <></>,
					isopen: false,
				});
			}}
		>
			<Wrapper>{children}</Wrapper>
		</Dialog>
	);
}

const Dialog = styled.div<{ isopen: boolean }>`
	width: 100vw;
	height: 100%;

	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;

	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(10px);

	display: ${({ isopen }) => (isopen ? "block" : "none")};
	transition: all 0.3s;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	position: fixed;
	z-index: 100;

	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(10px);
	transition: all 0.3s;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Modal;
