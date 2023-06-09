import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SocialBox({ icon, header, description, button, link }: any) {
  return (
    <div className="border-2 border-gray-200 flex flex-col justify-center align-middle rounded-xl shadow-md text-center p-5 m-3 bg-gray-100">
      <FontAwesomeIcon icon={icon} className="text-7xl text-black" />
      <h2 className="text-3xl font-bold mt-2 mb-1">{header}</h2>
      <p className="my-2">{description}</p>
      <Link
        href={link}
        className="bg-amber-700 w-3/12 md:w-2/12 text-center text-white mx-auto px-3 py-1 rounded-lg hover:bg-amber-900"
        >
          {button}
      </Link>
    </div>
  )
}