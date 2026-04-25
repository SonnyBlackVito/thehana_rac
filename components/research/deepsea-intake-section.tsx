import Image from "next/image"

export function DeepSeaIntakeSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24" aria-labelledby="deepsea-intake-caption">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center gap-6">
          {/* Illustration */}
          <div className="w-full max-w-[1300px] overflow-hidden rounded-[10px]">
            <Image
              src="/research-deepsea-intake.png"
              alt="세계 최장 17.5km, 세계 최고 수심 1,032m 해양심층수 취수공사 조감도"
              width={1300}
              height={866}
              className="h-auto w-full"
            />
          </div>

          {/* Caption */}
          <p
            id="deepsea-intake-caption"
            className="w-full max-w-[1280px] text-center text-[16px] font-normal leading-[1.5] text-black md:text-[20px] md:leading-[30px]"
          >
            세계최장, 17.5km, 세계최고, 수심 1,032m 해양심층수 취수공사
          </p>
        </div>
      </div>
    </section>
  )
}
