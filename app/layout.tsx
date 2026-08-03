import type { Metadata } from "next";
import "./globals.css";
import { Inter, Noto_Sans_JP, Shippori_Mincho, IBM_Plex_Mono } from "next/font/google";
import LenisProvider from '@/components/landing/LenisProvider'

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "700"],
  subsets: [],
  variable: "--font-shippori-mincho",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});


export const metadata: Metadata = {
  title: "attic.me",
  description: "終日・まだ来ていない誰に宛てた記録",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${shipporiMincho.variable} ${inter.variable} ${notoSansJp.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
