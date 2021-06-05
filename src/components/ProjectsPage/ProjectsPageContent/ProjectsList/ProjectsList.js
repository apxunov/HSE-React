import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import {ProjectPreview} from './ProjectPreview/ProjectPreview'

const mapStateToProps = (state) => {
    return({projects: state.projectsByIds.projects})
}

const ProjectsListComponent = ( {projects} ) => {    
    return Object.values(projects).map( (project, index) => {
        return(
            <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
                <ProjectPreview
                    key={index}
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    tasksNum={project.tasksIds.length}
                />
            </Link>
        )
    })
}

export const ProjectsList = connect(mapStateToProps)(ProjectsListComponent)