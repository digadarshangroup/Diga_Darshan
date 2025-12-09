import { Suspense } from "react"
import "@fontsource/geist-sans"
import "@fontsource/geist-mono"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <LanguageProvider>
          <Suspense>
            {children}
          </Suspense>
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}