'use client';

import React from 'react'
import { useRouter } from 'next/navigation'

export default function Order() {
    const router = useRouter()
    const handleClick = () => {
        console.log('Order placed')
        router.push('/')
    }
  return (
    <div>
      <h1>Order Page</h1>
      <button onClick={handleClick}>Order here</button>
    </div>
  )
}
