import Image from 'next/image'
import Landing from '@/components/Landing'
export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24 h-screen">
      <Landing/>
    </main>
  )
}
