import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
// Импорт компонента
import {ProjectPreview} from './ProjectPreview/ProjectPreview' 
// Импорт action 
import { fetchProjectsLoaded } from '../../../../actions/projects/projects'

const mapStateToProps = (state) => ({projects: state.projectsByIds.projects})

const mapDispatchToProps = (dispatch) => ({
    dispatchFetchProjectsLoad: (projects) => dispatch(fetchProjectsLoaded(projects))
})

const ProjectsListComponent = ( {projects, dispatchFetchProjectsLoad} ) => {  
    const [_projects, set_Projects] = useState([])
    useEffect(() => {
        //???
    })
    return Object.values(projects).map( (project) => {
        return(
            <Link key={project.id} to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
                <ProjectPreview
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    tasksCount={project.tasksCount?.length}
                />
            </Link>
        )
    })
}

export const ProjectsList = connect(mapStateToProps, mapDispatchToProps)(ProjectsListComponent)