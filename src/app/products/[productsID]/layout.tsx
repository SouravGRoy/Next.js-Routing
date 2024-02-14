import React from 'react'

export default function ProductDetailsLayout({
    children,
}:{
    children:React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2
      style={{
        backgroundColor:"silver",
        padding:"1rem",
        textAlign:"center",
      }}
      >Featured Products</h2>
    </>
  )
}
