import React from 'react';
import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  };
};

// We use aynce and await 
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
};


export default function Product({ params }: Props) {
  return (
    <div>
      PRODUCT DETAIL PAGE {params.productId}
    </div>
  );
}
