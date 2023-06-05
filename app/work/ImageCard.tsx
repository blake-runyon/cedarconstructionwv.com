"use client"

import { useEffect } from "react"
import Image from 'next/image';

export default function ImageCard({ title, src }: any) {
  useEffect(() => {
    console.log(title);
    console.log(src);
  }, [])

  return (
    <div className="bg-gray-100 p-2 rounded-xl shadow-lg border-amber-700 border-2 mx-auto my-2">
      <Image 
        src={"/images/" + src + ".jpeg"}
        alt={title}
        width={300}
        height={300}
        className="mx-auto rounded"
      />
      <h1 className="font-bold text-2xl text-center mt-2">{title}</h1>
    </div>
  )
}