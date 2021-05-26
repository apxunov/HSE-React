import React from 'react'
import {Link} from 'react-router-dom'

import ProjectPreview from './ProjectPreview/ProjectPreview'

const ProjectsList = ({projectsById}) => {
    // const projectsArray = []

    // Object.values(projectsById).map( project =>  {

    // })

    // for (let projectId in projectsById) {
    //     const project = projectsById[projectId]
    //     projectsArray.push({
    //         id: project.id,
    //         name: project.name,
    //         description: project.description,
    //         tasksNum: project.tasksIds?.length
    //     })
    // }
    
    return Object.values(projectsById).map( (project) => {
        return(
            <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
                <ProjectPreview
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    tasksNum={project.tasksNum}
                />
            </Link>
        )
    })
}

export default ProjectsList