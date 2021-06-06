import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import {ProjectPreview} from './ProjectPreview/ProjectPreview'

const mapStateToProps = (state) => {
    return({projects: state.projectsByIds.projects})
}

const ProjectsListComponent = ( {projects} ) => {    
    return Object.values(projects).map( (project) => {
        return(
            <Link key={project.id} to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
                <ProjectPreview
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    tasksNum={project.tasksIds?.length}
                />
            </Link>
        )
    })
}

export const ProjectsList = connect(mapStateToProps)(ProjectsListComponent)