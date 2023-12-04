"use client"

import { useState } from "react"
import Link from "next/link"

import { ThemeSwitcher } from "./theme-switcher"
import Image from "next/image"

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
                <Image
                  alt="Logotipo How to UFMA"
                  src={"/HEADERLOGO-HOWTOUFMA.svg"}
                  height={420}
                  width={180}
                ></Image>
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
