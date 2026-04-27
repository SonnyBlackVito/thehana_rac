export type Locale = "ko" | "en"

export const translations = {
  // ── Header Navigation ──
  nav: {
    about: { ko: "센터소개", en: "About" },
    products: { ko: "제품정보", en: "Products" },
    research: { ko: "연구개발", en: "R&D" },
    support: { ko: "고객지원", en: "Support" },
    press: { ko: "홍보센터", en: "Press" },
    search: { ko: "검색", en: "Search" },
    language: { ko: "언어", en: "Language" },
    openMenu: { ko: "전체 메뉴 열기", en: "Open menu" },
    closeMenu: { ko: "메뉴 닫기", en: "Close menu" },
    mobileMenu: { ko: "모바일 메뉴", en: "Mobile menu" },
    mainMenu: { ko: "주 메뉴", en: "Main menu" },
    mobileMainMenu: { ko: "모바일 주 메뉴", en: "Mobile main menu" },
  },

  // ── Home – Hero ──
  hero: {
    eyebrow: { ko: "더하나 리버스 에이징 센터", en: "THE HANA Reverse Aging Center" },
    headingLine1: { ko: "단 15분의 활성화", en: "Just 15 Minutes of Activation" },
    headingLine2: {
      ko: "당신의 혈액 속에 잠든 재생 에너지를 깨웁니다",
      en: "Awakens the regenerative energy dormant in your blood",
    },
    descLine1: { ko: "첨단 재생 과학 솔루션을 기반으로", en: "Based on advanced regenerative science solutions" },
    descLine2: {
      ko: "역노화를 실현하는 프리미엄 리버스 에이징 센터",
      en: "A premium reverse aging center realizing anti-aging",
    },
  },

  // ── Home – News & Social ──
  newsSocial: {
    srHeading: { ko: "최신 뉴스 및 소셜 미디어", en: "Latest News & Social Media" },
    latestNews: { ko: "최신뉴스", en: "Latest News" },
    socialMedia: { ko: "소셜미디어", en: "Social Media" },
    more: { ko: "더 보기", en: "See More" },
  },

  // ── Home – Products Section ──
  productsSection: {
    heading: { ko: "THEHANA R.A.C 제품 구매", en: "THEHANA R.A.C Products" },
    more: { ko: "더 보기", en: "See More" },
    desc: {
      ko: "더하나 리버스 센터에서는 의료인을 위한 전문 의료기기부터 고기능성 키트까지, 역노화의 전 과정을 아우르는 차별화된 솔루션을 제공합니다.",
      en: "THE HANA Reverse Aging Center offers differentiated solutions covering the entire anti-aging process, from professional medical devices for medical practitioners to high-functionality kits.",
    },
    activatorTitle: { ko: "혈액 활성화기", en: "Blood Activator" },
    activatorDesc: {
      ko: ["화학 첨가물 없이, 오직", "내 혈액으로 완성하는", "자가 치유의 혁신"],
      en: ["Without chemical additives,", "completed only with my blood,", "innovation in self-healing"],
    },
    revercellTitle: { ko: "리버셀 주사", en: "Revercell Injection" },
    revercellDesc: {
      ko: ["세포의 시간을 되돌리는", "필수 에너지 루틴"],
      en: ["Turning back time on cells,", "essential energy routine"],
    },
    deepseaTitle: { ko: "심해수", en: "Deep Sea Water" },
    deepseaDesc: {
      ko: ["마시는 순간 시작되는", "리버스 에이징"],
      en: ["Reverse aging begins", "the moment you drink"],
    },
  },

  // ── Home – FAQ & Contact ──
  faqContact: {
    srHeading: { ko: "자주 찾는 질문 및 고객 지원", en: "FAQ & Customer Support" },
    faqTitle: { ko: "자주 찾는 질문", en: "Frequently Asked Questions" },
    more: { ko: "더 보기", en: "See More" },
    faqSubtitle: { ko: "문의 하시기 전 궁금하신 사항을 확인하세요.", en: "Check your questions before contacting us." },
    tabs: {
      activator: { ko: "혈액 활성화기", en: "Blood Activator" },
      revercell: { ko: "리버셀 주사", en: "Revercell" },
      deepsea: { ko: "심해수", en: "Deep Sea Water" },
      as: { ko: "AS", en: "A/S" },
      purchase: { ko: "제품구매", en: "Purchase" },
    },
    onlineInquiry: { ko: "자주 찾는 질문", en: "FAQ" },
    inquiryButton: { ko: "문의하기", en: "Contact Us" },
    onlineDesc: { ko: "1:1 온라인 문의입니다.", en: "1:1 Online Inquiry" },
    csAs: { ko: "CS 및 AS 접수", en: "CS & A/S Reception" },
    weekday: { ko: "평일 :", en: "Weekdays:" },
    weekdayHours: { ko: "09:30 - 17:30", en: "09:30 - 17:30" },
    lunch: { ko: "점심 :", en: "Lunch:" },
    lunchHours: { ko: "12:00 ~ 13:00 (전화 상담 불가)", en: "12:00 ~ 13:00 (No phone consultation)" },
    holiday: { ko: "* 주말 및 공휴일 휴무", en: "* Closed on weekends and holidays" },
  },

  // ── Footer ──
  footer: {
    company: { ko: "㈜세일즈코어", en: "Salescore Co., Ltd." },
    ceo: { ko: "대표이사 : 한재선", en: "CEO: Jaeseon Han" },
    businessNo: { ko: "사업자등록번호 : 361-81-00506", en: "Business No.: 361-81-00506" },
    privacy: { ko: "개인정보처리방침", en: "Privacy Policy" },
    emailReject: { ko: "이메일무단수집거부", en: "Anti-Spam Policy" },
    store: { ko: "인바디스토어", en: "InBody Store" },
    branches: {
      hq: { ko: "인바디 본사", en: "HQ" },
      factory: { ko: "인바디 공장", en: "Factory" },
      venture: { ko: "인바디 벤처센터", en: "Venture Center" },
      yangjae: { ko: "인바디 양재센터", en: "Yangjae Center" },
      factory2: { ko: "인바디 2공장", en: "Factory 2" },
    },
  },

  // ── About Page ──
  about: {
    pageTitle: { ko: "더하나 리버스 에이징 센터 소개", en: "About THE HANA Reverse Aging Center" },
    introHeading: {
      ko: "Worldwide Leader in Reverse Aging Technology",
      en: "Worldwide Leader in Reverse Aging Technology",
    },
    introP1: {
      ko: "더하나 리버스 에이징 센터(THE HANA R.A.C)는\n'과학을 통한 시간의 재설계'를 실현하며\n역노화 솔루션의 표준으로 신뢰받는 글로벌 재생 과학 전문 기업입니다.",
      en: "THE HANA Reverse Aging Center (THE HANA R.A.C)\nrealizes 'redesigning time through science'\nand is a global regenerative science company trusted as the standard for anti-aging solutions.",
    },
    introP2: {
      ko: '전 세계 웰니스 시장에서 혁신적인 솔루션으로 주목받는 "THE HANA R.A.C(더하나 리버스 에이징 센터)"는 독자적인 첨단 재생 과학을 기반으로 한 프리미엄 역노화 전문 브랜드입니다.',
      en: '"THE HANA R.A.C" is a premium anti-aging brand based on proprietary advanced regenerative science, attracting attention in the global wellness market with innovative solutions.',
    },
    introP3: {
      ko: "베트남, 중국, 싱가포르를 비롯한 주요 글로벌 네트워크를 기반으로 전 세계에 차별화된 제품과 서비스를 제공하고 있습니다.\n의료인을 위한 전문 의료기기부터 고기능성 소모품까지 아우르는 통합 솔루션을 통해, 매년 가파른 성장세를 기록하며 역노화 산업의 글로벌 리더로 도약하고 있습니다..",
      en: "Based on major global networks including Vietnam, China, and Singapore, we provide differentiated products and services worldwide.\nThrough integrated solutions ranging from professional medical devices for medical practitioners to high-functionality consumables, we are recording steep growth every year and emerging as a global leader in the anti-aging industry.",
    },
    visionEyebrow: { ko: "VISION", en: "VISION" },
    visionTitle: { ko: "Everywhere", en: "Everywhere" },
    visionSubtitle: {
      ko: "전 세계, 전 분야에 건강한 젊음의 영향력을 발휘하는 글로벌 재생 과학 기업",
      en: "A global regenerative science company exerting the influence of healthy youth across all fields worldwide",
    },
    visionDesc: {
      ko: "더하나 리버스 에이징 센터는 첨단 재생 과학 전문 기업입니다. 단순한 수명 연장보다는 '건강한 젊음의 회복'에 집중하고, 보여지는 화려함보다는 '세포 수준의 본질적인 변화'를 중시하며 인류가 나이에 제한받지 않고 열정적인 삶을 영위하는 세상을 꿈꾸고 있습니다.",
      en: "THE HANA Reverse Aging Center is an advanced regenerative science company. Rather than simply extending lifespan, we focus on 'recovering healthy youth', and rather than superficial glamour, we value 'essential changes at the cellular level', dreaming of a world where humanity lives passionately without age limitations.",
    },
    missionEyebrow: { ko: "MISSION", en: "MISSION" },
    missionTitle: { ko: "Deep & Fundamental", en: "Deep & Fundamental" },
    missionDesc: {
      ko: "보다 깊게, 보다 근본적으로 생명의 시간을 재설계하는 솔루션을 만듭니다.\n더하나 리버스 에이징 센터는 겉으로 드러나는 노화 현상 그 너머, 남들의 눈에는 쉽게 보이지 않는 세포와 생체 메커니즘의 이면을 탐구합니다.\n우리는 재생 과학 기술을 통해 인간의 잠재력을 깨우고, 글로벌 시장에 역노화라는 새로운 가능성을 증명하기 위해 끊임없이 노력하고 있습니다.",
      en: "We create solutions that redesign the time of life more deeply and fundamentally.\nTHE HANA Reverse Aging Center explores beyond visible aging phenomena, delving into the hidden mechanisms of cells and biological systems.\nWe continuously strive to awaken human potential through regenerative science technology and prove new possibilities of anti-aging in the global market.",
    },
  },

  // ── Products Page ──
  products: {
    pageTitle: { ko: "혈액 활성화기", en: "Blood Activator" },
    introTitle: { ko: "혈액 활성화기", en: "Blood Activator" },
    introSubtitle: { ko: "세계 혈구세포 활성화 시장의 새로운 표준", en: "A New Standard in the Global Blood Cell Activation Market" },
    introDesc: {
      ko: "정밀한 혈액 관리 기술이 부재했던 시대에, 독보적인 정밀도와 재현도를 보장하는 혈구세포 활성화 기술을 통해 처음으로 혈액 활성화기를 선보였습니다. 우리는 산업의 패러다임과 대중의 인식을 변화시키며, 가장 실용적이고 과학적인 역노화 케어 브랜드로 자리매김하였습니다. 메디컬, 영양, 피트니스, 재활 등 각 전문 분야에서 신뢰의 상징이 된 우리의 기술은 이미 시장을 '혈액 활성화기'와 '그렇지 않은 것'으로 구분 짓는 기준이 되었습니다. 이제 우리는 전문 센터를 넘어 일상 속 어디서나 혈액 건강을 관리할 수 있는 건강한 생활의 필수품으로 그 영역을 확장하고 있습니다.",
      en: "In an era when precise blood management technology was absent, we introduced the first blood activator through blood cell activation technology that guarantees unparalleled precision and reproducibility. We have changed the industry paradigm and public perception, establishing ourselves as the most practical and scientific anti-aging care brand. Our technology, which has become a symbol of trust in each specialized field such as medical, nutrition, fitness, and rehabilitation, has already become the standard that divides the market into 'blood activators' and 'everything else'. Now we are expanding our territory beyond specialized centers to become an essential part of healthy living that can manage blood health anywhere in daily life.",
    },
    gridActivator: { ko: "혈액활성화기", en: "Blood Activator" },
    gridMini: { ko: "혈액활성화기 MINI", en: "Blood Activator MINI" },
    gridSeparator: { ko: "혈액 분리 장치", en: "Blood Separator" },
    revercellSectionTitle: { ko: "리버셀 주사", en: "Revercell Injection" },
    revercellSubtitle: { ko: "리버셀 주사 (Revercell)", en: "Revercell Injection" },
    revercellMechanism: { ko: "줄기세포의 재생 및 분화 메커니즘", en: "Stem Cell Regeneration & Differentiation Mechanism" },
    revercellDesc: {
      ko: "신체 복구의 핵심, 재생 에너지 줄기세포는 인체 내 손상된 세포와 조직을 원래의 기능으로 회복시키는 강력한 재생 세포입니다. 신체를 구성하는 다양한 조직으로 분화하는 특성과 무한히 복제되는 자가 증식 능력을 통해 근본적인 치유를 이끌어냅니다. 혈관 신생과 전신 순환 리버셀의 활성화 기술과 결합된 줄기세포를 정맥으로 투여하면, 혈관을 타고 전신을 순환하며 재생이 시급한 곳에 집중적으로 타겟팅됩니다. 특히 혈액 공급이 원활하지 않은 부위에 새로운 혈관을 신생하여 심혈관계 및 미세혈관 합병증 증세를 획기적으로 완화하고 신체 전반의 활력을 되찾아줍니다.",
      en: "The core of body repair, regenerative energy stem cells are powerful regenerative cells that restore damaged cells and tissues in the human body to their original function. Through the characteristic of differentiating into various tissues that make up the body and the ability to self-replicate infinitely, they lead to fundamental healing. When stem cells combined with Revercell's activation technology are administered intravenously, they circulate throughout the body via blood vessels and are intensively targeted where regeneration is urgent. In particular, new blood vessels are created in areas where blood supply is not smooth, dramatically alleviating cardiovascular and microvascular complication symptoms and restoring vitality throughout the body.",
    },
    deepseaSectionTitle: { ko: "심해수", en: "Deep Sea Water" },
    deepseaSubtitle: { ko: "심해수 – 리워터(Re:water)", en: "Deep Sea Water – Re:water" },
    deepseaGreenHeadline: { ko: "해양심층 1km 청정수로 깨우는 신체 재생의 근본", en: "The Foundation of Body Regeneration Awakened by 1km Deep Ocean Clean Water" },
    deepseaDesc: {
      ko: "세계 최고 수준의 해양 1km 청정 수심에서 취수하여 불순물이 전혀 없는 순수함을 자랑합니다. 어머니의 양수와 유사한 미네랄 밸런스를 갖춘 70여 종의 이온 미네랄이 체내에 빠르게 흡수됩니다. 신체 복구의 토대, 미네랄 밸런스줄기세포가 손상된 세포와 조직을 회복시키기 위해서는 체액의 미네랄 밸런스가 필수적입니다. 리워터에 함유된 고농도의 마그네슘(50~71mg/L)과 칼슘(16~25mg/L) 은 줄기세포가 신체 각 조직으로 분화하고 자가 증식하는 과정에서 핵심적인 촉매제 역할을 하며 근본적인 재생을 지원합니다. 리버셀의 활성화 기술로 투여된 줄기세포가 혈관을 타고 전신에 도달하기 위해서는 혈액의 점도와 순환 능력이 중요합니다. 리워터는 원활한 신진대사와 혈행 밸런스 케어를 통해 새로운 혈관이 신생되는 과정을 돕습니다. 특히 미세혈관까지 도달하는 수분 공급 능력을 통해 심혈관계 합병증 완화와 전신 활력 증진에 기여합니다.",
      en: "Drawing water from the world's highest level of ocean clean depths at 1km, it boasts purity with absolutely no impurities. Over 70 types of ionic minerals with a mineral balance similar to mother's amniotic fluid are rapidly absorbed into the body. The foundation of body repair requires mineral balance for stem cells to restore damaged cells and tissues. The high-concentration magnesium (50-71mg/L) and calcium (16-25mg/L) contained in Re:water play a crucial catalyst role in the process of stem cell differentiation into various body tissues and self-proliferation, supporting fundamental regeneration. For stem cells administered through Revercell's activation technology to reach the entire body through blood vessels, blood viscosity and circulation ability are important. Re:water helps the process of new blood vessel creation through smooth metabolism and blood circulation balance care. In particular, through its ability to deliver moisture to even microvessels, it contributes to alleviating cardiovascular complications and enhancing overall vitality.",
    },
  },

  // ── Research Page ──
  research: {
    pageTitle: { ko: "혈액 활성화 기술", en: "Blood Activation Technology" },
    whatIsActivePrf: { ko: "What is Active PRF?", en: "What is Active PRF?" },
    activePrfDesc: {
      ko: "활성 피브린 분석법(Active Platelet-Rich Fibrin Analysis)은 인체 자가 혈액 내의 성장 인자와 섬유소 네트워크를 정량적, 질적으로 극대화하여 손상된 조직을 복원하는 재생 의학 기술입니다. THEHANA R.A.C는 이 Active PRF 메커니즘을 활용하여 기존 재생 치료의 패러다임을 바꿉니다.",
      en: "Active Platelet-Rich Fibrin Analysis is a regenerative medicine technology that restores damaged tissues by quantitatively and qualitatively maximizing growth factors and fibrin networks in autologous blood. THEHANA R.A.C utilizes this Active PRF mechanism to change the paradigm of existing regenerative treatments.",
    },
    principlesTitle: {
      ko: "Fundamental Principles of Active PRF",
      en: "Fundamental Principles of Active PRF",
    },
    growthFactorTitle: {
      ko: "기존 PRP 대비 6배 높은 성장인자 방출률",
      en: "6x Higher Growth Factor Release Rate Compared to Conventional PRP",
    },
    clinicalCases: { ko: "임상사례", en: "Clinical Cases" },
    deepseaTech: { ko: "심해수 기술", en: "Deep Sea Water Technology" },
  },

  // ── Support Page ──
  support: {
    pageTitle: { ko: "1:1문의", en: "1:1 Inquiry" },
    tabs: {
      purchaseAs: { ko: "제품구입/AS문의", en: "Purchase/A/S Inquiry" },
      inquiry: { ko: "문의하기", en: "Contact Us" },
      faq: { ko: "자주 묻는 질문", en: "FAQ" },
      notice: { ko: "공지사항", en: "Notices" },
    },
    bannerTitle: { ko: "제품구입/AS문의", en: "Product Purchase / A/S Inquiry" },
    thehana: { ko: "더하나", en: "THE HANA" },
    reverseAgingCenter: { ko: "리버스에이징센터", en: "Reverse Aging Center" },
    select: { ko: "선택", en: "Select" },
    inquiryFormTitle: { ko: "문의하기", en: "Contact Us" },
    category: { ko: "구분", en: "Category" },
    productGroup: { ko: "제품군", en: "Product Line" },
    affiliation: { ko: "소속", en: "Affiliation" },
    name: { ko: "이름", en: "Name" },
    phone: { ko: "연락처", en: "Phone" },
    email: { ko: "이메일", en: "Email" },
    address: { ko: "주소", en: "Address" },
    zipSearch: { ko: "우편번호 검색", en: "Search Zip Code" },
    addressPlaceholder: { ko: "주소를 입력하세요.", en: "Enter your address" },
    addressDetailPlaceholder: { ko: "상세 주소를 입력하세요.", en: "Enter detailed address" },
    privacyConsent: {
      ko: "개인정보 수집 및 이용약관을 확인하였으며, 이에 동의합니다.",
      en: "I have read and agree to the Privacy Policy and Terms of Use.",
    },
    privacyLabel: { ko: "개인정보 수집 및 이용약관", en: "Privacy Policy and Terms of Use" },
    confirm: { ko: "확인", en: "Confirm" },
    cancel: { ko: "취소", en: "Cancel" },
    faqTitle: { ko: "자주 찾는 질문", en: "Frequently Asked Questions" },
    faqSubtitle: { ko: "문의 하시기 전 궁금하신 사항을 확인하세요.", en: "Check your questions before contacting us." },
    searchPlaceholder: { ko: "검색어를 입력하세요.", en: "Enter search keyword" },
    titleOption: { ko: "제목", en: "Title" },
    contentOption: { ko: "내용", en: "Content" },
    all: { ko: "전체", en: "All" },
    option1: { ko: "옵션 1", en: "Option 1" },
    option2: { ko: "옵션 2", en: "Option 2" },
  },

  // ── Press / News Page ──
  press: {
    pageTitle: { ko: "보도자료", en: "Press Releases" },
    subtitle: {
      ko: "더하나 R.A.C의 최신 소식과 언론 보도를 한눈에 확인하세요.",
      en: "Check the latest news and press coverage of THE HANA R.A.C at a glance.",
    },
    totalPrefix: { ko: "총 ", en: "Total " },
    totalSuffix: { ko: "건", en: " items" },
    titleFilter: { ko: "제목", en: "Title" },
    searchPlaceholder: { ko: "검색어를 입력하세요", en: "Enter search keyword" },
    instagram: { ko: "인스타그램", en: "Instagram" },
    youtube: { ko: "유튜브", en: "YouTube" },
    firstPage: { ko: "첫 페이지", en: "First page" },
    prevPage: { ko: "이전 페이지", en: "Previous page" },
    nextPage: { ko: "다음 페이지", en: "Next page" },
    lastPage: { ko: "마지막 페이지", en: "Last page" },
  },

  // ── Common ──
  common: {
    more: { ko: "더 보기", en: "See More" },
    search: { ko: "검색", en: "Search" },
    select: { ko: "선택", en: "Select" },
  },
} as const

export type TranslationKeys = typeof translations
