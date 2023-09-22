'use-client'

import { useSpring, animated, config } from '@react-spring/web'
import Image from 'next/image'
import { useState } from 'react'

const images = [
  '/assets/images/05.jpg',
  '/assets/images/06.jpg',
  '/assets/images/07.jpg',
  '/assets/images/08.jpg',
  '/assets/images/09.jpg',
  '/assets/images/10.jpg',
  '/assets/images/11.jpg',
  '/assets/images/12.jpg',
  '/assets/images/13.jpg',
  '/assets/images/14.jpg',
]

const ImageScroller = () => {
  const [key, setKey] = useState(1)

  const numImages = images.length
  const scrollAmount = 100 / numImages
  const scrolling = useSpring({
    from: { transform: 'translateX(0%)' },
    to: { transform: `translateX(-${100 - scrollAmount}%)` },
    config: { duration: 25000 },
    reset: true,
    onRest: () => {
      setKey(key + 1)
    },
  })

  return (
    <div className="mt-[200px] max-w-full lg:max-w-screen-xl mx-auto overflow-hidden">
      <animated.div style={scrolling}>
        <div className="flex items-center space-x-10">
          {images.map((imageUrl, i) => (
            <div key={i}>
              <Image src={imageUrl} width={200} height={200} alt={`Image ${i + 1}`} />
            </div>
          ))}
        </div>
      </animated.div>
    </div>
  )
}

export default ImageScroller
