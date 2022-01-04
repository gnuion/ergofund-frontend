import {SimpleGrid} from '@chakra-ui/react'

import ProjectItem from './project-item'

function ProjectList(props: any) {
  const {projects} = props
  return (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px">
      {projects.map(
        (project: {
          description: string
          id: string
          title: string
          location: string
          date: string
          image: string
          status: string
          category: string
        }) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            title={project.title}
            location={project.location}
            date={project.date}
            image={project.image}
            description={project.description}
            status={project.status}
            category={project.category}
          />
        ),
      )}
    </SimpleGrid>
  )
}

export default ProjectList
