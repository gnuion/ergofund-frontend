import {Props} from 'framer-motion/types/types'
import {GridItem} from '@chakra-ui/layout'
import {HeartIcon} from '@modules/Icons'
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
  VStack,
  Heading,
} from '@chakra-ui/react'

function ProjectItem(props: Props) {
  const {colorMode, toggleColorMode} = useColorMode()

  const {title, image, date, location, id} = props

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formattedAddress = location.replace(', ', '\n')

  const exploreLink = `/events/${id}`

  return (
    <GridItem>
      <Box
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
            <Badge variant="solid" colorScheme="yellow" rounded="full" px={2}>
              Funding
            </Badge>
            <Icon as={HeartIcon} color="red.500" />
          </HStack>

          <Stack>
            <Heading as="h4" size="md" my={2}>
              A Computer Science Portal for Geeks
            </Heading>
            <Text fontWeight="light">
              A platform for students to study CSE concepts. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Facilis, veritatis dolorum
              eligendi aliquam eius animi recusandae itaque amet! Quae totam qui
              fuga nihil aut ea necessitatibus soluta quo impedit in?
            </Text>
          </Stack>
          <Spacer />
          <Stack>
            <HStack justifyContent="space-between">
              <Badge
                variant="outline"
                colorScheme="yellow"
                rounded="full"
                px={2}
              >
                Environment
              </Badge>
            </HStack>
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
          </Stack>
        </Flex>
      </Box>
    </GridItem>
  )
}

export default ProjectItem
