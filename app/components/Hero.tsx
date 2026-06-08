import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

function ProfileArcs() {
  const heights = [28, 40, 52];

  return (
    <div className="flex items-center">
      {heights.map((h, i) => {
        const w = 6 + i * 2;
        return (
          <svg
            key={i}
            width={w}
            height={h}
            viewBox={`0 0 ${w} ${h}`}
            className="-mr-px shrink-0"
            aria-hidden
          >
            <path
              d={`M0 0 L0 ${h} A${w} ${h / 2} 0 0 0 0 0 Z`}
              fill="#1A1A1A"
            />
          </svg>
        );
      })}
    </div>
  );
}

function SocialIcon({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="text-[#999999] transition-opacity hover:opacity-70"
    >
      {children}
    </a>
  );
}

export default function Hero() {
  return (
    <section className="relative flex-1">
      <div className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-2 sm:px-8 md:px-10 lg:px-16 lg:pb-28 lg:pt-10">
        <ScrollReveal
          eager
          className="flex flex-col lg:grid lg:min-h-[calc(100vh-108px-4rem)] lg:grid-cols-[280px_1fr] lg:items-start lg:gap-24 xl:gap-32"
        >
          {/* Profile column */}
          <div className="flex flex-col lg:min-h-[560px] lg:justify-between lg:pt-36 xl:pt-44">
            <div className="flex items-center gap-3">
              <ProfileArcs />
              <div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full sm:h-[76px] sm:w-[76px]">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Meridyen Film Yapım"
                  width={76}
                  height={76}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="min-w-0 pl-1">
                <p className="text-[15px] font-bold leading-snug text-[#111111]">
                  Meridyen Film Yapım
                </p>
                <p className="mt-1 text-[13px] leading-snug text-[#777777]">
                  Sinema ve Dijital Prodüksiyon Şirketi
                </p>
                <div className="mt-3 flex items-center gap-3.5">
                  <SocialIcon label="X (Twitter)">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon label="Instagram">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="1"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>
                  </SocialIcon>
                  <SocialIcon label="Dribbble">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12c2-4 8-6 12-6M6 16c4-2 10-2 14 0M9 20c3-3 9-5 13-5" />
                    </svg>
                  </SocialIcon>
                </div>
              </div>
            </div>

            {/* Status — mobile, directly under profile */}
            <div className="mt-6 flex items-center gap-2.5 lg:hidden">
              <span className="h-[8px] w-[8px] shrink-0 rounded-full bg-[#8EFF1A]" />
              <span className="text-[14px] font-medium text-[#111111]">
                Uluslararası Standartlarda Üretim
              </span>
            </div>

            <p className="mt-8 hidden text-[12px] tracking-wide text-[#333333] lg:mt-0 lg:block">
              (2010 – GÜNÜMÜZ)
            </p>
          </div>

          {/* Main content */}
          <div className="mt-8 max-w-[960px] lg:mt-0 lg:pt-24">
            <div className="mb-6 hidden items-center gap-2.5 lg:mb-12 lg:flex">
              <span className="h-[8px] w-[8px] shrink-0 rounded-full bg-[#8EFF1A]" />
              <span className="text-[14px] text-[#666666]">
                Uluslararası Standartlarda Üretim
              </span>
            </div>

            <h1 className="text-[2.35rem] font-normal leading-[1.12] tracking-[-0.04em] text-[#242424] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[clamp(2.5rem,4.8vw,4.8rem)] lg:font-semibold lg:leading-[1.05] lg:text-[#222222]">
              <span className="block">
                Biz{" "}
                <span className="inline-flex translate-y-[-0.08em] items-center justify-center rounded-full bg-white px-[0.55em] py-[0.18em] text-[0.55em] font-medium text-[#222222] shadow-[0_4px_30px_rgba(0,0,0,0.06)] sm:px-[0.6em] sm:py-[0.2em] sm:text-[0.6em] lg:text-[0.65em]">
                  Meridyen Film
                </span>
              </span>
              <span className="mt-1 block sm:mt-2 lg:whitespace-nowrap">
                <span className="inline-flex translate-y-[-0.08em] items-center justify-center rounded-full border border-[#d1d1d1] bg-white px-[0.55em] py-[0.18em] text-[0.55em] font-medium text-[#222222] sm:px-[0.6em] sm:py-[0.2em] sm:text-[0.6em] lg:border-[#E5E5E5] lg:text-[0.65em]">
                  İstanbul
                </span>{" "}
                merkezli{" "}
                <span className="inline-flex translate-y-[-0.08em] items-center justify-center rounded-full bg-[#282828] px-[0.55em] py-[0.18em] text-[0.55em] font-medium text-white sm:px-[0.6em] sm:py-[0.2em] sm:text-[0.6em] lg:bg-[#222222] lg:text-[0.65em]">
                  Yapım Şirketi
                </span>{" "}
                olarak
              </span>
              <span className="mt-1 block sm:mt-2">
                hikayelerinizi uluslararası
              </span>
              <span className="block">standartlarda üretiyoruz.</span>
            </h1>

            <p className="mt-6 text-[12px] font-medium tracking-[0.02em] text-[#111111] lg:hidden">
              (2010 – GÜNÜMÜZ)
            </p>

            <p className="mt-6 max-w-[640px] text-[16px] leading-[1.55] text-[#555555] sm:text-[17px] sm:leading-[1.6] sm:text-[#666666] lg:mt-10">
              Meridyen Film Yapım; köklü sektör deneyimiyle uzun metraj sinema
              filmleri, televizyon dizileri, uluslararası ortak yapımlar, reklam
              filmleri ve yeni nesil dikey dizi formatları geliştiren İstanbul
              merkezli bağımsız bir yapım şirketidir.
            </p>

            <Link
              href="#contact"
              className="group mt-8 flex w-full items-center justify-between rounded-full bg-[#8EFF1A] py-3 pl-7 pr-3 text-[17px] font-medium text-[#111111] shadow-[0_0_40px_rgba(142,255,26,0.35)] transition-shadow hover:shadow-[0_0_50px_rgba(142,255,26,0.5)] sm:pl-8 sm:text-[18px] lg:mt-12 lg:inline-flex lg:w-auto lg:justify-start lg:gap-6 lg:py-3.5 lg:pl-8"
            >
              Proje Başlat
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm sm:h-11 sm:w-11 lg:h-10 lg:w-10">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4 12L12 4M12 4H6M12 4V10"
                    stroke="#111111"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
