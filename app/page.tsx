import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import { ArrowRightIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card"
import { Hero } from "@/components/hero"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        {allPosts.map((post) => (
          <article key={post._id} className="mb-12">
            <Card>
              {post.image && (
                <div className="relative h-60 w-full">
                  <Link href={post.slug}>
                    <Image
                      className="m-0 w-full rounded-t-lg object-cover"
                      src={post.image}
                      alt={post.title}
                      fill
                    />
                  </Link>
                </div>
              )}
              <CardHeader>
                <CardTitle className="m-0">
                  <Link href={post.slug} className="no-underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="space-x-1 text-xs">
                  <span>{format(parseISO(post.date), "MMMM dd, yyyy")}</span>
                  <span>{` • `}</span>
                  <span>{post.readingTime.text}</span>
                  <span>{` • `}</span>
                  <span>
                    <Link
                      href={`/categories/${encodeURIComponent(
                        post.category.toLowerCase()
                      )}`}
                      className="underline underline-offset-2"
                    >
                      {post.category}
                    </Link>
                  </span>
                </CardDescription>
              </CardHeader>
              {post.description && (
                <CardContent>{post.description}</CardContent>
              )}
              <CardFooter>
                <Button asChild>
                  <Link href={post.slug}>
                    <span>Ler mais</span>
                    <ArrowRightIcon className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </article>
        ))}
      </div>
    </>
  )
}
