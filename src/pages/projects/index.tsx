import {getAllProjects} from '../../../dummy-data'
import ProjectList from '../../components/projects/project-list'

function AllProjectsPage() {
  const projects = getAllProjects()
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  )
}

export default AllProjectsPage
