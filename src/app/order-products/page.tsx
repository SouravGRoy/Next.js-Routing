"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

export default function OrderProducts() { 
const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order")
        router.replace("/");
    }
  return (
    <div>
      <h1>Order Products</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}
