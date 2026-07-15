import type { Metadata } from "next";
import "./globals.css";

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
    >
      <body>{children}</body>
    </html>
  );
}
