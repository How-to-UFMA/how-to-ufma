"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { ThemeSwitcher } from "./theme-switcher"

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen)

  return (
    <nav className="mb-12 ">
      <div className="mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between">
            <div className="flex shrink-0 items-center">
              <Link href="/" className="z-10 text-3xl font-black">
                How-to UFMA
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <div className="z-10 space-x-6 text-sm font-medium">
                <Link href="/">Home</Link>
                <Link href="/about">Sobre</Link>
              </div>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
