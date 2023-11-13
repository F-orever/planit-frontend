import React from "react";
import styled from "styled-components";

import { AiOutlineInstagram } from "react-icons/ai";

function Footer() {
	return (
		<Container>
			<AiOutlineInstagram />
			<span className="title">가보자고 | Trip Together</span>
			<span className="info">
				<span>Locus.zip | 개인정보보호책임자: 남우진 |</span>
				<span>
					메일주소: fore.cnl@gmail.com | 부산광역시 영도구 봉래나루로
					33 Sea-Side
				</span>
				<span>Complex Town</span>
			</span>
			<div className="rules">
				<span>이용약관</span>
				<span>개인정보처리방침</span>
			</div>
			<span className="copyright">
				Copyright ⓒ 2023 가보자고 All rights reserved.
			</span>
		</Container>
	);
}

const Container = styled.footer`
	width: 100%;
	border-top: 0.5px solid #807b7b;
	background-color: #f9f9f9;

	padding-bottom: 33px;
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 490px) {
		padding-bottom: 21px;
	}

	svg {
		margin-top: 33px;
		width: 58px;
		height: 58px;

		@media (max-width: 490px) {
			margin-top: 21px;
			width: 24px;
			height: 24px;
		}
	}

	span.title {
		margin-top: 26px;
		font-size: 20px;
		font-weight: 500;

		@media (max-width: 490px) {
			font-size: 13px;
			margin-top: 15px;
		}
	}

	span.info {
		font-size: 19px;
		font-weight: 200;
		margin-top: 9px;
		width: 80%;
		line-break: normal;

		@media (max-width: 490px) {
			font-size: 11px;

			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}

	div.rules {
		display: flex;
		gap: 36px;
		margin-top: 35px;

		@media (max-width: 490px) {
			margin-top: 15px;
			gap: 29px;
		}

		span:nth-child(1) {
			font-size: 20px;
			font-weight: 300;

			@media (max-width: 490px) {
				font-size: 13px;
			}
		}

		span:nth-child(2) {
			font-size: 20px;
			font-weight: 600;

			@media (max-width: 490px) {
				padding-bottom: 13px;
			}
		}
	}

	span.copyright {
		margin-top: 35px;
		font-size: 20px;
		font-weight: 300;

		@media (max-width: 490px) {
			font-size: 13px;
			margin-top: 15px;
		}
	}
`;

export default Footer;
