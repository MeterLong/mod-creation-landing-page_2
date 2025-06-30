import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider" // Assuming you might want dark/light mode later
import { Toaster as SonnerToaster } from "@/components/ui/sonner" // For new toast notifications
import { Toaster as OldToaster } from "@/components/ui/toaster" // Existing toaster

export const metadata: Metadata = {
  title: "Tripo AI For Mod",
  description: "Tripo AI lets you generate MOD assets in seconds. Free to try. No modeling skills needed.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Minecraft often has a dark tool aesthetic
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SonnerToaster />
          <OldToaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
