import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeProvider";
import ThemeScript from "@/components/ThemeScript";
import NavigationBar from "@/components/NavigationBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.imkeanserna.dev'),
  title: {
    default: "Kean Serna • Fullstack Developer",
    template: "%s | Kean Serna",
  },
  description: "Professional portfolio of Kean Serna, a web developer specializing in React, Next.js, and modern frontend technologies.",
  keywords: [
    "web developer",
    "frontend developer",
    "React developer",
    "Next.js",
    "Kean Serna",
    "Kean De La Serna",
    "Kean Dela Serna",
    "portfolio",
    "JavaScript",
    "TypeScript",
    "Monorepo",
    "Microservice",
    "Cloudflare",
    "AWS",
    "AI SDK",
    "Open Source",
    "Fullstack Developer",
    "Shadcn",
    "Python",
    "Hono.js",
    "Docker",
    "Kubernetes",
    "Redis",
    "Apache Kafka",
    "Grafana",
    "Helm",
    "Prisma",
    "Drizzle",
    "HuggingFace"
  ],
  authors: [{ name: "Kean Serna", url: "https://www.imkeanserna.dev" }],
  creator: "Kean Serna",
  publisher: "Kean Serna",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.imkeanserna.dev",
    siteName: "Kean Serna Portfolio",
    title: "Kean Serna • Fullstack Developer",
    description: "Professional portfolio showcasing web development projects, skills, and work experience.",
    images: [
      {
        url: "https://www.imkeanserna.dev/favicon/social-media-sharing.png",
        width: 1200,
        height: 630,
        alt: "Kean Serna - Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kean Serna",
    description: "Professional portfolio showcasing web development projects, skills, and work experience.",
    creator: "https://x.com/imkeanserna",
    images: ["https://www.imkeanserna.dev/favicon/icon1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/icon1.png' }
    ],
    apple: [
      { url: '/favicon/apple-icon.png' }
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon/icon0.svg',
        type: 'image/svg+xml'
      }
    ]
  },
  manifest: '/favicon/manifest.json',
  alternates: {
    canonical: "https://www.imkeanserna.dev",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kean Serna",
              "url": "https://www.imkeanserna.dev",
              "image": "https://www.imkeanserna.dev/favicon/icon1.png",
              "jobTitle": "Fullstack Developer",
              "sameAs": [
                "https://www.linkedin.com/in/kean-serna-b7a182260/",
                "https://github.com/imkeanserna",
                "https://x.com/imkeanserna"
              ],
              "skills": "React, Next.js, JavaScript, TypeScript, CSS, Tailwind, Python, Hono.js, Monorepo, Microservice, Cloudflare, AWS, AI SDK, Docker, Kubernetes, Redis, Apache Kafka, Helm, Grafana, Prisma, Drizzle, HuggingFace" // Update with your actual skills
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Kean Serna Portfolio",
              "url": "https://www.imkeanserna.dev",
              "image": "https://www.imkeanserna.dev/favicon/icon1.png",
              "description": "Professional portfolio of Kean Serna, a web developer specializing in React, Next.js, and modern frontend technologies.",
              "author": {
                "@type": "Person",
                "name": "Kean Serna"
              }
            }),
          }}
        />
      </head>
      <body
        className={`antialiased ${geistSans.variable} ${geistMono.variable}
        relative flex h-full flex-col pt-[4rem] pb-[8rem] sm:pt-[6rem] sm:pb-[10rem]
      `}
      >
        <ThemeProvider>
          {children}
          <NavigationBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
