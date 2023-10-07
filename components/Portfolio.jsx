import Image from 'next/image'
import Link from 'next/link'
import { Great_Vibes, Bodoni_Moda } from 'next/font/google'

const great_vibes = Great_Vibes({ subsets: ['latin'], weight: '400' })
const bodoni_moda = Bodoni_Moda({ subsets: ['latin'], weight: '600' })
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
        className={`mt-8 ${great_vibes.className} font-extrabold text-2xl text-our-beige text-center`}
      >
        When you step in front of my camera, know that I will honor your story
        and create a visual narrative that truly reflects who you are.
      </h1>

      <div className="flex flex-wrap justify-center ">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-52 w-52 m-2 md:h-64 md:w-64 md:p-1 border border-our-beige"
          >
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
              className={`absolute  bg-our-beige bg-opacity-80 text-dark-green text-center mt-48 ml-32 md:mt-60 md:ml-44 ${bodoni_moda.className}`}
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
