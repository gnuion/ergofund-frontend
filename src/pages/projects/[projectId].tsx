import {useRouter} from 'next/router'
import {getEventById} from '../../../dummy-data'
import ProjectSummary from '@components/project-detail/project-summary'
import ProjectContent from '@components/project-detail/project-content'

import {HStack, Stack, VStack} from '@chakra-ui/react'
import ProjectSlideshow from '@modules/ProjectSlideshow/ProjectSlideshow'

function ProjectDetailPage() {
  const router = useRouter()

  const projectId = router.query.projectId
  const project = getEventById(projectId)

  if (!project) {
    return <p>No event found!</p>
  }
  return (
    <>
      <Stack alignItems="flex-start" direction={['column', 'column', 'row']}>
        <ProjectSlideshow project={project} />
        <VStack alignItems="flex-start" px={4}>
          <ProjectSummary title={project.title} />
          <ProjectContent>
            <p>{project.description}</p>
          </ProjectContent>
        </VStack>
      </Stack>
    </>
  )
}

export default ProjectDetailPage
