import React from 'react'
import Link from 'next/link'

export default function Products() {
  const productId = 100
  return (
    <div>
     <Link href='/about'>About</Link>
     <Link href='/'>Home</Link>
     <Link href='/profile'>Profile</Link>
      <h1>Products List</h1>
      <h6><Link href='/products/1'>product one</Link></h6>
      <h6><Link href='/products/2'>product two</Link></h6>
      <h6><Link href='/products/3' replace>product three</Link></h6>
      <h6><Link href={`products/${productId}`} replace>product four dynamic</Link></h6>
    </div>
  )
}
