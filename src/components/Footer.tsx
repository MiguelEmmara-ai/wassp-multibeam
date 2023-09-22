import Image from 'next/image'
import { CustomButton } from '.'

const Footer = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-start">
      <section className="self-stretch relative h-[698px] text-left text-base text-white font-desktop-paragraph">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
        <div className="absolute h-[6.92%] w-[8.99%] top-[32.95%] right-[85.76%] bottom-[60.13%] left-[5.25%] rounded-81xl box-border overflow-hidden flex flex-row py-2.5 px-[30px] items-center justify-center gap-[10px] text-sm border-[0.5px] border-solid border-white">
          <div className="relative">
            <CustomButton title="Our Story" />
          </div>
          <img
            className="relative w-[28.28px] h-[28.28px] overflow-hidden shrink-0"
            alt=""
            src="/pharrowrightthin1.svg"
          />
        </div>
        <h3 className="m-0 absolute w-[27.01%] top-[17.19%] left-[4.39%] text-5xl font-normal font-inherit inline-block">
          Dui duis facilisis id et ullamcorper diam est. Vulputate ac magna in id.
        </h3>
        <div className="absolute top-[52.15%] left-[4.39%] [text-decoration:underline]">
          Subscribe to our newsletter
        </div>
        <div className="absolute top-[56.16%] left-[66.91%]">Youtube</div>
        <div className="absolute top-[52.15%] left-[66.91%]">Instagram</div>
        <div className="absolute top-[48.14%] left-[66.91%]">Facebook</div>
        <div className="absolute top-[41.26%] left-[66.91%]">Contact</div>
        <div className="absolute top-[37.25%] left-[66.91%]">Resources</div>
        <div className="absolute top-[33.24%] left-[66.91%]">News</div>
        <div className="absolute top-[25.21%] left-[66.91%]">About ENL</div>
        <div className="absolute top-[29.23%] left-[66.91%]">Multibeam Technology</div>
        <div className="absolute top-[21.2%] left-[66.91%]">Products</div>
        <div className="absolute top-[17.19%] left-[66.91%] [text-decoration:underline]">Home</div>
        <div className="absolute top-[17.19%] left-[87.85%]">Offices</div>
        <div className="absolute top-[21.2%] left-[87.85%]">Auckland - NZ</div>
        <div className="absolute top-[25.21%] left-[87.85%]">Essex - UK</div>
        <div className="absolute top-[56.16%] left-[87.85%]">©2023 WASSP</div>
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
