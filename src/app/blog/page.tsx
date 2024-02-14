import React from 'react';
import { Metadata } from 'next';

export const metadata:Metadata={
  title:{
    absolute:"Blog"
,  }
}

export default function blog() {
  return (
    <div>
      <h1>My blog</h1>
    </div>
  )
}
