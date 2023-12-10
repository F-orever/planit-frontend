import { useRecoilState } from "recoil";

import { modalState } from "../recoil";
import * as S from "../styles/Layout.styles";

function Modal() {
	const [{ children, isopen }, setModalState] = useRecoilState(modalState);

	return (
		<S.ModalWrapper
			isopen={isopen}
			onClick={() => {
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
