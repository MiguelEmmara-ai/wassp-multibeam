import { Box, Typography } from '@mui/material'
import { CustomButton, Nav } from '.'

const Hero = () => {
  return (
    <section>
      <Box
        className="relative min-h-screen bg-hero-overlay bg-cover bg-no-repeat"
        style={{ backgroundBlendMode: 'overlay' }}
      >
        <div className="md:pt-[40px]">
          <Nav />
        </div>

        {/* Hero Content */}
        <div className="flex items-start justify-start h-full pl-7 mt-[120px]">
          <div className="text-white">
            <Typography variant="h4" className="text-4xl font-extrabold mb-3 norwester-font">
              SEA IT ALL
            </Typography>
            <Typography variant="subtitle1" className="text-5xl font-extrabold norwester-font">
              MULTIBEAM SONAR
            </Typography>
            <Typography variant="subtitle1" className="text-5xl font-extrabold norwester-font">
              PRODUCTS & SOLUTIONS.
            </Typography>
          </div>
        </div>

        <div className="flex items-center justify-center mr-[250px] lg:mt-[300px] mt-[250px]">
          <div className="text-white max-w-sm rounded-lg shadow-lg font-light">
            <p>
              WASSP multi-beam enables
              <br />
              sustainable fishing,
              <br />
              exploration, and surveys with
              <br />
              versatility and detail.
            </p>
            <div className="lg:hidden md:block mb-3">
              <CustomButton title="Contact Us" handleClick={() => {}} />
            </div>
          </div>
        </div>

        <div className="hidden sm:hidden lg:block absolute bottom-0 right-0 mr-[20px] mb-[20px]">
          <CustomButton title="Contact Us" handleClick={() => {}} />
        </div>
      </Box>
    </section>
  )
}

export default Hero
