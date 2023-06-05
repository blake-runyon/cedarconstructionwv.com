import ImageCard from "./ImageCard"

export const metadata = {
  title: 'Our Work - Cedar Construction',
  description: 'Your Premier WV General Contractors',
  favicon: '/favicon.ico',
}

export default function Work() {
  return (
    <div className="mx-2">
      <h1 className="text-4xl text-center font-bold my-3">Our Work</h1>
      <div className="flex">
        <ImageCard title="New Window Install" src="image0" />
        <ImageCard title="New Title Install" src="image1" />
        <ImageCard title="New Vanity Install" src="image3" />
      </div>
      <div className="flex">
        <ImageCard title="New Deck" src="image6" />
        <ImageCard title="New Deck" src="image7" />
      </div>
    </div>
  )
}