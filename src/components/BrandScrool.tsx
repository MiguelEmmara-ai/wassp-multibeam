'use-client'

import { useSpring, animated } from '@react-spring/web'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const BrandScroll = () => {
  const [key, setKey] = useState(1)
  const [animate, setAnimate] = useState(true)

  const [items, setItems] = useState([
    { text: 'SBG SYSTEMS', imageSrc: '/svg/SbgSystems.svg' },
    { text: 'gpa seabots', imageSrc: '/svg/Seabots.svg' },
    { text: 'HEMISPHERE', imageSrc: '/svg/Hemisphere.svg' },
  ])

  const scrolling = useSpring({
    from: { transform: 'translateX(50%)' },
    to: animate ? { transform: 'translateX(-130%)' } : { transform: 'translateX(0%)' },
    config: { duration: 20000 },
    reset: true,
    loop: true,
    onRest: () => {
      setKey(key + 1)
    },
  })

  // Reset animation and update items when it reaches the end
  useEffect(() => {
    if (key >= items.length) {
      setKey(0)
      setAnimate(false)
      setTimeout(() => {
        setAnimate(true)
      }, 0)
    }
  }, [key, items])

  return (
    <div className="max-w-full text-white border-t border-b overflow-x-auto mt-20 text-2xl uppercase font-extrabold norwester-font my-[130px]">
      <animated.div style={scrolling}>
        <div className="flex items-center space-x-20 overflow-x-auto">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <h1 className="font-Norwester text-6xl leading-72 whitespace-nowrap">{item.text}</h1>
              <button className="px-5 py-2 rounded-full bg-transparent border border-white">
                <Image src={item.imageSrc} width={65} height={15} alt={item.text} />
              </button>
            </div>
          ))}
        </div>
      </animated.div>
    </div>
  )
}

export default BrandScroll
