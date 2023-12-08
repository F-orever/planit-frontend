import { useState, useRef, useEffect } from "react";

type LazyImageProps = {
	src: string;
	onClick?: () => void;
};

function LazyImage({ src, onClick }: LazyImageProps) {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const imgRef = useRef<HTMLImageElement>(null);
	const observer = useRef<IntersectionObserver>();

	useEffect(() => {
		observer.current = new IntersectionObserver(intersectionOberserver);
		imgRef.current && observer.current.observe(imgRef.current);
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
			src={isLoading ? src : "./noImg.gif"}
			alt={src}
			onClick={() => {
				if (onClick) {
					onClick();
				}
			}}
		/>
	);
}

export default LazyImage;
