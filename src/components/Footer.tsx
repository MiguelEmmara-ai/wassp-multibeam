import React from 'react'
import Image from 'next/image'
import { CustomButton } from '.'

const Footer = () => {
  return (
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
          className="absolute h-[18.91%] w-[91.22%] top-[72.49%] right-[4.39%] bottom-[8.6%] left-[4.39%] max-w-full overflow-hidden max-h-full mix-blend-overlay"
          alt="WasspMultibeam"
          src="/svg/WasspMultibeam.svg"
          width={500}
          height={500}
        />
      </section>
    </div>
  )
}

export default Footer
