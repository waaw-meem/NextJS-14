import React from 'react'
import notFound from './not-found'

function getRandomInt(count:number) {
  return Math.floor(Math.random() * count)
}

export default function Review({params}:{
    params:{
        productId:string,
        reviewId:string
    }
}) {
  const random = getRandomInt(2)

  if(random === 1){
    throw new Error('Error is in review')
  }
    if(parseInt(params.reviewId)>1000){
        return notFound();
    }
  return (
    <div>
      Review of {params.reviewId} of Product {params.productId}
    </div>
  )
}
