import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href={"/blog"}>BLOG</Link>
      <h1>Hello</h1>
      <Link href={"/products"}>products</Link>
    </div>
  )
}
