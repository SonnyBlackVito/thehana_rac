import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AboutIntro } from "@/components/about/about-intro"
import { VisionMission } from "@/components/about/vision-mission"

export const metadata = {
  title: "센터소개 | THE HANA R.A.C",
  description:
    "더하나 리버스 에이징 센터(THE HANA R.A.C)는 과학을 통한 시간의 재설계를 실현하며 역노화 솔루션의 표준으로 신뢰받는 글로벌 재생 과학 전문 기업입니다.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="px-6 pt-12 lg:px-10 lg:pt-16">
          <div className="mx-auto max-w-[1400px]">
            <h1 className="text-[26px] font-bold text-foreground md:text-[30px]">
              더하나 리버스 에이징 센터 소개
            </h1>
            <div aria-hidden="true" className="mt-4 h-[2px] w-12 bg-primary" />
          </div>
        </div>

        <AboutIntro />
        <VisionMission />
      </main>
      <SiteFooter />
    </div>
  )
}
