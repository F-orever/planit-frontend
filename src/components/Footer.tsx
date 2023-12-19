import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";

import * as S from "../styles/Layout.styles";

function Footer() {
	return (
		<S.FooterContainer>
			<AiOutlineInstagram />
			<S.FooterTitle>가보자고 | Trip Together</S.FooterTitle>
			<S.FooterInfomation>
				<span>Locus.zip | 개인정보보호책임자: 남우진 |</span>
				<span>
					메일주소: fore.cnl@gmail.com | 부산광역시 영도구 봉래나루로
					33 Sea-Side
				</span>
				<span>Complex Town</span>
			</S.FooterInfomation>
			<S.FooterRules>
				<span>이용약관</span>
				<span>개인정보처리방침</span>
			</S.FooterRules>
			<S.FooterCopyRight>
				Copyright ⓒ 2023 가보자고 All rights reserved.
			</S.FooterCopyRight>
		</S.FooterContainer>
	);
}

export default Footer;
