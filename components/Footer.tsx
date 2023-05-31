export default function Footer() {
  return (
    <footer className="bg-black text-white shadow inset-x-0 bottom-0 fixed">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Cedar Construction, LLC</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">Home</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Our Work</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
  )
}