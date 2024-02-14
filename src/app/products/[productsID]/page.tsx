import { Metadata } from 'next';
import { resolve } from 'path';
import React from 'react';

type Props = {
  params: {
    productsID: string;
  };
};


// Correct usage
export const generateMetadata = async({ params}:Props): Promise <Metadata> => { 
    const title = await new Promise(resolve=>{
    setTimeout(()=>{
        resolve(`iphone ${params.productsID}`)
    })
})
    return{
        title:`Product ${title}`
    }
};


export default function ProductDetails({ params }: Props) {
  return (
    <div>
      <h1>Details of product {params.productsID}</h1>
      
    </div>
  );
}
