import React from 'react'
import Image from 'next/image'
import { CustomButton } from '.'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="relative w-full overflow-hidden flex flex-col items-center justify-start">
          <section className="self-stretch relative h-[698px] text-left text-base text-white font-desktop-paragraph">
            <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0" />
            <h3 className="m-0 absolute w-[27.01%] top-[17.19%] left-[4.39%] lg:text-5xl font-normal font-inherit inline-block">
              Dui duis facilisis id et ullamcorper diam est. Vulputate ac magna in id.
              <div className="relative mt-5">
                <CustomButton title="Our Story" />
              </div>
              <div className="absolute lg:text-2xl mt-5 underline">Subscribe to our newsletter</div>
            </h3>

            <div className="absolute grid grid-rows-11 grid-cols-2 gap-y-2 gap-x-10 top-[17.19%] right-[4.39%] ml-48">
              <div>Home</div>
              <div>Offices</div>
              <div>Auckland - NZ</div>
              <div>Essex - UK</div>
              <div>Multibeam Technology</div>
              <div>Products</div>
              <div>News</div>
              <div>Resources</div>
              <div>Contact</div>
              <div>Facebook</div>
              <div>Instagram</div>
              <div>Youtube</div>
            </div>

            <div className="absolute top-[56.16%] lg:left-[82.5%] md:left-[50%] left-[35%]">
              ©2023 WASSP
            </div>
            <Image
              className="absolute h-[18.91%] w-[91.22%] top-[72.49%] right-[4.39%] bottom-[5.0%] left-[2.5%] max-w-full overflow-hidden max-h-full mix-blend-overlay"
              alt="WasspMultibeam"
              src="/svg/WasspMultibeam.svg"
              width={500}
              height={500}
            />
          </section>
        </div>
      </footer>

      {/* <footer className="container items-center justify-center text-left text-base text-white">
        Dui duis facilisis id et ullamcorper diam est. Vulputate ac magna in id.
        <div className="mt-5">
          <CustomButton title="Our Story" />
        </div>
        <div className="absolute lg:text-2xl mt-5 underline">Subscribe to our newsletter</div>
      </footer> */}

      {/* <footer className="container items-center justify-center text-left text-base text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold">
                Dui duis facilisis id et ullamcorper diam est. Vulputate ac magna in id.
              </h4>
              <div className="mt-5">
                <CustomButton title="Our Story" />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        About Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        MIT License
                      </a>
                    </li>
                  </ul>
                  <div>©2023 WASSP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  )
}

export default Footer
