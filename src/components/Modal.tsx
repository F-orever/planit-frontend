import ReactGA from "react-ga4";
import { useRecoilState } from "recoil";

import { modalState } from "../recoil";
import * as S from "../styles/Layout.styles";

function Modal() {
	const [{ children, isopen }, setModalState] = useRecoilState(modalState);

	return (
		<S.ModalWrapper
			isopen={isopen}
			onClick={() => {
				ReactGA.event({
					category: "Event",
					action: "Close Img Modal",
					label: "이미지 모달 닫기 버튼 클릭",
				});
				setModalState({
					children: <></>,
					isopen: false,
				});
			}}
		>
			<S.ModalContent>{children}</S.ModalContent>
		</S.ModalWrapper>
	);
}

export default Modal;
