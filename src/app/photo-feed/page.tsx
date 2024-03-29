import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import wonders from "./wonders";

export default function Home() {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {wonders.map(({ id, name, src, reviews, price }) => (
        <Link key={id} href={`/photo-feed/${id}`}>
          <a href="#">
            <Image
              className="p-8 rounded-t-lg"
              src={src} // Update this line to use .default
              alt="product image"
              width={300}
              height={200}
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{reviews}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
              <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
