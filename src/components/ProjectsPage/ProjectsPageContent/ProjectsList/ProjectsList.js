import React from 'react'
import {Link} from 'react-router-dom'

import ProjectPreview from './ProjectPreview/ProjectPreview'

const ProjectsList = ({projectsById}) => {    
    return Object.values(projectsById).map( (project) => {
        console.log('PROJECTTT', project);
        return(
            <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
                <ProjectPreview
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    tasksNum={project.tasksIds.length}
                />
            </Link>
        )
    })
}

export default ProjectsList