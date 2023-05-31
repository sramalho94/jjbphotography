import Image from 'next/image'
import Link from 'next/link'

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
    <div className=" mt-8 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <Image
            src={image.src}
            alt={image.alt}
            responsive="true"
            width={300}
            height={300}
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
  )
}

export default Portfolio
