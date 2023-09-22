import Link from 'next/link'
import { Typography } from '@mui/material'

const Fseries = () => {
  return (
    <section className="text-white relative min-h-screen bg-f-serices-gradient-bg bg-cover bg-no-repeat">
      <div className="container">
        {/* Content at the top for mobile */}
        <div className="md:hidden py-3">
          <Typography variant="h1" className="text-6xl font-extrabold">
            f - series
          </Typography>
          <div className="flex gap-4">
            <p>01</p>
            <p>03</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between md:mt-2 mt-[500px]">
          {/* Content at the bottom for mobile */}
          <div className="md:hidden">
            <Typography variant="body1">f - series</Typography>
            <div className="mt-4">
              <Typography variant="body1">
                WASSP Multibeam finds fish and habitat over a wider area than single-beam systems.
              </Typography>
            </div>
            <Link href="#" className="text-white">
              Explore Now
            </Link>
          </div>
        </div>

        {/* Content for larger screens */}
        <div className="hidden md:flex md:mt-[600px]">
          <div className="container">
            <div className="flex items-center justify-between ">
              <div className="container ml-[-50px]">
                <div className="flex gap-4">
                  <p>01</p>
                  <p>03</p>
                </div>
                <div>
                  <p>(FISHING SERIES)</p>
                </div>
                <div>
                  <Typography variant="h1" className="lg:text-8xl text-5xl font-extrabold">
                    F-Series
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="relative ml-auto mt-20">
            <Typography variant="body1">F-Series</Typography>
            <div className="mt-4">
              <Typography variant="body1">
                WASSP Multibeam can detect fish and habitat over a wider area compared to
                single-beam systems.
              </Typography>
            </div>
            <div className="mt-6">
              <Link href="#" className="text-white">
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fseries
