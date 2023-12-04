import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-24 flex justify-center">
      <div className="flex flex-col items-center justify-center space-y-6 pt-16">
        <Image
          src={"/LOGO2-HOWTOUFMA.svg"}
          alt="Logotipo How to UFMA"
          height={75}
          width={75}
        />
        <nav className="space-x-6 text-center text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">Sobre</Link>
        </nav>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; <Link href="/">How-to UFMA</Link>.{" "}
            <a
              href="https://github.com/How-to-UFMA/how-to-ufma/tree/master"
              target="_blank"
            >
              Visite nosso repositório!
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
