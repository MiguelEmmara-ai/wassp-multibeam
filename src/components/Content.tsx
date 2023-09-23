import { ContentProps } from '@/types'

const Content = ({
  number,
  title,
  contentComponent,
}: ContentProps & { contentComponent: React.ReactNode }) => {
  return (
    <section className="container grid grid-cols-12 grid-rows-4 h-[700px] mt-10 mb-0 md:mb-[-100px]">
      <div className="col-span-12 flex flex-row ml-8 norwester-font">
        <div className="flex gap-[100px]">
          <p className="font-norwester font-normal text-sm leading-16.8 text-white">{number}</p>
          <p className="font-norwester font-normal text-sm leading-16.8 text-white">{title}</p>
        </div>
      </div>

      <div className="col-span-12 md:col-span-8 md:col-start-5 flex flex-row justify-between items-center mx-8 mt-[-140px] md:mt-[-390px] lg:mt-[-280px]">
        {contentComponent}
      </div>
    </section>
  )
}

export default Content
