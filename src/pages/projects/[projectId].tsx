import {useRouter} from 'next/router'
import {getEventById} from '../../../dummy-data'
import ProjectSummary from '@components/project-detail/project-summary'
import ProjectContent from '@components/project-detail/project-content'
import {Box} from '@chakra-ui/react'

import SlideShow from '@components/slideshow/slideshow'
import {HStack, Stack} from '@chakra-ui/react'
function ProjectDetailPage() {
  const router = useRouter()

  const projectId = router.query.projectId
  const project = getEventById(projectId)

  if (!project) {
    return <p>No event found!</p>
  }
  return (
    <>
      <HStack height="300px">
        <SlideShow />

        <Stack width="50%" height="100%">
          <ProjectSummary title={project.title} />
          <ProjectContent>
            <p>{project.description}</p>
          </ProjectContent>
        </Stack>
      </HStack>
    </>
  )
}

export default ProjectDetailPage
