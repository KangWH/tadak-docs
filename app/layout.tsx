import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "타닥",
  description: "macOS와 iOS를 위한 한글 입력기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex flex-col flex-1 items-stretch justify-center bg-white font-sans dark:bg-black">
          <Header />
          <main className="flex-1">
            <article className="max-w-240 mx-auto leading-7 mt-8 px-4 pb-20">
              {children}
            </article>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
