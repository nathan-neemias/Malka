import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MalkaArquitetura",
  description: "Transformando sonhos em projetos únicos e personalizados",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/Favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/Favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/images/Favicon/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/Favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/Favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/Favicon/favicon-16x16.png" />
        <link rel="manifest" href="/images/Favicon/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
