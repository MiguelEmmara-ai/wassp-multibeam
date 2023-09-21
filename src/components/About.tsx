import Image from 'next/image'
import { CustomButton } from '.'

const About = () => {
  return (
    <section className="text-white relative mt-[-200px]">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-1/2">
          <Image src="/svg/Layers.svg" alt="Layers" width={900} height={900} />
        </div>

        {/* Text Content */}
        <div className="flex-grow p-2 lg:ml-[-270px] lg:mt-[200px] sm:mt-[100px] lg:relative absolute mt-[200px]">
          <h1 className="lg:text-5xl text-4xl font-bold uppercase norwester-font">
            Welcome to the world of
            <br />
            <span>WASSP Multibeam</span>
          </h1>

          <div className="mt-2">
            <div className="flex space-x-[130px]">
              <p className="text-2xl font-semibold">01</p>
              <p className="text-xl font-semibold">ABOUT WASSP</p>
              <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                  WASSP, a powerful multi-beam sounder with 120-degree coverage and models for deep
                  exploration, offers unparalleled accuracy, detail, and versatility. Target fish
                  with steerable sounders, generate real-time 3D charts, map fish in water, and make
                  better decisions with the user-friendly advanced mode.
                </p>
                <CustomButton title="Our Story" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
