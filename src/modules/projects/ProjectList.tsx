import {SimpleGrid} from '@chakra-ui/react'

import ProjectCard from './ProjectCard'

function ProjectList(props: any) {
  const {projects} = props
  return (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px">
      {projects.map(
        (project: {
          id: string
          title: string
          location: string
          date: string
          image: string
        }) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            location={project.location}
            date={project.date}
            image={project.image}
          />
        ),
      )}
    </SimpleGrid>
  )
}

export default ProjectList
