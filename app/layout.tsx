import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tomyyw.com'),
  title: 'Tom Wang｜专业能力与 AI 实践门户',
  description: '汇集 Tom Wang 在估值、审计、企业 AI 赋能与金融 Agent 产品方向的公开实践：从专业方法、企业赋能到金融 Agent 产品。',
  openGraph: {
    title: 'Tom Wang｜专业能力与 AI 实践门户',
    description: '专业判断 × AI 方法 × 可运行系统',
    url: 'https://tomyyw.com',
    siteName: 'Tom Wang · Digital Portfolio',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: '/og.png', width: 1734, height: 907, alt: 'Tom Wang — Expertise × AI × Building' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tom Wang｜专业能力与 AI 实践门户',
    description: '专业判断 × AI 方法 × 可运行系统',
    images: ['/og.png'],
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
