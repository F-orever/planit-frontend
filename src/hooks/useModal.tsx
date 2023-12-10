import { useState } from "react";
import * as S from "../styles/Layout.styles";

type ModalProps = {
	children: React.ReactNode;
};

function useModal() {
	const [isopen, setIsOpen] = useState(false);
	const open = () => {
		setIsOpen(true);
	};

	const close = () => {
		setIsOpen(false);
	};

	return {
		Modal: isopen
			? ({ children }: ModalProps) => (
					<S.ModalWrapper
						isopen={isopen}
						onClick={() => {
							setIsOpen(false);
						}}
					>
						<S.ModalContent>{children}</S.ModalContent>
					</S.ModalWrapper>
			  )
			: () => null,
		isopen,
		open,
		close,
	};
}

export default useModal;
