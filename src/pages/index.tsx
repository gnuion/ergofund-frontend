import type {NextPage} from 'next'
import {getFeaturedProjects} from '../../dummy-data'
import ProjectList from '../components/projects/project-list'

const Home: NextPage = () => {
  const featuredProjects = getFeaturedProjects()
  return (
    <div>
      <ProjectList projects={featuredProjects} />
    </div>
  )
}

export default Home
