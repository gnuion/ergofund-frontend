import {Props} from 'framer-motion/types/types'
import {GridItem} from '@chakra-ui/layout'
import {HeartIcon} from '../icons'
import {TimeIcon} from '@chakra-ui/icons'

import {
  Box,
  Image,
  Badge,
  Text,
  Stack,
  useColorMode,
  AspectRatio,
  Progress,
  HStack,
  Spacer,
  Icon,
  Flex,
  Heading,
  VStack,
} from '@chakra-ui/react'

// id: string
// title: string
// location: string
// date: string
// image: string

import Link from 'next/link'

function ProjectItem(props: Props) {
  const {colorMode} = useColorMode()

  const {description, title, image, date, location, id, status, category} =
    props

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formattedAddress = location.replace(', ', '\n')

  const exploreLink = `/projects/${id}`

  return (
    <Link href={exploreLink}>
      <Box
        as={GridItem}
        rounded="20px"
        overflow="hidden"
        bg={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
        mt={10}
      >
        <AspectRatio maxH="300px" ratio={4 / 3}>
          <Image src={'/' + image} alt="Card Image" objectFit="cover"></Image>
        </AspectRatio>

        <Flex p={5} height="400px" flexDirection="column">
          <HStack justifyContent="space-between">
            <Badge
              variant="solid"
              colorScheme="yellow"
              rounded="full"
              px={2}
              fontSize="small"
            >
              {status}
            </Badge>
            <Icon as={HeartIcon} color="red.500" />
          </HStack>

          <VStack alignItems="flex-start">
            <Heading as="h4" size="md" my={2}>
              {title}
            </Heading>
            <Text fontWeight="light">{description}</Text>
          </VStack>

          <Spacer />

          <VStack alignItems="space-between">
            <div>
              <Badge
                variant="outline"
                colorScheme="yellow"
                rounded="full"
                px={2}
                fontSize="small"
              >
                {category}
              </Badge>
            </div>

            <HStack justifyContent="space-between">
              <Text fontWeight="light">850 SigUSD raised</Text>
              <Text fontWeight="light">86%</Text>
            </HStack>

            <Progress
              colorScheme="green"
              size="lg"
              value={80}
              p="4px"
              borderColor="gray.300"
              borderRadius="1rem"
              w="100%"
            />
            <HStack>
              <Icon as={TimeIcon} />
              <Text>18 days left</Text>
              <Spacer />
            </HStack>
          </VStack>
        </Flex>
      </Box>
    </Link>
  )
}

export default ProjectItem
