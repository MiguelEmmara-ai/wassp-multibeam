import { SmoothScrollProps } from '@/types'
import { useSpring, animated } from '@react-spring/web'
import { useEffect } from 'react'

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const [{ y }, set] = useSpring(() => ({ y: 0 }))

  const handleScroll = () => {
    set({ y: window.scrollY })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <animated.div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        willChange: 'transform',
        transform: y.interpolate((value) => `translate3d(0, ${-value}px, 0)`),
      }}
    >
      {children}
    </animated.div>
  )
}

export default SmoothScroll
