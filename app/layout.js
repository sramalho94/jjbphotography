import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JJB Photography',
  description: 'Welcome to the website for JJB Photgraphy'
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-screen w-screen overflow-hidden mx-auto my-auto"
    >
      <link rel="icon" href="/jjb_logo_cropped.png" sizes="any" />
      <body className={`h-full overflow-y-auto ${inter.className}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
