import ImageCard from "./ImageCard"
import { workCards } from "./work.data"

export const metadata = {
  title: 'Our Work - Cedar Construction',
  description: 'Your Premier WV General Contractors',
  favicon: '/favicon.ico',
}

export default function Work() {
  return (
    <div className="mx-2">
      <h1 className="text-4xl text-center font-bold my-3">Our Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto text-center">
        { workCards.map((card) => (
          <ImageCard title={card.title} src={card.src} />
        ))}
      </div>
    </div>
  )
}