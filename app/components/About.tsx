"use client";

import Image from "next/image";
import { GithubChart } from "@/components/ui/GithubChart";
import { aboutContent } from "@/utils/about";
import { ExpertiseTag } from "@/components/Tags";
import React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeProvider";

export default function About() {
  const { intro, me, experience, tags, passion, hobbies } = aboutContent;
  const InstagramIcon = hobbies.instagram;
  const BasketballIcon = hobbies.basketball;
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col gap-8">
      <section className="mx-auto w-full p-5 sm:px-8 max-w-screen-md grid sm:grid-cols-[75px_1fr] gap-x-6 gap-y-4 py-0 -mt-4">
        <div></div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="relative">
              {/* Combined bubble and stick with slide-up then swing animation */}
              <div className="absolute -top-8 -left-4 sm:-left-6 animate-slide-then-swing">
                <div className="bg-sky-500 text-white py-1 px-[0.56rem] rounded-lg font-medium text-xs relative -rotate-6 shadow-md">
                  Let&apos;s connect!
                  {/* Stick as part of the bubble */}
                  <div className="absolute top-5 left-8 w-1 h-12 bg-sky-500 shadow-md"></div>
                </div>
              </div>
              {/* Profile image */}
              <div
                onClick={() => {
                  router.push(me.linkedin);
                }}
                className={`w-[100px] h-[100px] cursor-pointer rounded-full overflow-hidden relative group ${isDark
                  ? "ring-6 ring-gray-300/20"
                  : "ring-6 ring-ring"
                  }`}
              >
                <Image
                  alt={me.name}
                  src={me.avatar}
                  width={100}
                  height={100}
                  className="object-cover scale-110"
                  style={{ color: 'transparent' }}
                  sizes="100px"
                />
                {/* LinkedIn indicator that slides from right to center bottom on hover */}
                <div
                  className="absolute bottom-[2px] left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB" /><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF" /></g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <h1 className="font-bold text-3xl tracking-wide">{me.name}</h1>
        </div>
      </section>
      <section className="mx-auto w-full p-5 sm:px-8 max-w-screen-md grid sm:grid-cols-[75px_1fr] gap-x-6 gap-y-4 py-0 -mt-4">
        <h2 className="sm:text-left font-mono hidden sm:inline font-normal mt-2 text-muted-foreground/60 text-xs lowercase tracking-tight before:content-[&quot;/&quot;] my-0 leading-[1.5] align-middle">
          About
        </h2>
        <div className="prose max-w-screen-md overflow-x-hidden">
          <div className=" prose-p:my-0 flex max-w-screen-xs flex-col gap-2.5 text-muted-foreground">
            <p>{intro}</p>
            <p>
              {experience}{" "}
              {tags.expertise.map((tag, index) => (
                <React.Fragment key={index}>
                  {index > 0 && " "}
                  <ExpertiseTag className={tag.bgClass}>{tag.name}</ExpertiseTag>
                </React.Fragment>
              ))}{" "}
              {passion}
            </p>
            <p>
              {hobbies.intro}{" "}
              <InstagramIcon />{" "}
              {hobbies.middle}{" "}
              <BasketballIcon />{" "}
              {hobbies.closing}
            </p>
          </div>
          <GithubChart />
        </div>
      </section>
    </div>
  );
}
