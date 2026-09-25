import site from '../content/site.json'
import hero from '../content/hero.json'
import announcements from '../content/announcements.json'
import courses from '../content/courses.json'
import instructors from '../content/instructors.json'
import faq from '../content/faq.json'
import contact from '../content/contact.json'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Announcements from './components/Announcements.jsx'
import Courses from './components/Courses.jsx'
import Instructors from './components/Instructors.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header site={site} />
      <main>
        <Hero data={hero} />
        <Announcements items={announcements} />
        <Courses items={courses} />
        <Instructors items={instructors} />
        <FAQ items={faq} />
        <Contact data={contact} />
      </main>
      <Footer site={site} />
    </>
  )
}
