"use client";

import { useTheme } from "@/context/ThemeProvider";
import { useBlogTitleHover } from "@/hooks/useBlogTitleHover";
import { BlogPost, blogPosts } from "@/utils/blogs";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const { titleRefs, hoverBgStyles } = useBlogTitleHover([blogPosts.length]);

  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full px-5 sm:px-8 max-w-screen-md grid sm:grid-cols-[75px_1fr] gap-x-6 gap-y-4 py-0 items-start">
        <h2 className="sm:text-left font-mono font-normal mt-2 text-muted-foreground/60 text-xs lowercase tracking-tight before:content-[&quot;/&quot;] my-0 leading-[1.5] inline align-middle">
          Latest Blogs
        </h2>
        <div className="space-y-4">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              titleRef={(el) => { titleRefs.current[post.id] = el; }}
              hoverStyle={hoverBgStyles[post.id]}
              isLast={index === blogPosts.length - 1}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

interface BlogCardProps {
  post: BlogPost;
  titleRef: (el: HTMLSpanElement | null) => void;
  hoverStyle: { width: string } | undefined;
  isLast: boolean;
}

export const BlogCard = ({ post, titleRef, hoverStyle, isLast }: BlogCardProps) => {
  const { theme } = useTheme();

  return (
    <div className={`border-b ${theme === "dark" ? "border-b-slate-800" : "border-b-slate-300"} py-7 ${isLast ? 'border-b-0' : ''}`}>
      <div className="flex flex-row items-start">
        <div className="flex flex-1">
          <div className="flex items-center gap-6">
            <div className="relative scale-150">
              <Image
                alt={post.imageAlt}
                src={post.imageSrc}
                width={56}
                height={56}
                className="object-cover scale-150"
                sizes="56px"
                priority
              />
              <div className="absolute inset-0 w-[56px] h-[56px] flex items-center justify-center"></div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center text-xs">
                <span className="mr-2 font-bold text-sky-500">—</span>
                <div className="flex text-gray-400">
                  <span>{post.date}</span>
                  <span className="mx-2">·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h1 className="text-lg font-bold relative">
                <Link
                  target="_blank"
                  href={post.slug}
                  className={`group inline-block relative ${theme === "dark" ? "text-white" : "text-gray-600"} hover:text-sky-500 duration-150 ease-out`}
                >
                  <span
                    className="relative z-10"
                    ref={titleRef}
                  >
                    {post.title}
                  </span>
                  <span
                    className="absolute inset-0 bg-sky-500 opacity-0 -z-10 transform -rotate-2 translate-y-1/4 group-hover:opacity-30 duration-150 ease-in-out scale-x-0 group-hover:scale-x-100 origin-center"
                    style={hoverStyle || {}}
                  ></span>
                </Link>
              </h1>
              <div className="flex items-center">
                <p className="text-gray-400 text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center ml-4">
                  <Link
                    target="_blank"
                    href={post.slug}
                    className="text-blue-400 hover:text-sky-500 duration-150 group"
                  >
                    <ArrowRight
                      size={20}
                      className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
