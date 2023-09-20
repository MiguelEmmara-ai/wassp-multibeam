import { Box, Typography, Button } from '@mui/material'
import { Nav } from '.'

const buttonStyles = {
  backgroundColor: 'transparent',
  fontWeight: '600',
  color: 'white',
  py: '2',
  px: '4',
  '&:hover': {
    backgroundColor: '#1E40AF',
    border: 'none',
  },
  borderRadius: '9999px',
  border: '1px solid #718096',
}

const ContactButton = (
  <Button
    variant="contained"
    color="primary"
    sx={buttonStyles}
    endIcon={<img src="/svg/ArrowRight.svg" alt="Arrow Right" />}
    onClick={() => {}}
  >
    Contact Us
  </Button>
)

const Hero = () => {
  return (
    <section>
      <Box
        className="relative min-h-screen bg-hero-overlay bg-cover bg-no-repeat"
        style={{ backgroundBlendMode: 'overlay' }}
      >
        <div className="pt-[40px]">
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
          <div className="text-white max-w-sm rounded-lg shadow-lg">
            <p className="norwester-font font-thin">
              WASSP multi-beam enables
              <br />
              sustainable fishing,
              <br />
              exploration, and surveys with
              <br />
              versatility and detail.
            </p>
            <div className="lg:hidden md:block mb-3">{ContactButton}</div>
          </div>
        </div>

        {/* Contact Us Button */}
        <div className="hidden sm:hidden lg:block absolute bottom-0 right-0 mr-[20px] mb-[20px]">
          {ContactButton}
        </div>
      </Box>
    </section>
  )
}

export default Hero
