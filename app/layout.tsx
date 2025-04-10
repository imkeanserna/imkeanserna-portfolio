import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Kean Serna",
  description: "Generated by create next app",
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
  manifest: '/favicon/manifest.json'
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
