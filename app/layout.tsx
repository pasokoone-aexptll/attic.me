import type { Metadata } from "next";
import "./globals.css";
import { Shippori_Mincho } from "next/font/google";
import LenisProvider from '@/components/landing/LenisProvider'


const shipporiMincho = Shippori_Mincho({
  weight: ["400", "700"],
  subsets: [],
  variable: "--font-shippori-mincho",
});


export const metadata: Metadata = {
  title: "attic.me — まだ見たくない過去のための日記。",
  description: "未来の自分へ向けて書く、非公開の日記アプリ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${shipporiMincho.variable} font-shippori`}
    >
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
