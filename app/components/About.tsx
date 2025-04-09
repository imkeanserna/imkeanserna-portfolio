"use client";

import Image from "next/image";
import { GithubChart } from "@/components/ui/GithubChart";
import { aboutContent } from "@/utils/about";
import { ExpertiseTag } from "@/components/Tags";
import React from "react";

export default function About() {
  const { intro, me, experience, tags, passion, hobbies } = aboutContent;
  const InstagramIcon = hobbies.instagram;
  const BasketballIcon = hobbies.basketball;

  return (
    <div className="flex flex-col gap-8">
      <section className="mx-auto w-full p-5 sm:px-8 max-w-screen-md grid sm:grid-cols-[75px_1fr] gap-x-6 gap-y-4 py-0 -mt-4">
        <div></div>
        <div className="flex flex-col gap-6">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden ring-6 ring-ring">
            <Image
              alt={me.name}
              src={me.avatar}
              width={100}
              height={100}
              className="object-cover scale-110"
              style={{ color: 'transparent' }}
              sizes="100px"
            />
          </div>
          <h1 className="font-bold text-3xl tracking-wide">{me.name}</h1>
        </div>
      </section>
      <section className="mx-auto w-full p-5 sm:px-8 max-w-screen-md grid sm:grid-cols-[75px_1fr] gap-x-6 gap-y-4 py-0 -mt-4">
        <h2 className="sm:text-right font-mono font-normal mt-2 text-muted-foreground/60 text-xs lowercase tracking-tight before:content-[&quot;/&quot;] my-0 leading-[1.5] inline align-middle">
          About
        </h2>
        <div className=" prose max-w-screen-md">
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
