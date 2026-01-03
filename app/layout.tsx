import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./components/Providers"

export const metadata: Metadata = {
  title: "Kaufbuch",
  description: "Gestiona tus registros, deseos, regalos y deudas",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
