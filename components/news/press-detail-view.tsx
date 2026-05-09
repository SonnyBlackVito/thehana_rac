import Image from "next/image"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const paragraphs = [
  "보다 깊게, 보다 근본적으로 생명의 시간을 재설계하는 솔루션을 만듭니다.\n더하나 리버스 에이징 센터는 겉으로 드러나는 노화 현상 그 너머, 남들의 눈에는 쉽게 보이지 않는 세포와 생체 메커니즘의 이면을 탐구합니다.\n우리는 재생 과학 기술을 통해 인간의 잠재력을 깨우고, 글로벌 시장에 역노화라는 새로운 가능성을 증명하기 위해 끊임없이 노력하고 있습니다.",
  "보다 깊게, 보다 근본적으로 생명의 시간을 재설계하는 솔루션을 만듭니다.\n더하나 리버스 에이징 센터는 겉으로 드러나는 노화 현상 그 너머, 남들의 눈에는 쉽게 보이지 않는 세포와 생체 메커니즘의 이면을 탐구합니다.\n우리는 재생 과학 기술을 통해 인간의 잠재력을 깨우고, 글로벌 시장에 역노화라는 새로운 가능성을 증명하기 위해 끊임없이 노력하고 있습니다.",
  "보다 깊게, 보다 근본적으로 생명의 시간을 재설계하는 솔루션을 만듭니다.\n더하나 리버스 에이징 센터는 겉으로 드러나는 노화 현상 그 너머, 남들의 눈에는 쉽게 보이지 않는 세포와 생체 메커니즘의 이면을 탐구합니다.\n우리는 재생 과학 기술을 통해 인간의 잠재력을 깨우고, 글로벌 시장에 역노화라는 새로운 가능성을 증명하기 위해 끊임없이 노력하고 있습니다.",
]

const relatedNews = [
  {
    image: "/press-detail/related-1.png",
    title: "Refugee Crisis Worsens in Europe",
    body: "I want to talk about the hard stuff people wonder about but maybe are embarassed...",
    source: "Face the Nation",
    date: "2025 Dec.15",
  },
  {
    image: "/press-detail/related-2.png",
    title: "Mindful Technology Design: Thinking About Social Scalability In The Digit...",
    body: "Just to let you know that I have revised the offer I sent you last month, taking into consid...",
    source: "The Takeout",
    date: "2025 Dec.15",
  },
  {
    image: "/press-detail/related-3.png",
    title: "Internet of Things: More buzz than bite? Study finds slow uptake",
    body: "Hi, thanks again for getting back to me about the improvements. I’ve spoken to...",
    source: "CBSN Originals",
    date: "2025 Dec.15",
  },
]

function ArticleParagraph({ children }: { children: string }) {
  return (
    <p className="whitespace-pre-line text-center text-[16px] font-normal leading-[1.8] text-[#3E454B] md:text-[20px] md:leading-[1.65]">
      {children}
    </p>
  )
}

export function PressDetailView() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-[#EEEEEE]">
          <div className="mx-auto flex min-h-[260px] w-full max-w-[1440px] flex-col justify-center px-5 py-12 md:min-h-[324px] md:px-20">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[1120px]">
                <h1 className="text-[28px] font-bold leading-[1.14] tracking-[-0.02em] text-[#3E454B] md:text-[44px]">
                  Mindful Technology Design: Thinking About Social Scalability In The Digital Era
                </h1>

                <div className="mt-8 flex flex-col items-start gap-4 text-[16px] leading-none text-[#6D6D6D] md:text-[18px]">
                  <span className="border-b-2 border-[#055239] pb-3">전자신문</span>
                  <time dateTime="2025-12-15">2025-12-15</time>
                </div>
              </div>

              <Link
                href="/press"
                className="inline-flex h-10 w-fit items-center justify-center rounded-full border border-[#CCCCCC] bg-white px-6 text-[15px] font-semibold text-[#3E454B] transition-colors hover:border-[#055239] hover:text-[#055239] md:h-12 md:px-7 md:text-[16px]"
              >
                목록보기
              </Link>
            </div>
          </div>
        </section>

        <article className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-16 md:px-20 md:pb-24 md:pt-24">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-12 md:gap-14">
            <div className="flex flex-col gap-9">
              {paragraphs.map((paragraph, index) => (
                <ArticleParagraph key={`intro-${index}`}>{paragraph}</ArticleParagraph>
              ))}
            </div>

            <Image
              src="/press-detail/pr-detail-hero-group.png"
              alt="다양한 연령대와 배경의 사람들이 함께 웃고 있는 모습"
              width={1280}
              height={800}
              className="h-auto w-full object-cover"
              priority
            />

            <div className="flex flex-col gap-9">
              {paragraphs.slice(0, 2).map((paragraph, index) => (
                <ArticleParagraph key={`middle-${index}`}>{paragraph}</ArticleParagraph>
              ))}
            </div>

            <Image
              src="/press-detail/pr-detail-treatment.png"
              alt="목과 피부 라인을 따라 빛나는 케어 효과가 표현된 여성 이미지"
              width={1280}
              height={800}
              className="h-auto w-full object-cover"
            />

            <div className="flex flex-col gap-9">
              {paragraphs.slice(0, 2).map((paragraph, index) => (
                <ArticleParagraph key={`closing-${index}`}>{paragraph}</ArticleParagraph>
              ))}
            </div>
          </div>
        </article>

        <section className="mx-auto w-full max-w-[1440px] px-5 pb-20 md:px-20 md:pb-24">
          <div className="border-t border-[#CCCCCC] pt-14 md:pt-24">
            <h2 className="text-[30px] font-bold leading-tight tracking-[-0.02em] text-[#3E454B] md:text-[42px]">
              인바디 뉴스 더보기
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
              {relatedNews.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-[8px] border border-[#CCCCCC] bg-white">
                  <div className="relative aspect-[390/219] w-full overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 390px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex min-h-[210px] flex-col p-5 md:p-6">
                    <h3 className="line-clamp-2 text-[18px] font-semibold leading-[1.4] text-[#3E454B] md:text-[22px]">
                      {item.title}
                    </h3>
                    <p className="mt-6 line-clamp-2 text-[15px] leading-[1.55] text-[#8D8D8D] md:text-[17px]">
                      {item.body}
                    </p>
                    <div className="mt-auto space-y-3 text-[14px] leading-none text-[#8D8D8D] md:text-[16px]">
                      <p>{item.source}</p>
                      <time>{item.date}</time>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
