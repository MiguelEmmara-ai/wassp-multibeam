import { Typography, Button } from '@mui/material'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="text-white py-12">
      <div className="container mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-3 flex flex-col justify-between">
          <div className="mb-4">
            <Typography variant="body1" className="font-semibold">
              Dui duis facilisis id et ullamcorper diam est. Vulputate ac magna in id.
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            sx={{
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
            }}
            endIcon={<Image src="/svg/ArrowRight.svg" width={29} height={29} alt="Arrow Down" />}
          >
            Contact
          </Button>
          <div className="mt-2">
            <Typography variant="body1">
              <a href="#" className="text-white">
                Subscribe to our newsletter
              </a>
            </Typography>
          </div>
        </div>

        <div className="col-span-2">
          <div className="mb-4">
            <Typography variant="body1" className="font-semibold">
              Navigation
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <Typography variant="body1">
              <a href="#" className="text-white hover:underline">
                Home
              </a>
            </Typography>
            <Typography variant="body1">
              <a href="#" className="text-white hover:underline">
                Products
              </a>
            </Typography>
            <Typography variant="body1">
              <a href="#" className="text-white hover:underline">
                About ENL
              </a>
            </Typography>
            <Typography variant="body1">
              <a href="#" className="text-white hover:underline">
                Multibeam Technology
              </a>
            </Typography>
            <Typography variant="body1">
              <a href="#" className="text-white hover:underline">
                News
              </a>
            </Typography>
            <Typography variant="body1">
              <a href="#" className="text-white hover:underline">
                Resources
              </a>
            </Typography>
            <Typography variant="body1">
              <a href="#" className="text-white hover:underline">
                Contact
              </a>
            </Typography>
          </div>
        </div>

        <div className="col-span-2">
          <div className="mb-4">
            <Typography variant="body1" className="font-semibold">
              Social Media
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <Typography variant="body1">
              <a href="#" className="text-white hover:underline">
                Facebook
              </a>
            </Typography>
            <Typography variant="body1">
              <a href="#" className="text-white hover:underline">
                Instagram
              </a>
            </Typography>
            <Typography variant="body1">
              <a href="#" className="text-white hover:underline">
                Youtube
              </a>
            </Typography>
          </div>
        </div>

        <div className="col-span-2">
          <div className="mb-4">
            <Typography variant="body1" className="font-semibold">
              Locations
            </Typography>
          </div>

          <div className="flex flex-col gap-2">
            <Typography variant="body1">
              <a href="#" className="text-white hover:underline">
                Facebook
              </a>
            </Typography>
            <Typography variant="body1">
              <a href="#" className="text-white hover:underline">
                Instagram
              </a>
            </Typography>
            <Typography variant="body1">
              <a href="#" className="text-white hover:underline">
                Youtube
              </a>
            </Typography>
          </div>
        </div>

        <div className="col-span-3">
          <div className="flex items-center gap-4">
            <Image
              src="/svg/WasspMultibeam.svg"
              width={1245}
              height={132}
              alt="Wassap Multibeam"
              style={{ opacity: '0.5',  fill: '#02143A' }}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
