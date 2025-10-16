"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import Link from "next/link";

export function WorkTimeline() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-gray-300 text-2xl md:text-3xl font-semibold mb-1">
            Software Engineer - Techriigour IT Solutions Pvt Ltd
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Working on multiple project include web and mobile application, that
            includes building Admin Dashboard in Next.js, building mobile
            application in react native
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.velocitt.customer&pcampaignid=web_share",
                  "_blank"
                )
              }
              src="/velocitt_app.png"
              alt="startup template"
              width={500}
              height={500}
              className="cursor-pointer h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/vretail.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2025",
      content: (
        <div>
          <p className="text-gray-300 text-2xl md:text-3xl font-semibold mb-1">
            Published NPM Packagr for Rate limiting - Open source Contribution
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            A simple and efficient rate limiter using the token bucket algorithm
            for Express and other Node.js servers.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              onClick={() =>
                window.open(
                  "https://github.com/EasyBro-Tech/easy-rate-limiter",
                  "_blank"
                )
              }
              src="/el_1.png"
              alt="Rate limiter"
              width={500}
              height={500}
              className="cursor-pointer h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/el_2.png"
              alt="Rate limiter"
              width={500}
              height={500}
              className="cursor-pointer h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-gray-300 text-2xl md:text-3xl font-semibold mb-1">
            Software Engineer Intern- Techriigour IT Solutions Pvt Ltd
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Worked as a frontend engineer to develop and maintain their official
            website and few Landing pages
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              onClick={() => window.open("https://techriigour.com", "_blank")}
              src="/techriigour.png"
              alt="hero template"
              width={500}
              height={500}
              className="cursor-pointer h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              onClick={() => window.open("https://velocitt.in/", "_blank")}
              src="/velocitt.png"
              alt="feature template"
              width={500}
              height={500}
              className="cursor-pointer h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="text-gray-300 text-2xl md:text-3xl font-semibold mb-1">
            Software Engineer - FreeLance
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Worked as a software engineer to develop and maintain application
            called Property Bazar+ (Launching soon...)
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/pb_1.png"
              alt="hero template"
              width={500}
              height={500}
              className="cursor-pointer h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/pb_2.png"
              alt="feature template"
              width={500}
              height={500}
              className="cursor-pointer h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-gray-300 text-2xl md:text-3xl font-semibold mb-1">
            Frontend Engineer - Pratibha College Of Educations
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Worked as a frontend engineer to develop and maintain their official
            website
          </p>
          <Link
            href="https://pcoedu.org.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-2 gap-4 cursor-pointer"
          >
            <Image
              src="/pcoedu_1.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/pcoedu_2.png"
              alt="Pcoedu"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </Link>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
