export type PressItem = {
  image: string
  title: { ko: string; en: string }
  body: { ko: string; en: string }
  source: string
  date: string
  slug?: string
}

export const pressItems: PressItem[] = [
  {
    image: "/news-1.png",
    title: {
      ko: "더하나 R.A.C, 활성 PRF 임상 데이터 국제 학술지에 게재",
      en: "THE HANA R.A.C Publishes Active PRF Clinical Data in International Journal",
    },
    body: {
      ko: "기존 PRP 대비 6배 높은 성장인자 방출률을 입증한 활성 PRF 연구 결과가 국제 재생의학 저널에 정식 등재되었습니다.",
      en: "Active PRF research results demonstrating a 6x higher growth factor release rate compared to conventional PRP have been officially published in an international regenerative medicine journal.",
    },
    source: "Medical Today",
    date: "2026 Apr.18",
    slug: "mindful-technology-design",
  },
  {
    image: "/news-2.png",
    title: {
      ko: "리버스 에이징 컨퍼런스 2026, 서울 코엑스에서 성황리 개최",
      en: "Reverse Aging Conference 2026 Successfully Held at Seoul COEX",
    },
    body: {
      ko: "줄기세포 기반 재생치료의 최신 동향을 공유하는 자리로 국내외 의료진 1,200여 명이 참석하며 큰 관심을 모았습니다.",
      en: "Over 1,200 domestic and international medical professionals attended this event sharing the latest trends in stem cell-based regenerative therapy.",
    },
    source: "Health Chosun",
    date: "2026 Apr.10",
  },
  {
    image: "/news-3.png",
    title: {
      ko: "리버셀 주사, 식약처 임상 3상 IND 승인 획득",
      en: "Revercell Injection Obtains MFDS Phase 3 Clinical IND Approval",
    },
    body: {
      ko: "조혈모 미토셀 섬유소 주사를 활용한 재생치료제가 국내 임상 3상에 진입하며 상용화에 한 걸음 더 다가섰습니다.",
      en: "A regenerative therapeutic using hematopoietic mitocell fibrin injection has entered domestic Phase 3 clinical trials, moving one step closer to commercialization.",
    },
    source: "Daily Medi",
    date: "2026 Mar.27",
  },
  {
    image: "/news-4.png",
    title: {
      ko: "심해 1km 청정수 취수 시설, 세계 최장 17.5km 라인 가동",
      en: "1km Deep Sea Water Intake Facility Launches World's Longest 17.5km Pipeline",
    },
    body: {
      ko: "강원도 양양 앞바다에 구축된 해양심층수 취수 시설이 본격 가동을 시작하며 REWATER 생산 안정성이 한층 강화되었습니다.",
      en: "The deep sea water intake facility built offshore of Yangyang, Gangwon-do has begun full-scale operations, further strengthening REWATER production stability.",
    },
    source: "Economist",
    date: "2026 Mar.14",
  },
  {
    image: "/news-5.png",
    title: {
      ko: "더하나 R.A.C 대표, 글로벌 재생의학 포럼 기조 강연",
      en: "THE HANA R.A.C CEO Delivers Keynote at Global Regenerative Medicine Forum",
    },
    body: {
      ko: "활성 PRF 기술의 임상 적용 사례와 향후 비전을 소개하며 K-바이오의 글로벌 경쟁력을 알렸습니다.",
      en: "Introducing clinical application cases and future vision of Active PRF technology, highlighting K-Bio's global competitiveness.",
    },
    source: "BioSpectator",
    date: "2026 Feb.28",
  },
  {
    image: "/news-6.png",
    title: {
      ko: "REWATER 350ml, 프리미엄 헬스케어 채널 정식 입점",
      en: "REWATER 350ml Officially Launches in Premium Healthcare Channels",
    },
    body: {
      ko: "이온 미네랄이 풍부한 해양심층수 음용수가 전국 메디컬 채널 및 프리미엄 마트에서 본격 판매를 시작합니다.",
      en: "Deep sea drinking water rich in ionic minerals begins full-scale sales at nationwide medical channels and premium marts.",
    },
    source: "Food & Beverage News",
    date: "2026 Feb.11",
  },
  {
    image: "/news-7.png",
    title: {
      ko: "당뇨성 족부 궤양 회복 사례, 국내 학회 우수 논문상 수상",
      en: "Diabetic Foot Ulcer Recovery Case Wins Excellence Paper Award at Domestic Conference",
    },
    body: {
      ko: "절단 위기에 놓였던 환자의 궤양 부위에 활성 PRF를 적용해 새살이 돋고 상처가 폐쇄된 임상 결과가 학계의 주목을 받았습니다.",
      en: "Clinical results showing new tissue growth and wound closure after applying Active PRF to ulcerated areas at risk of amputation attracted academic attention.",
    },
    source: "Young Doctor",
    date: "2026 Jan.30",
  },
  {
    image: "/news-8.png",
    title: {
      ko: "ACT PRO AUTO 활성화기, FDA 510(k) 인증 획득",
      en: "ACT PRO AUTO Activator Obtains FDA 510(k) Certification",
    },
    body: {
      ko: "혈액 활성화 자동화 장비가 미국 식품의약국 인증을 통과하며 북미 의료기기 시장 진출 기반을 마련했습니다.",
      en: "The automated blood activation equipment has passed FDA certification, establishing a foundation for entry into the North American medical device market.",
    },
    source: "MediPana News",
    date: "2026 Jan.17",
  },
  {
    image: "/news-9.png",
    title: {
      ko: "더하나 리버스에이징센터, 강남 본원 신규 오픈",
      en: "THE HANA Reverse Aging Center Opens New Gangnam Main Branch",
    },
    body: {
      ko: "최첨단 재생의학 장비와 전문 의료진을 갖춘 더하나 R.A.C 강남 본원이 정식 진료를 시작했습니다.",
      en: "THE HANA R.A.C Gangnam main branch, equipped with cutting-edge regenerative medicine equipment and specialized medical staff, has begun official operations.",
    },
    source: "Korea Economic Daily",
    date: "2025 Dec.20",
  },
]
