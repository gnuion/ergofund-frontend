import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import {Box} from '@chakra-ui/react'

interface SlideshowItem {
  image: string
}

interface SlideshowProps {
  items: SlideshowItem[]
}

export default function Slideshow({items}: SlideshowProps) {
  return (
    <Box width={['100%', '100%', '50%']}>
      <Swiper spaceBetween={4} slidesPerView={1.2}>
        {items.map((item, i) => (
          <SwiperSlide key={`${i}-${item.image}`}>
            <Box width="100%" height="360px" position="relative">
              <Image
                src={`/${item.image}`}
                alt="Project Image"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
