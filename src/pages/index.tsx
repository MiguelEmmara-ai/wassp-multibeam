import {
  Hero,
  About,
  Fseries,
  BrandScrool,
  Content,
  Testimonial,
  News,
  ImageSroll,
  Footer,
  SmoothScroll,
} from '@/components'

const Home = () => {
  return (
    <div className="relative">
      {/* <SmoothScroll></SmoothScroll> */}
      <Hero />
      <About />
      <Fseries />
      <BrandScrool />
      <Content number="04" title="TESTIMONIAL" contentComponent={<Testimonial />} />
      <Content number="05" title="NEWS" contentComponent={<News />} />
      <ImageSroll />
      <Footer />
    </div>
  )
}

export default Home
