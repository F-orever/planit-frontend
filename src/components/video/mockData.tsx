import React from "react";
import MarketIcon from "../../assets/svg/placetType/MarketIcon.svg";

import { BsTrainFreightFront } from "react-icons/bs";
import { MdApartment, MdCardTravel } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { BiCoffee } from "react-icons/bi";

export const mockData = [
	{
		place: "서울역",
		placeType: "기차역",
		Icon: <BsTrainFreightFront />,
		time: 51,
	},
	{
		place: "부산역 ",
		placeType: "기차역",
		Icon: <BsTrainFreightFront />,
		time: 138,
	},
	{
		place: "삼익비치아파트",
		placeType: "아파트단지",
		Icon: <MdApartment />,
		time: 147,
	},
	{
		place: "광안리해수욕장",
		placeType: "해변",
		Icon: <FaUmbrellaBeach />,
		time: 163,
	},
	{
		place: "할매 재첩국",
		placeType: "한식당",
		Icon: <MarketIcon />,
		time: 173,
	},
	{
		place: "해운대블루라인파크 미포정거장",
		placeType: "관광 명소",
		Icon: <MdCardTravel />,
		time: 246,
	},
	{
		place: "송정해수욕장",
		placeType: "해변",
		Icon: <FaUmbrellaBeach />,
		time: 308,
	},
	{
		place: "해리단길",
		placeType: "관광명소",
		Icon: <MdCardTravel />,
		time: 421,
	},
	{
		place: "타이가 텐푸라",
		placeType: "튀김덮밥 전문점",
		Icon: <MarketIcon />,
		time: 543,
	},
	{
		place: "해운대해수욕장",
		placeType: "해변",
		Icon: <FaUmbrellaBeach />,
		time: 620,
	},
	{
		place: "까사 부사노 해운대점",
		placeType: "커피숍/커피 전문점",
		Icon: <BiCoffee />,
		time: 653,
	},
	{
		place: "구푸",
		placeType: "카페테리아",
		Icon: <BiCoffee />,
		time: 674,
	},
];

