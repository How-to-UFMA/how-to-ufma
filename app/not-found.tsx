import Link from "next/link"

export default function NotFound() {
  return (
    <div className="prose text-center dark:prose-invert">
      <h2 className="mb-2">Página não encontrada</h2>
      <p>Não foi possível achar o conteúdo...</p>
      <p>
        <Link href="/" className="no-underline">
          Voltar
        </Link>
      </p>
    </div>
  )
}
