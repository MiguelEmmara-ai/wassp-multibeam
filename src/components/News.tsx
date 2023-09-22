import { NewsImageProps } from '@/types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

const NewsImage = ({ imgSrc, imgAlt, title }: NewsImageProps) => {
  return (
    <Box className="container border border-white p-4 rounded-lg">
      <div className="relative bg-cover">
        <Image src={imgSrc} objectFit="cover" alt={imgAlt} width={350} height={350} />
      </div>
      <Typography
        variant="h4"
        fontFamily="neue-haas-grotesk-display"
        fontWeight="450"
        color="white"
      >
        {title}
      </Typography>
      <Box className="flex flex-row justify-between items-center">
        <Typography
          variant="body2"
          fontFamily="neue-haas-grotesk-display"
          fontWeight="450"
          color="white"
        >
          View
        </Typography>
        <Image src="/svg/ArrowRight.svg" width={29} height={29} alt="Arrow Down" />
      </Box>
    </Box>
  )
}

const News = () => {
  return (
    <div className="overflow-x-auto flex flex-col mt-[300px]">
      <Box className="col-start-5 col-span-8 row-start-1 flex flex-row gap-10">
        <NewsImage
          imgSrc="/assets/images/03.jpg"
          imgAlt="Image 1"
          title="South Pacific reopens for superyachts, a top charter spot."
        />
        <NewsImage
          imgSrc="/assets/images/04.jpg"
          imgAlt="Image 2"
          title="WASSP's Bluebeam brings major feature advancements"
        />
        <NewsImage
          imgSrc="/assets/images/05.jpg"
          imgAlt="Image 3"
          title="WASSP's Bluebeam brings major feature advancements"
        />
      </Box>
    </div>
  )
}

export default News
