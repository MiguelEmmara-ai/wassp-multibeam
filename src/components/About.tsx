import Image from 'next/image'
import { CustomButton } from '.'
import { gql } from '@apollo/client'
import { getApolloClient } from '@/libs/apollo-client'

interface Page {
  title: string
}

interface AboutProps {
  pages: Page[] | undefined
}

const About = ({ pages }: AboutProps) => {
  const pageTitle = pages && pages.length > 0 ? pages[0].title : 'WASSP Multibeam'

  return (
    <section className="text-white relative lg:mt-[-200px] md:mt-[-170px] mt-[-140px] pb-[300px] sm:pb-[10px] md:pb-[160px] lg:pb-[10px]">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            src="/svg/Layers.svg"
            alt="Layers"
            layout="responsive"
            width={500}
            height={500}
            className="max-w-full"
          />
        </div>

        {/* Text Content */}
        <div className="flex-grow p-2 lg:ml-[-270px] lg:mt-[200px] sm:mt-[10px] lg:relative absolute md:mt-[350px] mt-[500px]">
          <h1 className="lg:text-5xl text-4xl font-bold uppercase norwester-font">
            Welcome to the world of
            <br />
            <span>{pageTitle}</span>
          </h1>

          <div className="mt-2">
            <div className="flex md:flex-row flex-col md:space-x-[130px]">
              <p className="text-2xl font-semibold">01</p>
              <p className="text-xl font-semibold">ABOUT WASSP</p>
              <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                  WASSP, a powerful multi-beam sounder with 120-degree coverage and models for deep
                  exploration, offers unparalleled accuracy, detail, and versatility. Target fish
                  with steerable sounders, generate real-time 3D charts, map fish in water, and make
                  better decisions with the user-friendly advanced mode.
                </p>
                <div className='mt-12'>
                  <CustomButton title="Our Story" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

export async function getStaticProps() {
  const apolloClient = getApolloClient()

  const { data } = await apolloClient.query({
    query: gql`
      {
        pages {
          edges {
            node {
              title
            }
          }
        }
      }
    `,
  })

  const pages: Page[] = data?.pages.edges.map(({ node }: { node: Page }) => node)

  return {
    props: {
      pages,
    },
  }
}
