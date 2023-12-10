import { useState, useEffect } from "react";
import { get, statics, update } from "../../db/repository/statics";

import useResponsive from "../../hooks/useResponsive";
import * as S from "../../styles/VideoPost/Infomation.styles";

import {
	BsFillBookmarkFill,
	BsFillPersonFill,
	AiFillHeart,
	AiOutlineCalendar,
	PiShareFatFill,
	HiLocationMarker,
	LiaMoneyBillAltSolid,
	PiCaretUpBold,
	PiCaretDownBold,
} from "../../assets/Icons";

function VideoPostInfomation() {
	const [isclick, setClick] = useState(false);
	const [isopen, setisopen] = useState(true);
	const [statics, setStatics] = useState<statics>({
		id: "",
		views: -1,
		loves: -1,
	});

	const { isMobile } = useResponsive();

	useEffect(() => {
		fetchStatics();
	}, []);

	//조회/좋아요 수 업데이트
	const fetchStatics = async () => {
		const _statics = await get();

		setStatics(_statics);
		update(_statics.id, {
			id: _statics.id,
			views: _statics.views + 1,
			loves: _statics.loves,
		});
	};

	//좋아요수 반영
	const fetchHearts = async () => {
		const _statics = await get();

		setStatics(_statics);
		update(_statics.id, {
			id: _statics.id,
			views: _statics.views,
			loves: _statics.loves,
		});
	};

	return (
		<S.Container>
			<S.Dates>2023. 4. 1.</S.Dates>
			<S.TitleContainer>
				<S.Title>
					2023년엔 일단 시작, 일단 출발💙 | 힙한 곳들만 쏙쏙 다녀온
					부산 당일치기
				</S.Title>
				<S.Icons>
					<div>
						<BsFillPersonFill />
						<span>{statics.views && statics.views}</span>
					</div>
					<S.HeartBox isclick={isclick}>
						<AiFillHeart
							onClick={() => {
								if (!isclick) {
									update(statics.id, {
										id: statics.id,
										views: statics.views,
										loves: statics.loves + 1,
									});
								}
								fetchHearts();
								setClick((prev) => !prev);
							}}
						/>
						<span>{statics.loves && statics.loves}</span>
					</S.HeartBox>
					<PiShareFatFill />
					<BsFillBookmarkFill />
				</S.Icons>
			</S.TitleContainer>
			<S.UserContainer>
				<S.UserInfoContainer>
					<img src="./UserImage.png" />
					<S.UserInfo>
						<S.UserName>Hann 잰</S.UserName>
						<S.UserFollwers>팔로워 5.69만명</S.UserFollwers>
					</S.UserInfo>
				</S.UserInfoContainer>

				<S.FollowBtn>+ 팔로우</S.FollowBtn>
			</S.UserContainer>
			<S.VideoInfo isopen={isopen}>
				{isMobile ? (
					<>
						<div className="icons">
							<S.MobileKeywordContainer>
								<S.KeywordContainer>
									<HiLocationMarker />
									<span>부산</span>
								</S.KeywordContainer>
								<S.KeywordSeperateLine />
								<S.KeywordContainer>
									<BsFillPersonFill />
									<span>1인</span>
								</S.KeywordContainer>
								<S.KeywordSeperateLine />
								<S.KeywordContainer>
									<AiOutlineCalendar />
									<span>당일치기</span>
								</S.KeywordContainer>
							</S.MobileKeywordContainer>
							<S.MobileKeywordContainer>
								<S.KeywordContainer>
									<img src="./spring.png" />
									<span>봄</span>
								</S.KeywordContainer>
								<S.KeywordSeperateLine />
								<S.KeywordContainer>
									<LiaMoneyBillAltSolid />
									<span>~30만원</span>
								</S.KeywordContainer>
								<S.KeywordSeperateLine />
								<S.KeywordContainer>
									<S.ThemeTitle>테마</S.ThemeTitle>
									<S.ThemeText>#자연#미식#관광</S.ThemeText>
								</S.KeywordContainer>
							</S.MobileKeywordContainer>
						</div>
					</>
				) : (
					<>
						<div className="icons">
							<S.KeywordContainer>
								<HiLocationMarker />
								<span>부산</span>
							</S.KeywordContainer>
							<S.KeywordSeperateLine />
							<S.KeywordContainer>
								<BsFillPersonFill />
								<span>1인</span>
							</S.KeywordContainer>
							<S.KeywordSeperateLine />
							<S.KeywordContainer>
								<AiOutlineCalendar />
								<span>당일치기</span>
							</S.KeywordContainer>
							<S.KeywordSeperateLine />
							<S.KeywordContainer>
								<img src="./spring.png" />
								<span>봄</span>
							</S.KeywordContainer>
							<S.KeywordSeperateLine />
							<S.KeywordContainer>
								<LiaMoneyBillAltSolid />
								<span>~30만원</span>
							</S.KeywordContainer>
						</div>

						<S.ThemeContainer>
							<S.ThemeTitle>테마</S.ThemeTitle>
							<S.ThemeText>자연 · 미식 · 관광</S.ThemeText>
						</S.ThemeContainer>
					</>
				)}
				<S.Desc isopen={isopen}>
					여러분 안녕하세요! 오늘은 여행 브이로그를 가져왔습니다. 2023
					올해 제 목표가 일단 시작, 일단 출발 이거든요! 망설이기만
					하다가가는 아무것도 못하잖아요 그래서 올해는 너무 깊이
					생각하지 않고 뭐든 일단! 해보는 걸로 정했습니다! 그래서 떠난
					부산 여행! 모두가 말렸던 부산 당일치기를!!!! 제가
					해냈습니다!!!! 후훗😎 그럼 오늘 영상도 재밌게 봐주세요!💙
				</S.Desc>

				{isMobile && (
					<S.ShortButton
						onClick={() => {
							setisopen((prev) => !prev);
						}}
					>
						{isopen ? "간략히" : "여행 정보 보기"}
						{isopen ? <PiCaretUpBold /> : <PiCaretDownBold />}
					</S.ShortButton>
				)}
			</S.VideoInfo>
		</S.Container>
	);
}

export default VideoPostInfomation;
