import styles from './home.module.css'
import IconBox from '@/components/IconBox'
import { services } from './services.data'
import { socials } from './contact/socials.data'
import SocialBox from './contact/SocialBox'

export default function Home() {
  return (
    <main>
      <div id={styles.hero} className="bg-red-500 py-56 text-center">
        <div className='bg-black w-96 text-white mx-auto p-10'>
          <h1 className='text-white mb-2 font-bold uppercase text-3xl'>
            Remodeling. Renovations. Restorations.
          </h1>

          <h3>Whatever you need we are here</h3>

          <div className='mt-4'>
            <a href="/work" className='m-2 bg-orange-900 px-4 py-2 rounded-lg hover:bg-orange-700 transition'>Our Work</a>
            <a href="/contact" className='m-2 border-white border p-2 rounded-xl hover:bg-white hover:text-black transition duration-300'>Contact Us</a>
          </div>
        </div>
      </div>
      <div id="services" className='text-center bg-gray-200'>
        <h2 className='text-3xl pt-2'>Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto text-center">
          { services.map((service) => (
           <IconBox icon={service.icon} title={service.name} description={service.description} /> 
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {socials.map((v) => (
          <SocialBox icon={v.icon} header={v.header} description={v.description} button={v.button} link={v.link} />
        ))}
      </div>
    </main>
  )
}
