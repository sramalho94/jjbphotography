import Image from 'next/image'
import Link from 'next/link'
import { Great_Vibes } from 'next/font/google'

const great_vibes = Great_Vibes({ subsets: ['latin'], weight: '400' })
const Portfolio = () => {
  const images = [
    {
      src: '/banner7.jpg',
      alt: 'Wedding',
      link: '/portfolio/wedding'
    },
    {
      src: '/banner8.jpg',
      alt: 'Maternity',
      link: '/portfolio/maternity'
    },
    {
      src: '/banner6.jpg',
      alt: 'Family',
      link: '/portfolio/family'
    },
    // Add more images as needed
    {
      src: '/banner2.jpg',
      alt: 'Portrait',
      link: '/portfolio/portrait'
    }
  ]

  return (
    <div>
      <h1
        className={`mt-8 ${great_vibes.className} font-extrabold text-2xl text-our-beige`}
      >
        When you step in front of my camera, know that I will honor your story
        and create a visual narrative that truly reflects who you are.
      </h1>

      <div className="flex flex-wrap justify-center ">
        {images.map((image, index) => (
          <div key={index} className="relative h-52 w-52 m-2 md:h-64 md:w-64">
            <Image
              src={image.src}
              alt={image.alt}
              responsive="true"
              // width={300}
              // height={300}
              fill
            />
            <Link
              href={image.link}
              className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-white text-center py-2"
            >
              {image.alt}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
