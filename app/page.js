import Image from 'next/image'
import Landing from '@/components/Landing'
import Footer from '@/components/Footer'
import Portfolio from '@/components/Portfolio'
import AboutMe from '@/components/AboutMe'
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between  min-h-screen md:p-24">
      <Landing />

      <Portfolio />
      <AboutMe />
    </main>
  )
}
