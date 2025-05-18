import type React from "react"
import type { Metadata } from "next"
import { Sora, DM_Sans } from "next/font/google"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "GFE Marketing - Impulsa la Transformación Digital de tu Negocio - Agencia de Marketing Digital",
  description:
    "En GFE Marketing somos una empresa comprometida con ofrecer soluciones tecnológicas innovadoras y personalizadas que impulsan el éxito de nuestros clientes. Nos especializamos en marketing digital, redes sociales, inteligencia artificial y desarrollo web.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${sora.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
