"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { translations } from "@/lib/i18n/translations";

export function ActivePrfPrinciples() {
  const { locale, t } = useI18n();
  const tr = translations.research;

  const imageCards = [
    {
      src: "/research-platelet-illustration.png",
      alt: tr.imageCards.plateletIllustrationAlt[locale],
      label: tr.imageCards.plateletIllustrationLabel[locale],
    },
    {
      src: "/research-platelet-sem.png",
      alt: tr.imageCards.plateletSemAlt[locale],
      label: tr.imageCards.plateletSemLabel[locale],
    },
    {
      src: "/research-leukocyte-sem.png",
      alt: tr.imageCards.leukocyteSemAlt[locale],
      label: tr.imageCards.leukocyteSemLabel[locale],
    },
  ];

  type TableRowKey = keyof typeof tr.tableRows;
  
  const tableRowsData = [
    { key: "volume" as TableRowKey, highlight: undefined },
    { key: "extraction" as TableRowKey, highlight: undefined },
    { key: "anticoagulant" as TableRowKey, highlight: "activePrf" as const },
    { key: "activation" as TableRowKey, highlight: "both" as const },
    { key: "growthFactorRetention" as TableRowKey, highlight: undefined },
    { key: "growthFactorRelease" as TableRowKey, highlight: "both" as const },
    { key: "pain" as TableRowKey, highlight: undefined },
    { key: "effect" as TableRowKey, highlight: "both" as const },
    { key: "fibrin" as TableRowKey, highlight: "activePrf" as const },
    { key: "nitricOxide" as TableRowKey, highlight: "both" as const },
    { key: "cellActivation" as TableRowKey, highlight: "both" as const },
    { key: "fibrinNetwork" as TableRowKey, highlight: "activePrf" as const },
    { key: "exosome" as TableRowKey, highlight: "both" as const },
  ];

  return (
    <section className="w-full py-10 sm:py-14 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 sm:px-6 sm:gap-10 md:gap-16 md:px-20">
        {/* Heading + description */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-10">
          <h2 className="text-[20px] font-bold leading-tight text-black sm:text-[24px] md:text-[30px]">
            {t("research", "principlesTitle")}
          </h2>
          <p className="text-[14px] font-normal leading-[1.6] text-[#3E454B] sm:text-[15px] md:text-[20px] md:leading-[30px]">
            {t("research", "principlesDesc1")}
            <br />
            {t("research", "principlesDesc2")}
          </p>
        </div>

        {/* Comparison pills */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-row items-center gap-2 sm:gap-4 md:gap-6">
            <div className="flex h-[40px] flex-1 items-center justify-center rounded-full bg-[#EBFFEC] px-3 sm:h-[46px] sm:px-6">
              <span className="text-center text-[13px] font-medium text-[#055239] sm:text-[16px] md:text-[20px]">
                {t("research", "comparisonPrp")}
              </span>
            </div>
            <div className="flex h-[40px] shrink-0 items-center justify-center rounded-full bg-[#EBFFEC] px-3 sm:h-[46px] sm:px-6 md:w-[75px]">
              <span className="text-center text-[13px] font-medium text-[#055239] sm:text-[16px] md:text-[20px]">
                {t("research", "comparisonVs")}
              </span>
            </div>
            <div className="flex h-[40px] flex-[2] items-center justify-center rounded-full bg-[#EBFFEC] px-3 sm:h-[46px] sm:px-6">
              <span className="line-clamp-1 text-center text-[12px] font-medium text-[#055239] sm:text-[16px] md:text-[20px]">
                {t("research", "comparisonActive")}
              </span>
            </div>
          </div>

          {/* Image cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-16">
            {imageCards.map((card) => (
              <div
                key={card.label}
                className="flex flex-col items-center gap-3 sm:gap-4"
              >
                <div className="relative aspect-[370/235] w-full overflow-hidden rounded-tl-[40px] rounded-br-[40px] border border-[#055239] bg-[#D9D9D9] sm:rounded-tl-[60px] sm:rounded-br-[60px]">
                  <Image
                    src={card.src || "/placeholder.svg"}
                    alt={card.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-1.5 self-start">
                  <ArrowUp
                    className="h-4 w-4 text-[#055239] sm:h-5 sm:w-5"
                    aria-hidden="true"
                  />
                  <span className="text-[13px] font-normal text-[#055239] sm:text-[14px] md:text-[18px]">
                    {card.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="bg-[#055239] text-white">
                <th className="px-4 py-3 text-[14px] font-semibold md:text-[16px]">
                  {tr.tableHeaders.item[locale]}
                </th>
                <th className="px-4 py-3 text-center text-[14px] font-semibold md:text-[16px]">
                  {tr.tableHeaders.prp[locale]}
                </th>
                <th className="px-4 py-3 text-center text-[14px] font-semibold md:text-[16px]">
                  {tr.tableHeaders.activePrp[locale]}
                </th>
                <th className="px-4 py-3 text-center text-[14px] font-semibold md:text-[16px]">
                  {tr.tableHeaders.activePrf[locale]}
                </th>
              </tr>
            </thead>
            <tbody>
              {tableRowsData.map((row) => {
                const highlightActivePrp =
                  row.highlight === "activePrp" || row.highlight === "both";
                const highlightActivePrf =
                  row.highlight === "activePrf" || row.highlight === "both";
                const rowData = tr.tableRows[row.key];

                return (
                  <tr key={row.key} className="border-b border-border">
                    <td className="px-4 py-3 text-[13px] font-medium text-[#3E454B] md:text-[15px]">
                      {rowData.label[locale]}
                    </td>
                    <td className="whitespace-pre-line px-4 py-3 text-center text-[13px] text-[#3E454B] md:text-[15px]">
                      {rowData.prp[locale]}
                    </td>
                    <td
                      className={`whitespace-pre-line px-4 py-3 text-center text-[13px] text-[#3E454B] md:text-[15px] ${
                        highlightActivePrp ? "bg-[#EBFFEC]" : ""
                      }`}
                    >
                      {rowData.activePrp[locale]}
                    </td>
                    <td
                      className={`whitespace-pre-line px-4 py-3 text-center text-[13px] text-[#3E454B] md:text-[15px] ${
                        highlightActivePrf ? "bg-[#EBFFEC]" : ""
                      }`}
                    >
                      {rowData.activePrf[locale]}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

