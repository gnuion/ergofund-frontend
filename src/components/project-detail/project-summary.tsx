import {Heading} from '@chakra-ui/react'
import {Props} from 'framer-motion/types/types'
import React from 'react'

const ProjectSummary = (props: Props) => {
  return (
    <Heading as="h1" textAlign="center">
      {props.title}
    </Heading>
  )
}

export default ProjectSummary
