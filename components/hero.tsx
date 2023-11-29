import Link from "next/link"
import { Button } from "./ui/button"
import { Github } from "lucide-react"

export function Hero() {
  return (
    <div className="bg-background">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="elipse1 relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl pb-16">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full border bg-accent px-3 py-1 text-sm leading-6">
              Saiba mais sobre a origem do projeto!{" "}
              <Link
                href="/about"
                className="bg-gradient-to-r from-purple-400 to-orange-600 bg-clip-text text-sm font-semibold leading-6 text-transparent"
              >
                <span className="absolute inset-0" aria-hidden="true"></span>
                Ver mais <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              O verdadeiro DIY feito por alunos, para alunos.
            </h1>
            <p className="mt-6 text-lg leading-8 text-accent-foreground">
              Blog com conteúdos em diversas linguagens de programação baseado
              no{" "}
              <a
                href="https://github.com/codecrafters-io/build-your-own-x#build-your-own-command-line-tool"
                target="_blank"
                className="hover:underline"
              >
                Build your own X
              </a>
              .
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild>
                <a href="#" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Acessar repositório
                </a>
              </Button>
              <a href="#">
                Contribuidores <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="elipse1 relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            // TODO:  style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          ></div>
        </div>
      </div>
    </div>
  )
}
