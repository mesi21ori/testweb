import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_Ethiopic } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const notoSansEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ethiopic",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ethiopian Orthodox Tewahedo Church - Sunday School Unity",
  description: "Official portal for Ethiopian Orthodox Sunday Schools across dioceses, subcities, and churches",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansEthiopic.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
