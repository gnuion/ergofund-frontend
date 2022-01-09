import SlideShow from '@modules/Slideshow/Slideshow'
import {Project} from 'src/entities/Project'

export default function ProjectSlideshow({project}: {project: Project}) {
  return (
    <SlideShow
      items={[
        {image: project.image},
        {image: project.image},
        {image: project.image},
      ]}
    />
  )
}
