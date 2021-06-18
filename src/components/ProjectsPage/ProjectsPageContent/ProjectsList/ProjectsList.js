import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
// Импорт компонента
import {ProjectPreview} from './ProjectPreview/ProjectPreview' 
// Импорт action 
import { fetchDataLoaded } from '../../../../actions/projects_and_tasks/projects_and_tasks' 

const mapStateToProps = (state) => {
    console.log('MAP STATE TO PROPS (PROJECTLIST)', state);
    return({projects: state.applicationData.projectsByIds})
}

const mapDispatchToProps = (dispatch) => ({
    dispatchFetchDataLoaded: (projects) => dispatch(fetchDataLoaded(projects))
})
  

const ProjectsListComponent = ( {projects, dispatchFetchDataLoaded} ) => {  
    useEffect(() => {
        dispatchFetchDataLoaded()
    }, [])
    if (projects) {
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
    else {
        return () => {
            new Error('Nothing has been renderred')
            return (
                <div id=''></div>
            )
        }
    }
}

export const ProjectsList = connect(mapStateToProps, mapDispatchToProps)(ProjectsListComponent)