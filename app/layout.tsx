import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

const title = "How-to UFMA"
const description =
  "Comunidade open-source para aprendizado e conteúdos em português"
export const metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL,
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "Next.js",
    "JavaScript",
    "TypeScript",
    "React",
    "TailwindCSS",
    "contentlayer",
    "App Router",
  ],
  authors: [
    {
      name: "Gildemar",
      url: "https://github.com/gildemardev",
    },
    {
      name: "Luiza Karine",
      url: "https://github.com/stevenspads",
    },
  ],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title,
    description,
    siteName: title,
  },
  icons: {
    icon: "/favicon.ico",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto max-w-2xl px-4 py-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
