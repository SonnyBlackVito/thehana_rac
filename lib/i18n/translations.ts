export type Locale = "ko" | "en";

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
    eyebrow: {
      ko: "더하나 리버스 에이징 센터",
      en: "THE HANA Reverse Aging Center",
    },
    headingLine1: {
      ko: "단 15분의 활성화",
      en: "Just 15 Minutes of Activation",
    },
    headingLine2: {
      ko: "당신의 혈액 속에 잠든 재생 에너지를 깨웁니다",
      en: "Awakens the regenerative energy dormant in your blood",
    },
    descLine1: {
      ko: "첨단 재생 과학 솔루션을 기반으로",
      en: "Based on advanced regenerative science solutions",
    },
    descLine2: {
      ko: "역노화를 실현하는 프리미엄 리버스 에이징 센터",
      en: "A premium reverse aging center realizing anti-aging",
    },
  },

  // ── Home – News & Social ──
  newsSocial: {
    srHeading: {
      ko: "최신 뉴스 및 소셜 미디어",
      en: "Latest News & Social Media",
    },
    latestNews: { ko: "최신뉴스", en: "Latest News" },
    socialMedia: { ko: "소셜미디어", en: "Social Media" },
    more: { ko: "더 보기", en: "See More" },
    categoryPress: { ko: "보도자료", en: "PRESS" },
    categoryEvent: { ko: "이벤트", en: "EVENT" },
    categoryResearch: { ko: "연구", en: "RESEARCH" },
  },

  // ── Home – Products Section ──
  productsSection: {
    heading: { ko: "THEHANA R.A.C 제품 구매", en: "THEHANA R.A.C Products" },
    more: { ko: "더 보기", en: "See More" },
    desc: {
      ko: "더하나 리버스 센터에서는 의료인을 위한 전문 의료기기부터 고기능성 키트까지,\n역노화의 전 과정을 아우르는 차별화된 솔루션을 제공합니다.",
      en: "THE HANA Reverse Aging Center offers differentiated solutions covering the entire anti-aging process, from professional medical devices for medical practitioners to high-functionality kits.",
    },
    activatorTitle: { ko: "혈액 활성화기", en: "Blood Activator" },
    activatorDesc: {
      ko: [
        "화학 첨가물 없이, 오직",
        "내 혈액으로 완성하는",
        "자가 치유의 혁신",
      ],
      en: [
        "Without chemical additives,",
        "completed only with my blood,",
        "innovation in self-healing",
      ],
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
    srHeading: {
      ko: "자주 찾는 질문 및 고객 지원",
      en: "FAQ & Customer Support",
    },
    faqTitle: { ko: "자주 찾는 질문", en: "Frequently Asked Questions" },
    more: { ko: "더 보기", en: "See More" },
    faqSubtitle: {
      ko: "문의 하시기 전 궁금하신 사항을 확인하세요.",
      en: "Check your questions before contacting us.",
    },
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
    lunchHours: {
      ko: "12:00 ~ 13:00 (전화 상담 불가)",
      en: "12:00 ~ 13:00 (No phone consultation)",
    },
    holiday: {
      ko: "* 주말 및 공휴일 휴무",
      en: "* Closed on weekends and holidays",
    },
  },

  // ── Footer ──
  footer: {
    company: { ko: "㈜더하나코퍼레이션", en: "Thehana Corporation Co., Ltd." },
    ceo: { ko: "대표이사 : 한재선", en: "CEO: Jaeseon Han" },
    businessNo: {
      ko: "사업자등록번호 : 102-86-03665",
      en: "Business No.: 102-86-03665",
    },
    address: {
      ko: "주소 : 06017 서울시 강남구 압구정로 306",
      en: "Address: 306 Apgujeong-ro, Gangnam-gu, Seoul, 06017",
    },
    privacy: { ko: "개인정보처리방침", en: "Privacy Policy" },
    emailReject: { ko: "이메일무단수집거부", en: "Anti-Spam Policy" },
    store: { ko: "더하나스토어", en: "TheHana Store" },
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
    pageTitle: {
      ko: "더하나 리버스 에이징 센터 소개",
      en: "About THE HANA Reverse Aging Center",
    },
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
    introSubtitle: {
      ko: "세계 혈구세포 활성화 시장의 새로운 표준",
      en: "A New Standard in the Global Blood Cell Activation Market",
    },
    introDesc: {
      ko: "정밀한 혈액 관리 기술이 부재했던 시대에, 독보적인 정밀도와 재현도를 보장하는 혈구세포 활성화 기술을 통해 처음으로 혈액 활성화기를 선보였습니다. 우리는 산업의 패러다임과 대중의 인식을 변화시키며, 가장 실용적이고 과학적인 역노화 케어 브랜드로 자리매김하였습니다. 메디컬, 영양, 피트니스, 재활 등 각 전문 분야에서 신뢰의 상징이 된 우리의 기술은 이미 시장을 '혈액 활성화기'와 '그렇지 않은 것'으로 구분 짓는 기준이 되었습니다. 이제 우리는 전문 센터를 넘어 일상 속 어디서나 혈액 건강을 관리할 수 있는 건강한 생활의 필수품으로 그 영역을 확장하고 있습니다.",
      en: "In an era when precise blood management technology was absent, we introduced the first blood activator through blood cell activation technology that guarantees unparalleled precision and reproducibility. We have changed the industry paradigm and public perception, establishing ourselves as the most practical and scientific anti-aging care brand. Our technology, which has become a symbol of trust in each specialized field such as medical, nutrition, fitness, and rehabilitation, has already become the standard that divides the market into 'blood activators' and 'everything else'. Now we are expanding our territory beyond specialized centers to become an essential part of healthy living that can manage blood health anywhere in daily life.",
    },
    gridActivator: { ko: "혈액활성화기", en: "Blood Activator" },
    gridMini: { ko: "혈액활성화기 MINI", en: "Blood Activator MINI" },
    gridSeparator: { ko: "혈액 분리 장치", en: "Blood Separator" },
    revercellSectionTitle: { ko: "리버셀 주사", en: "Revercell Injection" },
    revercellSubtitle: {
      ko: "리버셀 주사 (Revercell)",
      en: "Revercell Injection",
    },
    revercellMechanism: {
      ko: "줄기세포의 재생 및 분화 메커니즘",
      en: "Stem Cell Regeneration & Differentiation Mechanism",
    },
    revercellDesc: {
      ko: "신체 복구의 핵심, 재생 에너지 줄기세포는 인체 내 손상된 세포와 조직을 원래의 기능으로 회복시키는 강력한 재생 세포입니다. 신체를 구성하는 다양한 조직으로 분화하는 특성과 무한히 복제되는 자가 증식 능력을 통해 근본적인 치유를 이끌어냅니다. 혈관 신생과 전신 순환 리버셀의 활성화 기술과 결합된 줄기세포를 정맥으로 투여하면, 혈관을 타고 전신을 순환하며 재생이 시급한 곳에 집중적으로 타겟팅됩니다. 특히 혈액 공급이 원활하지 않은 부위에 새로운 혈관을 신생하여 심혈관계 및 미세혈관 합병증 증세를 획기적으로 완화하고 신체 전반의 활력을 되찾아줍니다.",
      en: "The core of body repair, regenerative energy stem cells are powerful regenerative cells that restore damaged cells and tissues in the human body to their original function. Through the characteristic of differentiating into various tissues that make up the body and the ability to self-replicate infinitely, they lead to fundamental healing. When stem cells combined with Revercell's activation technology are administered intravenously, they circulate throughout the body via blood vessels and are intensively targeted where regeneration is urgent. In particular, new blood vessels are created in areas where blood supply is not smooth, dramatically alleviating cardiovascular and microvascular complication symptoms and restoring vitality throughout the body.",
    },
    deepseaSectionTitle: { ko: "심해수", en: "Deep Sea Water" },
    deepseaSubtitle: {
      ko: "심해수 – 리워터(Re:water)",
      en: "Deep Sea Water – Re:water",
    },
    deepseaGreenHeadline: {
      ko: "해양심층 1km 청정수로 깨우는 신체 재생의 근본",
      en: "The Foundation of Body Regeneration Awakened by 1km Deep Ocean Clean Water",
    },
    deepseaDesc: {
      ko: "세계 최고 수준의 해양 1km 청정 수심에서 취수하여 불순물이 전혀 없는 순수함을 자랑합니다. 어머니의 양수와 유사한 미네랄 밸런스를 갖춘 70여 종의 이온 미네랄이 체내에 빠르게 흡수됩니다. 신체 복구의 토대, 미네랄 밸런스줄기세포가 손상된 세포와 조직을 회복시키기 위해서는 체액의 미네랄 밸런스가 필수적입니다. 리워터에 함유된 고농도의 마그네슘(50~71mg/L)과 칼슘(16~25mg/L) 은 줄기세포가 신체 각 조직으로 분화하고 자가 증식하는 과정에서 핵심적인 촉매제 역할을 하며 근본적인 재생을 지원합니다. 리버셀의 활성화 기술로 투여된 줄기세포가 혈관을 타고 전신에 도달하기 위해서는 혈액의 점도와 순환 능력이 중요합니다. 리워터는 원활한 신진대사와 혈행 밸런스 케어를 통해 새로운 혈관이 신생되는 과정을 돕습니다. 특히 미세혈관까지 도달하는 수분 공급 능력을 통해 심혈관계 합병증 완화와 전신 활력 증진에 기여합니다.",
      en: "Drawing water from the world's highest level of ocean clean depths at 1km, it boasts purity with absolutely no impurities. Over 70 types of ionic minerals with a mineral balance similar to mother's amniotic fluid are rapidly absorbed into the body. The foundation of body repair requires mineral balance for stem cells to restore damaged cells and tissues. The high-concentration magnesium (50-71mg/L) and calcium (16-25mg/L) contained in Re:water play a crucial catalyst role in the process of stem cell differentiation into various body tissues and self-proliferation, supporting fundamental regeneration. For stem cells administered through Revercell's activation technology to reach the entire body through blood vessels, blood viscosity and circulation ability are important. Re:water helps the process of new blood vessel creation through smooth metabolism and blood circulation balance care. In particular, through its ability to deliver moisture to even microvessels, it contributes to alleviating cardiovascular complications and enhancing overall vitality.",
    },
    quantumRestTitle: {
      ko: "단순한 휴식을 넘어, 세포의 잠을 깨우는 과학",
      en: "Beyond Simple Rest, the Science of Awakening Cells",
    },
    quantumRestDesc: {
      ko: "기존의 단순한 고압 산소 공급 방식에서 한 걸음 더 나아갔습니다. 양자 산소 챔버는 독자적인 양자 파동 기술을 결합하여, 산소 입자가 세포막을 보다 효율적이고 깊숙이 통과할 수 있도록 돕습니다. 이를 통해 일반적인 산소 테라피로는 도달하기 어려웠던 체내 깊은 곳까지 풍부한 에너지를 전달합니다. 세포 내부의 에너지 공장인 미토콘드리아를 양자 에너지가 직접 자극합니다. 세포 공명 현상을 통해 정체되어 있던 에너지 대사를 정상화함으로써, 만성적인 무기력증을 해소하고 몸 전체의 활력을 즉각적으로 회복시켜 드립니다. 눈에 보이지 않는 미세한 양자 진동이 신체 구석구석에 전달됩니다. 이 강력한 진동은 체내 깊숙이 쌓여 배출되지 못했던 노폐물과 독소의 배출을 촉진하여, 몸의 무거움을 근본적으로 해결하고 한결 가벼워진 신체 컨디션을 선사합니다.",
      en: "We go one step beyond conventional high-pressure oxygen supply. The quantum oxygen chamber combines proprietary quantum wave technology to help oxygen particles pass through cell membranes more efficiently and deeply. This delivers rich energy to deep areas of the body that ordinary oxygen therapy struggles to reach. Quantum energy directly stimulates mitochondria, the energy factories inside cells. Through cellular resonance, stagnant energy metabolism is normalized, helping relieve chronic fatigue and restore vitality throughout the body. Subtle quantum vibrations are delivered throughout the body, promoting the release of waste and toxins that have accumulated deeply and supporting a lighter physical condition.",
    },
    quantumRestImageAlt1: {
      ko: "양자 산소 챔버 라운지 공간",
      en: "Quantum oxygen chamber lounge space",
    },
    quantumRestImageAlt2: {
      ko: "양자 산소 챔버 룸 공간",
      en: "Quantum oxygen chamber room space",
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
    principlesDesc1: {
      ko: "현재 활성 PRF(Active PRF)에 의한 재생 치료 결과는 뛰어난 생체 적합성과 재생 효율로 인해 임상 현장에서 폭넓게 활용되고 있습니다. 하지만 임상적 치료 수단으로서 이 기술을 온전히 활용하기 위해서는, 기존 재생 방식(PRP 등)과의 근본적인 메커니즘 차이를 알고 이를 정밀하게 따져보는 전문적 식견이 필요합니다.",
      en: "Currently, the regenerative treatment results from Active PRF are widely utilized in clinical settings due to their excellent biocompatibility and regenerative efficiency. However, to fully harness this technology as a clinical treatment modality, professional insight is required to understand and precisely evaluate the fundamental mechanistic differences from conventional regenerative methods (such as PRP).",
    },
    principlesDesc2: {
      ko: "Active PRF를 다루는 임상 전문가는 혈액의 응고 기전과 피브린 네트워크(Fibrin Network) 형성 원리를 충분히 이해하여, 성장인자의 방출 주기와 세포 증식에 영향을 미치는 생물학적 요인을 최적화해야 합니다. 특히 저항과 리액턴스를 이해하듯, 섬유소의 밀도와 성장인자의 서방형 방출(Sustained Release) 개념을 이해하는 것이 치료의 성패를 좌우합니다.",
      en: "Clinical experts handling Active PRF must fully understand the blood coagulation mechanism and the principles of Fibrin Network formation to optimize the biological factors affecting the growth factor release cycle and cell proliferation. In particular, just as understanding resistance and reactance is crucial, comprehending the density of fibrin and the concept of sustained release of growth factors determines the success or failure of the treatment.",
    },
    comparisonVs: { ko: "VS", en: "VS" },
    comparisonPrp: { ko: "일반 PRP", en: "General PRP" },
    comparisonActive: {
      ko: "활성 PRP / PRF 비교",
      en: "Active PRP / PRF Comparison",
    },
    imageCards: {
      plateletIllustrationAlt: {
        ko: "비활성 혈소판과 활성 혈소판의 가상 일러스트",
        en: "Virtual illustration of inactive and active platelets",
      },
      plateletIllustrationLabel: {
        ko: "비활성 혈소판 & 활성 혈소판(가상도)",
        en: "Inactive & Active Platelets (Virtual)",
      },
      plateletSemAlt: {
        ko: "전자현미경으로 촬영한 비활성 및 활성 혈소판",
        en: "Inactive and active platelets photographed by electron microscope",
      },
      plateletSemLabel: {
        ko: "비활성 혈소판 & 활성 혈소판(전자현미경)",
        en: "Inactive & Active Platelets (SEM)",
      },
      leukocyteSemAlt: {
        ko: "전자현미경으로 촬영한 비활성 및 활성 백혈구",
        en: "Inactive and active leukocytes photographed by electron microscope",
      },
      leukocyteSemLabel: {
        ko: "비활성 백혈구 & 활성 백혈구(전자현미경)",
        en: "Inactive & Active Leukocytes (SEM)",
      },
    },
    tableHeaders: {
      item: { ko: "항목", en: "Item" },
      prp: { ko: "PRP", en: "PRP" },
      activePrp: { ko: "활성 PRP 정맥 주사", en: "Active PRP IV Injection" },
      activePrf: {
        ko: "활성 PRF 섬유소 치료",
        en: "Active PRF Fibrin Treatment",
      },
    },
    tableRows: {
      volume: {
        label: { ko: "채혈량", en: "Blood Volume" },
        prp: { ko: "10~30cc", en: "10~30cc" },
        activePrp: { ko: "10~30cc", en: "10~30cc" },
        activePrf: { ko: "10~30cc", en: "10~30cc" },
      },
      extraction: {
        label: { ko: "PRP 추출량", en: "PRP Extraction Volume" },
        prp: { ko: "1~3cc", en: "1~3cc" },
        activePrp: { ko: "15cc", en: "15cc" },
        activePrf: { ko: "15cc", en: "15cc" },
      },
      anticoagulant: {
        label: { ko: "항응고제", en: "Anticoagulant" },
        prp: { ko: "필요", en: "Required" },
        activePrp: { ko: "필요", en: "Required" },
        activePrf: { ko: "필요 없음", en: "Not Required" },
      },
      activation: {
        label: { ko: "활성화 방법", en: "Activation Method" },
        prp: {
          ko: "자연 응고(비방상), 화학적 활성화 방식\n-> CaCl₂, 트롬빈",
          en: "Natural coagulation, Chemical activation\n-> CaCl₂, Thrombin",
        },
        activePrp: {
          ko: "<b>물리적인 스트레스 활성화 방식</b>\n-> <b>Microtubule</b>",
          en: "<b>Physical stress activation</b>\n-> <b>Microtubule</b>",
        },
        activePrf: {
          ko: "<b>물리적인 스트레스 활성화 방식</b>\n-> <b>Microtubule</b>",
          en: "<b>Physical stress activation</b>\n-> <b>Microtubule</b>",
        },
      },
      growthFactorRetention: {
        label: { ko: "성장인자 유지", en: "Growth Factor Retention" },
        prp: { ko: "1시간", en: "1 Hour" },
        activePrp: {
          ko: "7일 이상 활성화 세포 치료",
          en: "7+ Days Active Cell Therapy",
        },
        activePrf: {
          ko: "10~14일 지속적으로 재생 치료",
          en: "10-14 Days Continuous Regenerative Therapy",
        },
      },
      growthFactorRelease: {
        label: { ko: "성장인자 방출", en: "Growth Factor Release" },
        prp: { ko: "자연 방출(느림)", en: "Natural Release (Slow)" },
        activePrp: {
          ko: "<b>즉각 방출(빠르고 강력)</b>",
          en: "<b>Immediate Release (Fast & Strong)</b>",
        },
        activePrf: {
          ko: "즉각작이고 강함(고농도)",
          en: "Immediate & Strong (High Concentration)",
        },
      },
      pain: {
        label: { ko: "통증", en: "Pain" },
        prp: {
          ko: "아주 심함(ph4.5 강한 산성)",
          en: "Very Severe (pH 4.5 strong acid)",
        },
        activePrp: { ko: "없음", en: "None" },
        activePrf: { ko: "없음", en: "None" },
      },
      effect: {
        label: { ko: "치료 효과", en: "Treatment Effect" },
        prp: { ko: "서서히 효과 발현", en: "Gradual Effect Onset" },
        activePrp: {
          ko: "<b>빠른 조직 재생, 항염 효과 우수</b>",
          en: "<b>Rapid Tissue Regeneration, Excellent Angiogenesis</b>",
        },
        activePrf: {
          ko: "<b>빠른 조직 재생, 항염 효과 우수</b>",
          en: "<b>Rapid Tissue Regeneration, Excellent Angiogenesis</b>",
        },
      },
      fibrin: {
        label: { ko: "섬유소", en: "Fibrin" },
        prp: { ko: "파괴", en: "Destroyed" },
        activePrp: { ko: "파괴", en: "Destroyed" },
        activePrf: { ko: "보존", en: "Preserved" },
      },
      nitricOxide: {
        label: {
          ko: "미토콘드리아 산화질소",
          en: "Mitochondrial Nitric Oxide",
        },
        prp: { ko: "미미", en: "Minimal" },
        activePrp: { ko: "6배 정도 방출", en: "Approx. 6x Release" },
        activePrf: { ko: "6배 정도 방출", en: "Approx. 6x Release" },
      },
      cellActivation: {
        label: { ko: "성장인자 활성화", en: "Growth Factor Activation" },
        prp: { ko: "미미", en: "Minimal" },
        activePrp: { ko: "<b>강력한 세포 활성화</b>", en: "<b>Strong Cell Activation</b>" },
        activePrf: { ko: "<b>강력한 세포 활성화</b>", en: "<b>Strong Cell Activation</b>" },
      },
      fibrinNetwork: {
        label: { ko: "섬유소 네트워크", en: "Fibrin Network" },
        prp: { ko: "없음", en: "None" },
        activePrp: { ko: "없음", en: "None" },
        activePrf: {
          ko: "<b>네트워크된 활성 혈소판, 백혈구</b>",
          en: "<b>Networking Active Platelets, Leukocytes</b>",
        },
      },
      exosome: {
        label: { ko: "엑소좀 분비", en: "Exosome Secretion" },
        prp: { ko: "없음", en: "None" },
        activePrp: { ko: "있음", en: "Yes" },
        activePrf: { ko: "있음", en: "Yes" },
      },
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
    bannerTitle: {
      ko: "제품구입/AS문의",
      en: "Product Purchase / A/S Inquiry",
    },
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
    addressDetailPlaceholder: {
      ko: "상세 주소를 입력하세요.",
      en: "Enter detailed address",
    },
    privacyConsent: {
      ko: "개인정보 수집 및 이용약관을 확인하였으며, 이에 동의합니다.",
      en: "I have read and agree to the Privacy Policy and Terms of Use.",
    },
    privacyLabel: {
      ko: "개인정보 수집 및 이용약관",
      en: "Privacy Policy and Terms of Use",
    },
    confirm: { ko: "확인", en: "Confirm" },
    cancel: { ko: "취소", en: "Cancel" },
    faqTitle: { ko: "자주 찾는 질문", en: "Frequently Asked Questions" },
    faqSubtitle: {
      ko: "문의 하시기 전 궁금하신 사항을 확인하세요.",
      en: "Check your questions before contacting us.",
    },
    searchPlaceholder: {
      ko: "검색어를 입력하세요.",
      en: "Enter search keyword",
    },
    titleOption: { ko: "제목", en: "Title" },
    contentOption: { ko: "내용", en: "Content" },
    all: { ko: "전체", en: "All" },
    option1: { ko: "옵션 1", en: "Option 1" },
    option2: { ko: "옵션 2", en: "Option 2" },
  },

  // ── Press / News Page ──
  press: {
    membershipTitle: { ko: "R.A.C 멤버십", en: "R.A.C Membership" },
    membershipSubtitle: {
      ko: "더하나 리버스에이징 VIP 멤버십",
      en: "THE HANA Reverse Aging VIP Membership",
    },
    membershipHeadline: {
      ko: "어제보다 젊은 내일, THE HANA가 설계하는 리버스 에이징의 시작",
      en: "A Younger Tomorrow Than Yesterday, the Beginning of Reverse Aging Designed by THE HANA",
    },
    membershipDesc: {
      ko: "\"단순한 관리를 넘어, 세포의 시간을 재구성합니다.\"\n프리미엄 딥씨워터 '리워터(Re:water)'와 AGE TECH의 혁신적 만남.\n세포 활력과 미네랄 밸런스를 되찾아주는 정교한 케어를 통해\n오직 당신만을 위한 '타임리스 뷰티(Timeless Beauty)'를 완성합니다.",
      en: "\"Beyond simple care, we reconstruct cellular time.\"\nA premium encounter between deep sea water 'Re:water' and AGE TECH innovation.\nThrough precise care that restores cellular vitality and mineral balance,\nwe complete 'Timeless Beauty' created only for you.",
    },
    membershipGoldAlt: { ko: "더하나 VIP 골드 멤버십 카드", en: "THE HANA VIP Gold membership card" },
    membershipPlatinumAlt: {
      ko: "더하나 VIP 플래티넘 멤버십 카드",
      en: "THE HANA VIP Platinum membership card",
    },
    membershipBlackAlt: { ko: "더하나 VIP 블랙 멤버십 카드", en: "THE HANA VIP Black membership card" },
    membershipDetailButton: { ko: "자세히 보기", en: "View details" },
    pageTitle: { ko: "보도자료", en: "Press Releases" },
    subtitle: {
      ko: "더하나 R.A.C의 최신 소식과 언론 보도를 한눈에 확인하세요.",
      en: "Check the latest news and press coverage of THE HANA R.A.C at a glance.",
    },
    totalPrefix: { ko: "총 ", en: "Total " },
    totalSuffix: { ko: "건", en: " items" },
    titleFilter: { ko: "제목", en: "Title" },
    searchPlaceholder: {
      ko: "검색어를 입력하세요",
      en: "Enter search keyword",
    },
    instagram: { ko: "인스타그램", en: "Instagram" },
    youtube: { ko: "유튜브", en: "YouTube" },
    firstPage: { ko: "첫 페이지", en: "First page" },
    prevPage: { ko: "이전 페이지", en: "Previous page" },
    nextPage: { ko: "다음 페이지", en: "Next page" },
    lastPage: { ko: "마지막 페이지", en: "Last page" },
  },

  // ── Auth (login / register / google / errors) ──
  auth: {
    loginTitle: { ko: "로그인", en: "Sign in" },
    loginDescription: {
      ko: "더하나 R.A.C 계정으로 로그인하세요.",
      en: "Sign in to continue with THE HANA R.A.C.",
    },
    registerTitle: { ko: "회원가입", en: "Create account" },
    registerDescription: {
      ko: "단 몇 초 만에 시작할 수 있습니다.",
      en: "It only takes a few seconds to get started.",
    },
    name: { ko: "이름", en: "Full name" },
    namePlaceholder: { ko: "홍길동", en: "Your full name" },
    email: { ko: "이메일", en: "Email" },
    emailPlaceholder: { ko: "you@example.com", en: "you@example.com" },
    password: { ko: "비밀번호", en: "Password" },
    passwordPlaceholder: { ko: "••••••••", en: "••••••••" },
    passwordHint: {
      ko: "최소 6자 이상 입력하세요.",
      en: "At least 6 characters.",
    },
    confirmPassword: { ko: "비밀번호 확인", en: "Confirm password" },
    submitLogin: { ko: "로그인", en: "Sign in" },
    submitRegister: { ko: "가입하기", en: "Create account" },
    loadingLogin: { ko: "로그인 중...", en: "Signing in..." },
    loadingRegister: { ko: "계정 생성 중...", en: "Creating account..." },
    or: { ko: "또는", en: "or" },
    continueGoogle: { ko: "Google로 계속하기", en: "Continue with Google" },
    registerGoogle: { ko: "Google로 가입", en: "Sign up with Google" },
    googleConnecting: { ko: "이동 중...", en: "Redirecting..." },
    googleVerifying: {
      ko: "Google 인증 처리 중...",
      en: "Verifying with Google...",
    },
    googleCallbackTitle: {
      ko: "Google 로그인",
      en: "Sign in with Google",
    },
    googleFailedTitle: {
      ko: "로그인 실패",
      en: "Sign-in failed",
    },
    googleMissingCode: {
      ko: "Google 인증 코드가 누락되었습니다.",
      en: "Missing authorization code from Google.",
    },
    googleGenericError: {
      ko: "Google 로그인에 실패했습니다. 다시 시도해 주세요.",
      en: "Could not sign in with Google. Please try again.",
    },
    haveAccount: { ko: "이미 계정이 있으신가요?", en: "Already have an account?" },
    noAccount: { ko: "계정이 없으신가요?", en: "Don't have an account?" },
    goRegister: { ko: "가입하기", en: "Sign up" },
    goLogin: { ko: "로그인", en: "Sign in" },
    successLogin: { ko: "로그인 성공", en: "Signed in successfully" },
    successRegister: { ko: "가입 완료", en: "Account created" },
    failedLogin: { ko: "로그인 실패", en: "Sign-in failed" },
    failedRegister: { ko: "가입 실패", en: "Sign-up failed" },
    requireSignIn: {
      ko: "로그인이 필요합니다.",
      en: "Please sign in to continue.",
    },
    loading: { ko: "불러오는 중...", en: "Loading..." },

    // validation
    errEmailRequired: { ko: "이메일을 입력하세요.", en: "Please enter your email." },
    errEmailInvalid: { ko: "올바른 이메일 형식이 아닙니다.", en: "Invalid email format." },
    errPasswordMin: { ko: "비밀번호는 최소 6자 이상이어야 합니다.", en: "Password must be at least 6 characters." },
    errNameMin: { ko: "이름은 최소 2자 이상이어야 합니다.", en: "Name must be at least 2 characters." },
    errConfirmRequired: { ko: "비밀번호를 다시 입력하세요.", en: "Please confirm your password." },
    errConfirmMismatch: { ko: "비밀번호가 일치하지 않습니다.", en: "Passwords do not match." },
  },

  // ── Dashboard ──
  dashboard: {
    eyebrow: { ko: "대시보드", en: "Dashboard" },
    greet: { ko: "환영합니다", en: "Welcome" },
    accountInfo: { ko: "계정 정보", en: "Account information" },
    accountInfoDesc: {
      ko: "이 정보는 페이지를 열 때마다 백엔드에서 동기화됩니다.",
      en: "This data is synced from the backend every time you open this page.",
    },
    fieldName: { ko: "이름", en: "Name" },
    fieldEmail: { ko: "이메일", en: "Email" },
    fieldRole: { ko: "역할", en: "Role" },
    fieldProvider: { ko: "로그인 방식", en: "Sign-in provider" },
    signOut: { ko: "로그아웃", en: "Sign out" },
  },

  // ── Shop / Products (backend-driven) ──
  shop: {
    pageTitle: { ko: "상품", en: "Shop" },
    subtitle: {
      ko: "더하나 R.A.C의 모든 상품을 한곳에서 만나보세요.",
      en: "Browse all THE HANA R.A.C products in one place.",
    },
    empty: { ko: "표시할 상품이 없습니다.", en: "No products to show." },
    inStock: { ko: "재고 있음", en: "In stock" },
    outOfStock: { ko: "품절", en: "Sold out" },
    quantity: { ko: "수량", en: "Quantity" },
    addToCart: { ko: "장바구니 담기", en: "Add to cart" },
    buyNow: { ko: "바로 구매", en: "Buy now" },
    description: { ko: "상품 설명", en: "Description" },
    backToShop: { ko: "← 상품 목록", en: "← Back to shop" },
    addedToast: {
      ko: "장바구니에 담았습니다.",
      en: "Added to cart.",
    },
    cartLink: { ko: "장바구니 보기", en: "View cart" },
    productNotFound: { ko: "상품을 찾을 수 없습니다.", en: "Product not found." },
  },

  // ── Cart ──
  cart: {
    pageTitle: { ko: "장바구니", en: "Cart" },
    empty: { ko: "장바구니가 비어 있습니다.", en: "Your cart is empty." },
    emptyCta: { ko: "쇼핑 계속하기", en: "Continue shopping" },
    item: { ko: "상품", en: "Item" },
    price: { ko: "가격", en: "Price" },
    quantity: { ko: "수량", en: "Qty" },
    subtotal: { ko: "소계", en: "Subtotal" },
    remove: { ko: "삭제", en: "Remove" },
    summary: { ko: "주문 요약", en: "Order summary" },
    summarySubtotal: { ko: "상품 합계", en: "Subtotal" },
    summaryShipping: { ko: "배송비", en: "Shipping" },
    summaryTotal: { ko: "총 결제 금액", en: "Total" },
    summaryShippingFree: { ko: "무료", en: "Free" },
    summaryShippingCalculated: {
      ko: "결제 시 계산됩니다",
      en: "Calculated at checkout",
    },
    proceedCheckout: { ko: "결제하기", en: "Proceed to checkout" },
    clear: { ko: "장바구니 비우기", en: "Clear cart" },
  },

  // ── Common ──
  common: {
    more: { ko: "더 보기", en: "See More" },
    search: { ko: "검색", en: "Search" },
    select: { ko: "선택", en: "Select" },
    loading: { ko: "불러오는 중...", en: "Loading..." },
    retry: { ko: "다시 시도", en: "Retry" },
    cancel: { ko: "취소", en: "Cancel" },
    confirm: { ko: "확인", en: "Confirm" },
    save: { ko: "저장", en: "Save" },
    error: { ko: "오류가 발생했습니다.", en: "Something went wrong." },
  },
} as const;

export type TranslationKeys = typeof translations;
