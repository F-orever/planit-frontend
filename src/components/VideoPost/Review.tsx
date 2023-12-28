import { StarIcon } from "../../assets/svg";
import { CiStar, FaRegUserCircle } from "../../assets/Icons";
import LazyImage from "../../utils/LazyImage";
import { getFileURL } from "../../db/repository/storage";
import useResponsive from "../../hooks/useResponsive";
import * as S from "../../styles/VideoPost/PlaceDetailComponents.styles";

export type reviewType = {
	name: string;
	text: string;
	reviewCount: string;
	photoCount: string;
	rating: number;
	relativePublishTimeDescription: string;
};

type ReviewPropsType = {
	review: reviewType;
	id: number;
	idx: number;
};

function VideoPostReview({ review, id, idx }: ReviewPropsType) {
	const { isMobile } = useResponsive();

	function rate() {
		const arr = [];
		for (let i = 0; i < review.rating; i++) {
			arr.push(<StarIcon />);
		}
		for (let i = 0; i < 5 - review.rating; i++) {
			arr.push(<CiStar style={{ color: "yellow" }} />);
		}

		return arr;
	}

	return (
		<S.ReviewContainer>
			{!isMobile && (
				<LazyImage src={getFileURL(`${id + 1}/${idx + 1}.png`)} />
			)}
			<S.TextContainer>
				<S.ReviewAuthorInfo>
					<FaRegUserCircle />
					<div>
						<S.ReviewAuthor>{review.name}</S.ReviewAuthor>
						<S.ReviewCounts>리뷰 278개 ∙ 사진 47장</S.ReviewCounts>
					</div>
				</S.ReviewAuthorInfo>
				<S.ReviewDesc>
					<span>{rate()}</span>
					<span>{review.relativePublishTimeDescription}</span>
				</S.ReviewDesc>
				<S.ReviewText>{review.text}</S.ReviewText>
			</S.TextContainer>
		</S.ReviewContainer>
	);
}

export default VideoPostReview;
