import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
     <Link href='/about'>About</Link>
     <Link href='/products'>Products</Link>
     <Link href='/profile'>Profile</Link>
      Home Page
    </div>
  )
}
