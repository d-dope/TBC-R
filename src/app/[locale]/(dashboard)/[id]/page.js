'use client'

import { useEffect, useState } from "react";

export default function Page({params:{id}}) {
    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData(){
        const test = await fetch(`https://dummyjson.com/products/${id}`)
        const res = await test.json()
        setData(res)
      }
      fetchData()
    },[])


    return (
        <>
        <div className="flex justify-center mt-10">

        
<div
  className=" rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
  <div className="relative overflow-hidden bg-cover bg-no-repeat">
    <img
      className="rounded-t-lg"
      src={data.thumbnail}
      alt="" />
  </div>
  <div className="py-6">
    <h5
      className="mb-2 text-xl font-medium leading-tight">
       {data.title}
    </h5>
    <p className="mb-4 text-base">
      
    {data.description}
    </p>
  
 <div className=" flex flex-col gap-3">
        <p className="font-bold text-emerald-600">Price: ${data.price}</p>
        <h3 className="font-bold text-red-600">Discount: {data.discountPercentage}%</h3>
        <h3 className="text-xl font-semibold mb-2">In Stock: {data.stock}</h3> 
        <p className="font-semibold text-black-600">Brand: {data.brand}</p>
        <p className="font-semibold text-black-600">Category: {data.category}</p>
 </div>


      </div>
  </div>
</div>
         
        </>
        
    )
    
}

