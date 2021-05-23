import React from 'react'
import ProjectsList from './ProjectsList/ProjectsList'

import ApplicationWrapper from '../App/ApplicationWrapper/ApplicationWrapper'

const ProjectsPage = ({projectsById, tasksById}) => {
    return (
        <ProjectsList 
            projectsById={projectsById}
            tasksById={tasksById}
        />
    )
}

export default ProjectsPage