import React from 'react'
import "./styles.css"

export default function Layout(props:{
    modal:React.ReactNode;
    children: React.ReactNode;
}) {
  return (
    <div>
      {props.modal}
      {props.children} 
    </div>
  )
}

// This props.modal and props.children corresponds to page.tsx