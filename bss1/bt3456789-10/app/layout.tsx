import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// Bài tập 9
const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Bài tập 5",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        {/* Bài tập 6 */}
        <link rel="shortcut icon" href="https://learn.rikkeiacademy.com/favicon.ico.png" type="image/x-icon" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
