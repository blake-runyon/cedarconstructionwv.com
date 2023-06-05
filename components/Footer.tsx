import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white shadow inset-x-0 bottom-0 lg:sticky">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">© 2023 <a href="https://cedarconstructionwv.com/" className="hover:underline">Cedar Construction, LLC</a>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
          <li>
              <Link href="/" className="mr-4 hover:underline md:mr-6 ">Home</Link>
          </li>
          <li>
              <Link href="/about" className="mr-4 hover:underline md:mr-6">About</Link>
          </li>
          <li>
              <Link href="/work" className="mr-4 hover:underline md:mr-6">Our Work</Link>
          </li>
          <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
          </li>
      </ul>
      </div>
    </footer>
  )
}