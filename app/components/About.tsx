"use client";

import Image from "next/image";
import { GithubChart } from "./ui/GithubChart";

export default function About() {
  return (
    <main className="flex grow flex-col justify-center gap-8">
      <section className="mx-auto w-full p-5 sm:px-8 max-w-screen-md grid sm:grid-cols-[75px_1fr] gap-x-6 gap-y-4 py-0 -mt-4">
        <div></div>
        <div className="flex flex-col gap-6">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden ring-6 ring-ring">
            <Image
              alt="Kean Serna"
              src="https://media.licdn.com/dms/image/v2/D5603AQGbZDgzSCOz4A/profile-displayphoto-shrink_800_800/B56ZQqUDG3GQAk-/0/1735876686919?e=1749686400&v=beta&t=NLKAYSafJmg06xs3m-R6c9hEAcjlmI4-MLtekWYhBs4"
              width={100}
              height={100}
              className="object-cover scale-110"
              style={{ color: 'transparent' }}
              sizes="100px"
            />
          </div>
          <h1 className="font-bold text-3xl tracking-tight">Kean Serna</h1>
        </div>
      </section>
      <section className="mx-auto w-full p-5 sm:px-8 max-w-screen-md grid sm:grid-cols-[75px_1fr] gap-x-6 gap-y-4 py-0 -mt-4">
        <h2 className="sm:text-right font-mono font-normal mt-2 text-muted-foreground/60 text-xs lowercase tracking-tight before:content-[&quot;/&quot;] my-0 leading-[1.5] inline align-middle">
          About
        </h2>
        <div className=" prose max-w-screen-md">
          <div className=" prose-p:my-0 flex max-w-screen-xs flex-col gap-2.5 text-muted-foreground">
            <p>Hey, I'm a fullstack developer based in Philippines.</p>
            <p>I have been building software in {" "}
              <span className="rounded border border-foreground/5 px-1.5 py-[3px] align-baseline text-muted-foreground text-sm bg-lime-500/10 dark:bg-lime-900/15">Games</span>{" "}
              <span className="rounded border border-foreground/5 px-1.5 py-[3px] align-baseline text-muted-foreground text-sm bg-orange-300/20 dark:bg-orange-800/10">Saas</span>{" "}
              <span className="rounded border border-foreground/5 px-1.5 py-[3px] align-baseline text-muted-foreground text-sm bg-indigo-300/15 dark:bg-indigo-700/5">AI</span>{" "}my passion for software development has grown since i started coding in 2021.
            </p>
            <p>When I'm not shipping products, I like to attend {" "}
              <span className="rounded border border-indigo-500/10 px-1.5 py-[3px] align-baseline text-muted-foreground text-sm bg-background shadow-animate-blue">
                Business
              </span>{" "}
              <span className="rounded border border-indigo-500/10 px-1.5 py-[3px] align-baseline text-muted-foreground text-sm bg-background shadow-animate-purple">
                Tech
              </span>{" "}
              <span className="rounded border border-indigo-500/10 px-1.5 py-[3px] align-baseline text-muted-foreground text-sm bg-background shadow-animate-pink">
                Startup
              </span>{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256" className="-translate-y-px inline align-middle">
                <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.39V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.36V200Z" opacity="0.2"></path>
                <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM40,64H216v56.4a152.51,152.51,0,0,1-80,22.4,152.51,152.51,0,0,1-80-22.4V72A8,8,0,0,0,40,64Zm176,136H40a.27.27,0,0,1-.08-.16V140.77A168.29,168.29,0,0,0,128,160a168.29,168.29,0,0,0,88.08-19.23V199.84a.27.27,0,0,1-.08.16Z"></path>
              </svg> events and shooting hoops {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256" className="-translate-y-px inline align-middle"><path d="M60.12,60.09A95.74,95.74,0,0,1,127.83,32h0A95.94,95.94,0,0,1,32,127.75,95.64,95.64,0,0,1,60.12,60.09ZM32,127.92v-.17h0Zm124.28,28.26a95.54,95.54,0,0,0-28.11,67.65A96,96,0,0,0,224,128.08h0A95.79,95.79,0,0,0,156.28,156.18ZM128.17,224v-.17h0Z" opacity="0.2"></path><path d="M201.57,54.46a104,104,0,1,0,0,147.08A103.4,103.4,0,0,0,201.57,54.46ZM65.75,65.77a87.63,87.63,0,0,1,53.66-25.31A87.31,87.31,0,0,1,94,94.06a87.42,87.42,0,0,1-53.62,25.35A87.58,87.58,0,0,1,65.75,65.77ZM40.33,135.48a103.29,103.29,0,0,0,65-30.11,103.24,103.24,0,0,0,30.13-65,87.78,87.78,0,0,1,80.18,80.14,104,104,0,0,0-95.16,95.1,87.78,87.78,0,0,1-80.18-80.14Zm149.92,54.75a87.69,87.69,0,0,1-53.66,25.31,88,88,0,0,1,79-78.95A87.58,87.58,0,0,1,190.25,190.23Z"></path>
              </svg>{" "}
              on the court.
            </p>
          </div>
          <GithubChart />
        </div>
      </section>
    </main>
  );
}
