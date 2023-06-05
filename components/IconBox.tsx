"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarcode } from "@fortawesome/free-solid-svg-icons"

export default function IconBox({ icon, title, description }: any) {
  return (
    <div className="bg-gray-100 p-2 rounded-xl shadow-lg w-80 border-amber-700 border-2 mx-auto my-2">
      <div className="flex justify-center align-middle text-center">
        <FontAwesomeIcon icon={icon} className="text-7xl text-amber-700" />
      </div>
      <h1 className="font-bold text-2xl text-center mt-2">{title}</h1>
      <p className="text-center">{description}</p>
    </div>
  )
}