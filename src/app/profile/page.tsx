import React from 'react'
import Link from 'next/link'
export const metadata = {
  title: 'Profile Page',
}


export default function Profile() {
  return (
    <div>
      <Link href='/about'>About</Link>
     <Link href='/products'>Products</Link>
     <Link href='/'>Home</Link>
      Profile Page
    </div>
  )
}
