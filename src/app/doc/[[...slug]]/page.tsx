import React from 'react'

export default function Doc({params}:
    {
    params:{
    slug:string[]}
}) {

    if(params.slug?.length === 2){
        return <h1>Doc have Feature {params.slug[0]} and Concept is {params.slug[1]}</h1>
    }else if(params.slug?.length === 1){
        return <h1>Doc have Feature {params.slug[0]}</h1>
    }
  return (
    <div>
      Doc Page
    </div>
  )
}
