import site from '../content/site.json'
import hero from '../content/hero.json'
import announcements from '../content/announcements.json'
import booking from '../content/booking.json'
import team from '../content/team.json'
import about from '../content/about.json'
import courses from '../content/courses.json'
import guides from '../content/guides.json'
import process from '../content/process.json'
import partners from '../content/partners.json'
import contact from '../content/contact.json'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Booking from './components/Booking.jsx'
import Team from './components/Team.jsx'
import About from './components/About.jsx'
import Introduction from './components/Introduction.jsx'
import Process from './components/Process.jsx'
import Partners from './components/Partners.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './useReveal.js'

export default function App() {
  useReveal()
  return (
    <>
      <Header site={site} contact={contact} />
      <main>
        <Hero data={hero} />
        <Booking data={booking} courses={courses.items} announcements={announcements} />
        <Team data={team} />
        <About data={about} />
        <Introduction courses={courses} guides={guides} />
        <Process data={process} />
        <Partners data={partners} />
      </main>
      <Footer site={site} contact={contact} />
    </>
  )
}
