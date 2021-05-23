import React from 'react'
import ProjectPreview from './ProjectPreview/ProjectPreview'

const ProjectsList = ({projectsById}) => {
    const projectsArray = []
    for (let projectId in projectsById) {
        const project = projectsById[projectId]
        projectsArray.push({
            name: project.name,
            description: project.description,
            tasksNum: project.tasksIds?.length
        })
    }
    
    return projectsArray.map( (project) => {
        return(
            <ProjectPreview
                name={project.name}
                description={project.description}
                tasksNum={project.tasksNum}
            />
        )
    })
}

export default ProjectsList