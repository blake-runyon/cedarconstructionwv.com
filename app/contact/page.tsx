import { faBook, faBookReader, faEnvelope, faPhone, faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
import SocialBox from "./SocialBox"
import { socials } from "./socials.data"

export const metadata = {
  title: 'Contact - Cedar Construction',
  description: 'Your Premier WV General Contractors',
  favicon: '/favicon.ico',
}

export default function Contact() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {socials.map((v) => (
          <SocialBox icon={v.icon} header={v.header} description={v.description} button={v.button} link={v.link} />
        ))}
      </div>
    </div>
  )
}