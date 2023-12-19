import { useState, useRef, useEffect } from "react";

type LazyImageProps = {
	src: Promise<string>;
	onClick?: () => void;
};

function LazyImage({ src, onClick }: LazyImageProps) {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [imgURL, setImgURL] = useState("");

	const imgRef = useRef<HTMLImageElement>(null);
	const observer = useRef<IntersectionObserver>();

	useEffect(() => {
		observer.current = new IntersectionObserver(intersectionOberserver);
		imgRef.current && observer.current.observe(imgRef.current);
		src.then((URL) => {
			setImgURL(URL);
		});
	}, []);

	const intersectionOberserver = (
		entries: IntersectionObserverEntry[],
		io: IntersectionObserver,
	) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				io.unobserve(entry.target);
				setIsLoading(true);
			}
		});
	};

	return (
		<img
			ref={imgRef}
			src={isLoading ? imgURL : "./noImg.gif"}
			alt={imgURL}
			onClick={() => {
				if (onClick) {
					onClick();
				}
			}}
		/>
	);
}

export default LazyImage;
