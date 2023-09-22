'use-client'

import { useSpring, animated } from '@react-spring/web'
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

  const scrolling = useSpring({
    from: { transform: 'translateX(0%)' },
    to: { transform: 'translateX(75%)' },
    config: { duration: 25000 },
    reset: true,
    onRest: () => {
      setKey(key + 1)
    },
  })

  return (
    <div className="max-w-full overflow-x-auto">
      <animated.div style={scrolling}>
        <div className="flex items-center space-x-10">
          {images.map((imageUrl, i) => (
            <div key={i}>
              <Image src={imageUrl} width={121} height={121} alt={`Image ${i + 1}`} />
            </div>
          ))}
        </div>
      </animated.div>
    </div>
  )
}

export default ImageScroller
