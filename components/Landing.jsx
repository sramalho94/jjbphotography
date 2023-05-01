import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



const images = [
    '/banner1.png',
    '/banner2.png',
    '/banner3.png',
    '/banner4.png',
    '/banner5.png',
  ]

const Landing = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'linear'
      }

  return (
    <div>
        <div><h1>JJB Photography</h1></div>

    <div>
<Slider {...settings}>
    {images.map((image,index)=>(
        <div key={index}>
{''}
<Image src={image}
alt={`gallery-image-${index}`}
/>
        </div>
    ))}
</Slider>
    </div>
        </div>
  )
}

export default Landing