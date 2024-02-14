"use client";
import React from 'react';
import { notFound } from 'next/navigation';

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewsDetails({ params, }: { params: { productsID: string; reviewsID: string } }) {

  const randomNumber = getRandomInt(2);

  if (randomNumber === 1) {
    throw new Error("Failed to load review. Random error simulation.");
  }
  
  if (parseInt(params.reviewsID) > 1000) {
    notFound();
  }

  return (
    <div>
      <h1>The product details {params.productsID} and the review is {params.reviewsID}</h1>
    </div>
  );
}
