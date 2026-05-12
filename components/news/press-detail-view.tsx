"use client"

import Image from "next/image"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { useBlogBySlug } from "@/hooks/use-blogs"

function ArticleParagraph({ children }: { children: string }) {
  return (
    <p className="whitespace-pre-line text-[16px] font-normal leading-[1.8] text-[#3E454B] md:text-[20px] md:leading-[1.65]">
      {children}
    </p>
  )
}

export function PressDetailView({ slug }: { slug: string }) {
  const { data, comments, loading, error } = useBlogBySlug(slug)

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <SiteHeader />
        <main className="mx-auto w-full max-w-[1280px] flex-1 px-5 py-16 md:px-20">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="mt-8 aspect-[16/9] w-full" />
          <div className="mt-10 space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-10/12" />
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <SiteHeader />
        <main className="mx-auto w-full max-w-[900px] flex-1 px-5 py-16">
          <Alert variant="destructive">
            <AlertTitle>API error</AlertTitle>
            <AlertDescription>{error ?? "Blog not found"}</AlertDescription>
          </Alert>
          <Link href="/press" className="mt-6 inline-flex text-sm text-[#055239] hover:underline">
            Back to press
          </Link>
        </main>
        <SiteFooter />
      </div>
    )
  }

  const cover = data.cover_image || data.images?.[0]
  const paragraphs = data.content
    .split(/\n{2,}/)
    .map((line) => line.trim())
    .filter(Boolean)

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-[#EEEEEE]">
          <div className="mx-auto flex min-h-[260px] w-full max-w-[1440px] flex-col justify-center px-5 py-12 md:min-h-[324px] md:px-20">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[1120px]">
                <h1 className="text-[28px] font-bold leading-[1.14] tracking-[-0.02em] text-[#3E454B] md:text-[44px]">
                  {data.title}
                </h1>

                <div className="mt-8 flex flex-col items-start gap-4 text-[16px] leading-none text-[#6D6D6D] md:text-[18px]">
                  <span className="border-b-2 border-[#055239] pb-3">
                    {data.tags?.find((tag) => tag !== "press" && tag !== "thehana-rac") ?? "THE HANA R.A.C"}
                  </span>
                  <time>{new Date(data.published_at ?? data.created_at).toLocaleDateString("ko-KR")}</time>
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
            {cover ? (
              <Image
                src={cover}
                alt={data.title}
                width={1280}
                height={720}
                className="h-auto w-full rounded-[8px] object-cover"
                priority
              />
            ) : null}

            <div className="mx-auto flex max-w-[960px] flex-col gap-7">
              {paragraphs.map((paragraph, index) => (
                <ArticleParagraph key={index}>{paragraph}</ArticleParagraph>
              ))}
            </div>
          </div>
        </article>

        <section className="mx-auto w-full max-w-[960px] px-5 pb-20 md:pb-24">
          <div className="border-t border-[#CCCCCC] pt-10">
            <h2 className="text-[24px] font-bold text-[#3E454B]">Comments</h2>
            <div className="mt-6 space-y-4">
              {comments.length === 0 ? (
                <p className="text-sm text-[#8D8D8D]">No comments yet.</p>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className="rounded-[8px] border border-[#E5E5E5] p-4">
                    <div className="mb-3 flex items-center gap-3">
                      {comment.user?.avatar_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={comment.user.avatar_url}
                          alt=""
                          className="h-9 w-9 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E9EEF2] text-sm font-semibold text-[#3E454B]">
                          {(comment.user?.full_name || comment.user?.name || comment.user?.email || "?").slice(0, 1).toUpperCase()}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-[#3E454B]">
                          {comment.user?.full_name || comment.user?.name || comment.user?.email || "Unknown user"}
                        </p>
                        {comment.user?.email ? (
                          <p className="truncate text-xs text-[#8D8D8D]">{comment.user.email}</p>
                        ) : null}
                      </div>
                    </div>
                    <p className="whitespace-pre-line text-[15px] leading-[1.65] text-[#3E454B]">
                      {comment.content}
                    </p>
                    <time className="mt-3 block text-xs text-[#8D8D8D]">
                      {new Date(comment.created_at).toLocaleString("ko-KR")}
                    </time>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
