import React from 'react'
import ProjectPreview from './ProjectPreview/ProjectPreview'

const ProjectsList = ({projectsById}) => {
    const projectsArray = []
    for (let projectId in projectsById) {
        const project = projectsById[projectId]
        console.log(project);
        projectsArray.push({
            id: project.id,
            name: project.name,
            description: project.description,
            tasksNum: project.tasksIds?.length
        })
    }
    
    return projectsArray.map( (project) => {
        return(
            <ProjectPreview
                id={project.id}
                name={project.name}
                description={project.description}
                tasksNum={project.tasksNum}
            />
        )
    })
}

export default ProjectsList