export const mockPlaceData = [
	{
		displayName: {
			text: "서울역",
		},
		primaryTypeDisplayName: {
			text: "기차역",
		},
		formattedAddress: "서울특별시 용산구 한강대로 405",
		nationalPhoneNumber: "1544-7788",
		photoLength: 12,
		reviews: [
			{
				name: "jeanie",
				text: "승강장도 편하고 객실도 깨끗 탑승장 안쪽에 의자가 있는줄 몰라서 밖에서 15분 대기하다 들어왔네요. 다음번엔 더 편하게 이용할듯 합니다",
				reviewCount: "368",
				photoCount: "786",
				rating: 5,
				relativePublishTimeDescription: "1달 전",
			},
			{
				name: "김동균",
				text: "대한민국 철도 No.1 기차역입니다. 참 좋았습니다.",
				reviewCount: "155",
				photoCount: "3,379",
				rating: 5,
				relativePublishTimeDescription: "4달 전",
			},
			{
				name: "Young Ji (eat_play_lube)",
				text: "한국의 상징적인 곳. 여행의 시작이자 끝. 상경의 꿈을 이루는 곳. 수많은 먹거리와 쇼핑 그리고 숙자 아저씨들과 천국 가실분들. 다양성의 공존과 대혼돈의 멀티 Bus.",
				reviewCount: "257",
				photoCount: "3,035",
				rating: 5,
				relativePublishTimeDescription: "3주 전",
			},
			{
				name: "아기공룡둘째지역",
				text: "예전 역사를 운영할 때부터 지방 사람들에게는 서울의 관문이죠.지금의 KTX가 생기며 새롭게 지은 신역사입니다.역 내부에는 카페 베이커리 패스트푸드 푸드코트 등 많은 식당들이 있고 롯데 아웃렛이 비로 옆이고 조금만 3분 정도만 걸어도 롯데마트도 있어요.내부는 깔끔하나 역 주변에는 노숙인들이 있어 밤에는 조금 불안한 면도 있습니다. 경부선 위주의 노선이고 드물게 광주 목포나 강릉행 출발을 하는 역이기도 합니다.",
				reviewCount: "1,045",
				photoCount: "4,356",
				rating: 3,
				relativePublishTimeDescription: " 6달 전",
			},
			{
				name: "Dongbaek",
				text: "대한민국에서 제일 큰 기차역. 내부에서 3번 출구쪽을 보면 Apple광고가 굉장히 많아요",
				reviewCount: "186",
				photoCount: "416",
				rating: 5,
				relativePublishTimeDescription: "9달 전",
			},
		],
	},
	{
		displayName: {
			text: "부산역",
		},
		primaryTypeDisplayName: {
			text: "기차역",
		},
		formattedAddress: "부산 동구 중앙대로 206",
		nationalPhoneNumber: "1544-7788",
		photoLength: 9,
		reviews: [
			{
				name: "Learner",
				text: `서울, 경기권에서 부산으로 오는 가장 빠른 방법 KTX, SRT의 종착지 부산역답게 편의 시설이 잘 되어있고 많은 외국인들이 부산여행을 시작하는 곳 입니다.
기차는 연착없이 거의 딱 맞게 출발, 도착합니다.
2030 부산세계박람회 유치 문구가 여러곳에 있는데 꼭 좋은 결과가 있었으면 하네요.`,
				reviewCount: "749",
				photoCount: "5,524",
				rating: 5,
				relativePublishTimeDescription: "4달 전",
			},
			{
				name: "유레카",
				text: `부산역, 많이 바뀌었어요.
서비스 시설도 좋아졌고 부대 유흥 시설도 많아져서 좋습니다.
넓은 광장은 포토존으로 활용해도 좋은 사진들을 많이 촬영할 수 있을 것 같습니다.`,
				reviewCount: "842",
				photoCount: "9,390",
				rating: 4,
				relativePublishTimeDescription: "5달 전",
			},
			{
				name: "레츠",
				text: `5월 28일에 ktx 085열차를 타고 광명-대전-동대구를 지나서 부산역에 도착을 하였습니다. 제가 서울역에서 탔는데 부산역도 아주 크고 웅장했고 거기서 1호선으로 환승하고 동해선 광역전철도 타보고 단팥빵도 먹어서 즐거웠습니다. 그렇게 집에서 나온지 거의 12시간만에 집으로 돌아왔습니다.`,
				reviewCount: "4",
				photoCount: "17",
				rating: 5,
				relativePublishTimeDescription: "5달 전",
			},
			{
				name: "그러니까",
				text: `부산을 방문했을 때마다 오는 부산역 크고 넓어 웅장함이 느껴지네요 동대구역은 역사가 좀 복잡한 느낌이 들지만 여기는 시원시원한 느낌이 있네요 음식점도 몇 몇 있는데 개인적으로는 맛이 그렇게 좋지는 않네요 추천은 못 드리겠네요 빵집이나 도너츠같은 제과쪽도 있지만 거기도 맛이 거기서 거기네요 그리고 출/종점역이라 그런지 KTX 경우 미리 내려갔을때 탑승해도 되는 상황도 있더군요 마음에 듭니다`,
				reviewCount: "253",
				photoCount: "1,564",
				rating: 5,
				relativePublishTimeDescription: "10달 전",
			},
			{
				name: "고정민",
				text: `고향입니다. 인구 그 당시 450만명의 대한민국 제2수도에서 태어나서 자란곳입니다. 대한민국 대통령3명 배출한 곳. 빼어난 세계적 해수욕장 다수 있는 낭만과 항만의 전략적 도시. 꽃피는 동백섬에~ 부산갈매기~
[2030월드엑스포 부산 유치를 기원합니다! 영화의 국제도시! 대한민국 고층아파트 가액 상위 탑10 다수 랭크.1950년 6.25전쟁의 대한민국 마지막 절대 방어선으로 피란민의 꿈과 희망이 지금의 대한민국을 함께 모두의 힘으로 대한민국 한강의 기적의 시발이 된 역사적 도시!]`,
				reviewCount: "60",
				photoCount: "12",
				rating: 5,
				relativePublishTimeDescription: "1달 전",
			},
		],
	},
	{
		displayName: {
			text: "삼익비치아파트",
		},
		primaryTypeDisplayName: {
			text: "아파트단지",
		},
		formattedAddress: "부산광역시 수영구 광안해변로 100",
		nationalPhoneNumber: "051-623-5977",
		photoLength: 11,
		reviews: [
			{
				name: "Min",
				text: `벚꽃피는 시즌에 꼭 찾는 너무 사랑스러운 오래된 아파트 단지.`,
				reviewCount: "308",
				photoCount: "3,227",
				rating: 5,
				relativePublishTimeDescription: "1달 전",
			},
			{
				name: "김에디터",
				text: `광안리에서 가장 보고싶었던 건 해수욕장도 현수교도 아닌 삼익비치아파트. 곧 사라질 풍경이기에.`,
				reviewCount: "677",
				photoCount: "1,181",
				rating: 4,
				relativePublishTimeDescription: "2달 전",
			},
			{
				name: "Seongpil Yoon",
				text: `광안대교가 한눈에 보이는 곳. 야경도 좋지만 개인적으로는 아침에 해가 떠오를 때 풍경이 더 낫다고 생각한다. 가끔은 일출을 보기 윟9 일찍 일어나는 것도 좋을 것 같다는 생각.`,
				reviewCount: "34",
				photoCount: "186",
				rating: 5,
				relativePublishTimeDescription: "5달 전",
			},
			{
				name: "Julius yoon",
				text: `재건축 예정인 부산 해운대 대장 예약 아파트, 밤에 지나가다 들렀는데 구축이라 그런지 이중주차나 그런 여건은 열악해 보임. 하지만 입지가 좋고 향후 개발이 기대되는 곳`,
				reviewCount: "60",
				photoCount: "1",
				rating: 4,
				relativePublishTimeDescription: "10달 전",
			},
			{
				name: "정현수",
				text: `느그 서장 동네`,
				reviewCount: "341",
				photoCount: "2,339",
				rating: 5,
				relativePublishTimeDescription: "1달 전",
			},
		],
	},
	{
		displayName: {
			text: "광안리해수욕장",
		},
		primaryTypeDisplayName: {
			text: "해변",
		},
		formattedAddress: "-",
		nationalPhoneNumber: "-",
		photoLength: 10,
		reviews: [
			{
				name: "로시",
				text: `벚꽃피는 시즌에 꼭 찾는 너무 사랑스러운 오래된 아파트 단지.`,
				reviewCount: "372",
				photoCount: "2,227",
				rating: 4,
				relativePublishTimeDescription: "3주 전",
			},
			{
				name: "JadeSon DIC",
				text: `어방축제 준비 중이어서 혼잡의 극치. 경치를 보는 곳이라기 보다 노는 곳 느낌이 강했는데 다리 하나 생기고 경치도 좋아진 듯.`,
				reviewCount: "248",
				photoCount: "2,508",
				rating: 3,
				relativePublishTimeDescription: "6달 전",
			},
			{
				name: "한지헌",
				text: `부산 해변일대는 맨발걷기에 가장 좋은 조건을 갖추고 있습니다. 접지에 최적의 조건입니다. 저녁시간 식사후 맨발걷는 사람들이 많네요.`,
				reviewCount: "223",
				photoCount: "335",
				rating: 5,
				relativePublishTimeDescription: "3일 전",
			},
			{
				name: "레져맨",
				text: `광안리는 번화가, 음식점 등 바다와의 접근성은 최고입니다.
하지만 올해는 바다 색이 녹조보다 심한 갈조라서 입수하기가 꺼려지네요.
그래도 부산 앞바다 중 광안리는 항상 진리 입니다.`,
				reviewCount: "51",
				photoCount: "170",
				rating: 4,
				relativePublishTimeDescription: "3달 전",
			},
			{
				name: "Kangtai Kim (andykim_winelover)",
				text: `광안대교가 잘 보이는 활기찬 광안리 해변입니다. 해운대 해변과는 다른 분위기인데 젊은 사람들이 해운대보다 많은것 같습니다.`,
				reviewCount: "243",
				photoCount: "2,233",
				rating: 4,
				relativePublishTimeDescription: "1달 전",
			},
		],
	},
	{
		displayName: {
			text: "할매 재첩국",
		},
		primaryTypeDisplayName: {
			text: "한식당",
		},
		formattedAddress: "-",
		nationalPhoneNumber: "부산광역시 수영구 광남로120번길 8",
		photoLength: 9,
		reviews: [
			{
				name: "장현용",
				text: `부산 출장중에 먹은 재첩국!

부산에 계신 직원분 추천으로 방문했습니다. 재첩진국을 먹었는데 국물맛도 진하고 재첩도 많이 들어있어서 아주 좋았습니다. 비빔밥도 맛있습니다.

원래 강한 양념으로된 음식을 선호하는 편이지만 재첩국 맛있습니다!`,
				reviewCount: "257",
				photoCount: "2,383",
				rating: 5,
				relativePublishTimeDescription: "1년 전",
			},
			{
				name: "GU GU",
				text: `시원한 재첩국 맛집이네요. 전날 술드시고 해장하기 딱 좋습니다. 재첩백반에 비빔밥이 같이 나오는데 특이하네요. 부산 스타일인가 봅니다. 공기밥 절반은 비빔밥에 강된장 넣어 드시고 절반은 재첩국에 말아먹으니 좋습니다 ㅎ`,
				reviewCount: "535",
				photoCount: "1,672",
				rating: 4,
				relativePublishTimeDescription: "1년 전",
			},
			{
				name: "김 연근kyg0114",
				text: `10년이 지나도 똑같은가격이네요
재첩이 조금 작지만  고등어조림에 비빔밥으로 먹을수있도록 나물이 나옵니다^^`,
				reviewCount: "106",
				photoCount: "99",
				rating: 5,
				relativePublishTimeDescription: "3달 전",
			},
			{
				name: "KD",
				text: `갈때마다 바뀌는 가격 말고는 다 괜찮습니다. 다른 재첩국 집에 비해 국물도 나쁘지 않고 반찬도 딱 먹을것만 나와서 간단히 아침이나 점심 한끼 먹기 좋습니다.`,
				reviewCount: "146",
				photoCount: "991",
				rating: 4,
				relativePublishTimeDescription: "1달 전",
			},
			{
				name: "와인쟁이부부지역",
				text: `9달 전전날 술을 많이 먹었다면 아침으로 이보다 훌륭할 수 없을 것. 반찬도 매우 훌륭. 개인적으로 케일 매우 좋습니다. 가격대비 매우 훌륭합니다. 몇년 후 재방문 했는데 변함 없이 맛있었습니다.`,
				reviewCount: "287",
				photoCount: "1,769",
				rating: 5,
				relativePublishTimeDescription: "9달 전",
			},
		],
	},
	{
		displayName: {
			text: "해운대블루라인파크 미포정거장",
		},
		primaryTypeDisplayName: {
			text: "관광 명소",
		},
		formattedAddress: "-",
		nationalPhoneNumber: "부산광역시 해운대구 달맞이길62번길 13",
		photoLength: 10,
		reviews: [
			{
				name: "jjhu",
				text: `☆☆ 스카이캡슐은 인터넷 예매하고 가는 게 좋다 ☆☆
캡슐 타려고 갔는데 가려고 한 시간은 다 매진이라 미리 예매하고 가거나 시간 여유로운 사람이라면 그냥 가서 1시간 뒤로 예매해도 좋음.

하지만 해변열차는 비추합니다
스카이캡슐은 꼭 타세요 못 타서 너무 슬픔

첫 정거장(탑승장, 매표소) 오는 길에 굿즈샵도 있고 푸드트럭도 있어서 츄러스같은 거나 포토카드 엽서 사기에도 조와용`,
				reviewCount: "42",
				photoCount: "117",
				rating: 4,
				relativePublishTimeDescription: "2주 전",
			},
			{
				name: "J Kim",
				text: `스카이 캡슐은 미리 구입해도 좋긴할 것 같은데 열차는 미리 구입 안해도 됨.
스카이 캡슐은 돈 값을 충분히 하는 것 같고 해볌 열차는 3000 원만 받아도 될 것 같음.
스카이 캡슐 대기할 때 에어컨이 없는게 조금 이상했음,, 그 정도 돈도 안들인건지 모르겠음
그런데 우선 타 보면 되게 좋긴함.
풍경도 너무 아름답고 스카이 캡슐끼리 엇갈려서 가는 장면 자체도 아름다움`,
				reviewCount: "411",
				photoCount: "3,367",
				rating: 5,
				relativePublishTimeDescription: "3달 전",
			},
			{
				name: "Rovin Park",
				text: `해변열차는 해운대에서 한번 타볼만한 명물이긴 합니다만 자리가 배정되어 있지 않아 좋은 자리에 앉기 위해 눈치 싸움을 해야한다는 것이 좀 아쉽더군요. 송정에서는 기차표를 사기 위해 송정역에 다녀와야 하는 것도 좀 불편 합니다.`,
				reviewCount: "420",
				photoCount: "5,466",
				rating: 3,
				relativePublishTimeDescription: "2달 전",
			},
			{
				name: "비슬산",
				text: `해변열차 타고 가족과 여행하기 좋은 코스임.
여름에는 열차에서 내려 주변 관광을 하기때문에 모자, 양산, 썬크림 필수.
봄, 가을 데크 로드 바다보며 걸으면서 주변에서 커피도 한잔하고, 맛있는것도 먹을수있어 좋음.`,
				reviewCount: "539",
				photoCount: "1,194",
				rating: 5,
				relativePublishTimeDescription: "2달 전",
			},
			{
				name: "점심맛집과 카페탐방, 간혹 술집",
				text: `티켓을 미리 구입해야 대기 적게하고 입장할수 있음.
캡슐열차와 해변열차를 나눠서 탈수 있음.
캡슐열차는 미포에서 청사포 가는 편도나 왕복을 권장함.(편도일때 바다가 더 가까움)
해변열차도 시간이 정해져 있으니 일정에 잘 적용하시긴.`,
				reviewCount: "888",
				photoCount: "4,319",
				rating: 4,
				relativePublishTimeDescription: "5달 전",
			},
		],
	},
	{
		displayName: {
			text: "송정해수욕장 ",
		},
		primaryTypeDisplayName: {
			text: "해변",
		},
		formattedAddress: "-",
		nationalPhoneNumber: "-",
		photoLength: 13,
		reviews: [
			{
				name: "gyeol ha",
				text: `부산에서 요즘 뜨고 있는(?) 핫 플레이스다 계절에 상관없이 많은 관광객이 몰려 들고 새로운 카페와 맛집들이 즐비하게 들어서고 있다. 송도해수욕장은 서핑의 새로운 성지로 떠오르는 요즘 해변은 서퍼들로 붐비고 그 외에도 많은관광객이 몰려들어 송정해수욕장의 또다른 매력을 찾고 있다.`,
				reviewCount: "199",
				photoCount: "24,681",
				rating: 4,
				relativePublishTimeDescription: "10달 전",
			},
			{
				name: "BANDAL",
				text: `비가 많이 오는데 아침부터 서퍼들이 많았다.
7월 초 바닷물은 매우 차웁다.`,
				reviewCount: "198",
				photoCount: "183",
				rating: 4,
				relativePublishTimeDescription: "4달 전",
			},
			{
				name: "Hyunji Shin",
				text: `파도가 센 편이라 재밌어서 수영하러 온 사람, 서핑하러 온 사람으로 나뉜다. 왼쪽은 수영, 오른쪽은 서핑! 파도 덕분에 다들 재밌게 튜브 잡고놈! 유후`,
				reviewCount: "263",
				photoCount: "715",
				rating: 5,
				relativePublishTimeDescription: "8달 전",
			},
			{
				name: "Gyeongsik Choi",
				text: `한가하고 여유로운 해변
파도소리와 함께
행복을 찾을 수 있습니다`,
				reviewCount: "119",
				photoCount: "452",
				rating: 4,
				relativePublishTimeDescription: "6달 전",
			},
			{
				name: "청강",
				text: `부산해수욕장 중 바닷물도 깨끗하고, 모래도 좋습니다.
주변에 맛집들도 많이 있어서 좋습니다.
해수욕장에 인접한 구 송정역을 해변열차의 정거장으로 활용하고 있어서 해수욕장에서 즐기고 해변열차로 미포까지 이동하기에도 좋습니다`,
				reviewCount: "865",
				photoCount: "28,904",
				rating: 5,
				relativePublishTimeDescription: "1년 전",
			},
		],
	},
	{
		displayName: {
			text: "해리단길",
		},
		primaryTypeDisplayName: {
			text: "관광명소",
		},
		formattedAddress: "부산광역시 해운대구 우동",
		nationalPhoneNumber: "-",
		photoLength: 11,
		reviews: [
			{
				name: "Nansil Lee",
				text: `아기자기한 가게들이 많아요.맛있는 음식점들도 많구요.다음에 다시가서 못먹었던거 먹고와야겠어요.거리가 깔끔하고 기찻길에 핀 코스모스가 아직 덜 피었지만 이쁠것같아요.`,
				reviewCount: "65",
				photoCount: "174",
				rating: 3,
				relativePublishTimeDescription: "1달 전",
			},
			{
				name: "최형섭",
				text: `해운대역 바로 뒤에 위치한 가격 싸고 돈카츠 일본라멘 홍콩식 중식당 스테이크 파스타 동남아 요리 등 맛집이 즐비한 거리.값 싸고 맛있는 전 세계 요리를 맛보고 싶다면 필히 방문해야 할 곳. 단 하나 30분은 대기해야 함. 전화나 캐치테이블로 예약필수.`,
				reviewCount: "13",
				photoCount: "17",
				rating: 5,
				relativePublishTimeDescription: "3주 전",
			},
			{
				name: "J HYEYOUNG",
				text: `구석구석 돌아다니면 예쁘고 독특한 감성의 가게들이 많아요.
숨어있는 가게를 찾아다니는 재미가 있고 각자의 개성이 대단한 가게의 인테리어를 구경하는 재미도 쏠쏠해요.`,
				reviewCount: "71",
				photoCount: "248",
				rating: 5,
				relativePublishTimeDescription: "9달 전",
			},
			{
				name: "박지현",
				text: `한창 조성중인 분위기임
도로 등 정비가 완료되면 가볍게 산책하기 좋은 길이 될 듯`,
				reviewCount: "164",
				photoCount: "346",
				rating: 4,
				relativePublishTimeDescription: "7달 전",
			},
			{
				name: "이Podo",
				text: `아기자기해서 좋다.
돈까스, 텐동, 버거와 브런치 맛집들이 있다.
개인적으로 분식은 좀.
카페 가격대는 비싼 편이다.
혼밥하기 좋은 곳들이 많은 편이다.`,
				reviewCount: "149",
				photoCount: "113",
				rating: 5,
				relativePublishTimeDescription: "4달 전",
			},
		],
	},
	{
		displayName: {
			text: "타이가 텐푸라",
		},
		primaryTypeDisplayName: {
			text: "튀김덮밥 전문점",
		},
		formattedAddress: "부산광역시 해운대구 우동1로38번가길 15",
		nationalPhoneNumber: "-",
		photoLength: 11,
		reviews: [
			{
				name: "Dreaming Y",
				text: `친절하고 서비스가 좋습니다. 음식 비쥬얼이 훌륭합니다. 튀김이 조금 눅눅하지만 맛있습니다. 오픈런해야 기다리지않고 먹을수 있습니다.`,
				reviewCount: "52",
				photoCount: "232",
				rating: 5,
				relativePublishTimeDescription: "3달 전",
			},
			{
				name: "이공주",
				text: `청결은 아주 좋은것같아요.특히 유니폼이 흰색이라 더 깨끗해보이고 음식은 한번쯤은 먹어도 괜찮아요.조금 느끼한맛이 남기는 하지만..`,
				reviewCount: "92",
				photoCount: "291",
				rating: 4,
				relativePublishTimeDescription: "1달 전",
			},
			{
				name: "백패커",
				text: `인생 텐동집.
튀김 느끼하다는 느낌이 하나도 안나서 탄산 필요없고, 꽈리고추 조차 땡기는 느낌을 못받음.
튀김 상태가 좋고 친절해서 부산가면 또갈집.`,
				reviewCount: "257",
				photoCount: "249",
				rating: 5,
				relativePublishTimeDescription: "2달 전",
			},
			{
				name: "남경국",
				text: `해리단길에 있는 텐동집.
평소에는 줄서는 사람들이 많아 일찍 가지 않으면 들어가기 힘든집.
일하는 분들이 젊고 활기차다.
텐동은 맛나다. 튀김류가 아주 맛있게 잘 튀겨졌고 계란을 터트리면 노란자가 흘러나와 간장하고 잘 어우러진다.
생맥주와 함께 먹으니 더욱 기가 막힌다.
자주 오고 싶은 곳이다`,
				reviewCount: "71",
				photoCount: "280",
				rating: 5,
				relativePublishTimeDescription: "3달 전",
			},
			{
				name: "렛츠 (Lets)",
				text: `인천 텐동보다 느끼하지 않고 맛있는 듯 해요~ 특히 소스가 따로 있어서, 반숙 계란하고 비비면, 간장계란 비빔밥 스타일로 맛있게 마무리할 수 있습니다`,
				reviewCount: "131",
				photoCount: "423",
				rating: 5,
				relativePublishTimeDescription: "2달 전",
			},
		],
	},
	{
		displayName: {
			text: "해운대해수욕장 ",
		},
		primaryTypeDisplayName: {
			text: "해변",
		},
		formattedAddress: "-",
		nationalPhoneNumber: "-",
		photoLength: 10,
		reviews: [
			{
				name: "걸어서동네한바퀴",
				text: `파도가 쎄지만 물놀이 하기 좋아요. 안전에 꼭 유의해야 해요. 주위 숙소는 라마다, 토요코인, 신라스테이 등 있어요. 정작 부산시민들은 잘 안간가고 하네요.`,
				reviewCount: "203",
				photoCount: "1,369",
				rating: 5,
				relativePublishTimeDescription: "1달 전",
			},
			{
				name: "윤태열 경주선비",
				text: `부산 해운대 바닷가. 늘 올때마다 시원한 바닷바람과 파도소리가 좋아요. 맨발로 걷기도 좋아요.`,
				reviewCount: "680",
				photoCount: "11,084",
				rating: 5,
				relativePublishTimeDescription: "2달 전",
			},
			{
				name: "Learner",
				text: `날은 흐렸지만 산책하기에는 덥지 않아서 좋았습니다. 외국인 관광객들도 많고 백사장도 잘되어 있어서 관광지로서 손색이 없습니다
다만 부산 현지인들은 비싼 물가와 관광객 위주의 여행지라서 잘 오지는 않는다고 합니다`,
				reviewCount: "749",
				photoCount: "5,524",
				rating: 5,
				relativePublishTimeDescription: "4달 전",
			},
			{
				name: "Byoungsoo Choi",
				text: `우리나라 최고의 해수욕장입니다. 부산 광안리 해수욕장과 함께 많은 피서객이 붐비는 곳입니다. 동백섬과 인접해 있어서 함께 즐기며 힐링하기 좋습니다.`,
				reviewCount: "1,157",
				photoCount: " 5,388",
				rating: 5,
				relativePublishTimeDescription: "5달 전",
			},
			{
				name: "이선영 (SUNYOUNG)",
				text: `부산의 자랑. 해운대 해수욕장. 해안가를 둘러싸고 특급호텔이 쭉 들어서 있습니다. 해변은 고운 모래로 해수욕을 하기에 알맞은 곳입니다. 여름이면 탈의실과 샤워장이 운영됩니다. 그리고 2023년 현재 비치의자는 1인당 1만원, 파라솔은 8천5백원에 대여가 가능합니다. 그리고 튜브도 대여 가능합니다. 파도가 적당히 있어서 파도타기를 할 수 있어서 재미있습니다.  해운대 해수욕장은 관리가 매우 잘되어 있습니다.`,
				reviewCount: "121",
				photoCount: "1,300",
				rating: 5,
				relativePublishTimeDescription: "3달 전",
			},
		],
	},
	{
		displayName: {
			text: "까사 부사노 해운대점",
		},
		primaryTypeDisplayName: {
			text: "커피숍/커피 전문점",
		},
		formattedAddress: "부산광역시 해운대구 우제1동 618-15",
		nationalPhoneNumber: "-",
		photoLength: 10,
		reviews: [
			{
				name: "Rovin Park",
				text: `시그니처 메뉴인 크렘프레소가 인상적인 곳. 달달한 설탕과 크림 아래 진한 에스프레소가 잘 어울리는 맛으로 다시 방문하고 싶은 곳입니다. 내부 인테리어와 야외 공간도 나쁘지 않은데 많은 손님을 수용하기에는 좀 좁은 느껨입니다.`,
				reviewCount: "420",
				photoCount: "5,466",
				rating: 5,
				relativePublishTimeDescription: "2달 전",
			},
			{
				name: "김정현",
				text: `에스프레소 맛은 제가 잘 몰라서
맛을 평가할 수는 없지만 같이 간 친구가 맛있다고 해서 저도 맛있는 것 같은 느낌이 들었습니다
바게뜨는 확실히 맛있었어요

인테리어와 분위기가 매우 좋습니다`,
				reviewCount: "28",
				photoCount: "85",
				rating: 5,
				relativePublishTimeDescription: "2달 전",
			},
			{
				name: "조혜경",
				text: `커피맛은 좋아요.
광안리쪽보자는 공간이 작아서인지 좀 더 아늑한 분위기였어요.
오늘은 브라운슈가 에스프레소를 주문했는데, 좀 많이 다네요. 설탕 조금으로 주문하면 나을듯요.`,
				reviewCount: "722",
				photoCount: "3,283",
				rating: 4,
				relativePublishTimeDescription: "6달 전",
			},
			{
				name: "문희승",
				text: `에스프레소 바.
크리미한 에스프레소의 진한 풍미가 맛있다.
위스키/와인/시가 등도 판매.
우드톤 세련된 실내 인테리어.`,
				reviewCount: "968",
				photoCount: " 4,900",
				rating: 4,
				relativePublishTimeDescription: "5달 전",
			},
			{
				name: "형그거아니야",
				text: `역에서 가까움
에스프레소 설탕 깔려 나옴 호불호 있을듯
다양한 커피 마셔봤는데 개인적으론 살면 가본 카페중 top3 안에 듬`,
				reviewCount: "164",
				photoCount: "465",
				rating: 5,
				relativePublishTimeDescription: "9달 전",
			},
		],
	},
	{
		displayName: {
			text: "구푸(Goof)",
		},
		primaryTypeDisplayName: {
			text: "카페테리아",
		},
		formattedAddress: "부산광역시 부산진구 동성로 25",
		nationalPhoneNumber: "050-71320-2750",
		photoLength: 10,
		reviews: [
			{
				name: "jinho park",
				text: `분위기 좋고, 커피 칵테일 다 맛있었어요
다만 저는 음악이 좀 커서 대화가 힘들었어요`,
				reviewCount: "138",
				photoCount: "496",
				rating: 5,
				relativePublishTimeDescription: "6달 전",
			},
			{
				name: "국",
				text: `힙함과 친절은 별개인건가..? 라는 의문이 들었던곳.

오래된 레코드 가게 같기도하고
펍 같기도 하고 카페같기도하고 잡화점 같기도하고.

외관부터 내부까지 사진찍기는 좋습니다.
좋은 음악들이 흘러나오지만 귀가 아플 정도로 사운드가 과합니다.`,
				reviewCount: "249",
				photoCount: "7,001",
				rating: 3,
				relativePublishTimeDescription: "2달 전",
			},
			{
				name: "Hyunbin",
				text: `카페 사장님의 선곡과 음료들의 시너지가 상당한 곳. 지나치게 힙하지 않고, 적당한 캐주얼과 힙합이 공존해서 더 빛나는 장소`,
				reviewCount: "16",
				photoCount: "43",
				rating: 5,
				relativePublishTimeDescription: "1년 전",
			},
			{
				name: "Kate Lee yang",
				text: `힙하다. 힙한음악에 어깨가 들썩. 오크커피,쿨키즈라떼. 오크커피 마일드하고 깔끔한 콜드브루. 쿨키즈라떼 적당히 단 맛.  베일리스밀크마시는듯한 느낌. 젊은 감성 으로 별하나더!`,
				reviewCount: "110",
				photoCount: "225",
				rating: 4,
				relativePublishTimeDescription: "1년 전",
			},
			{
				name: "조찌니",
				text: `2번째 방문.
콜드브루 맛있구요♡♡힙해서 빠져나오지못하는곳 다음번엔 꼭 저녁에 방문해보고싶네요♡`,
				reviewCount: "16",
				photoCount: "33",
				rating: 5,
				relativePublishTimeDescription: "2년 전",
			},
		],
	},
];
