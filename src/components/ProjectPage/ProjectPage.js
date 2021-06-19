import React, { useEffect } from 'react'
import {useParams, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {ThemeSwitcher} from '../UI/ThemeSwitcher/ThemeSwitcher'
import ProjectContent from './ProjectContent/ProjectContent'
import BackButton from '../UI/BackButton/BackButton'

// Импорт action 
import { fetchDataLoaded } from '../../actions/projects_and_tasks/projects_and_tasks' 

import classes from '../ProjectsPage/ProjectsPage.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const mapStateToProps = (state) => {
    return ({
        theme: state.themeState.theme,
        projects: state.applicationData.projectsByIds
    })
}

const mapDispatchToProps = (dispatch) => ({
    dispatchFetchDataLoaded: (projects) => dispatch(fetchDataLoaded(projects))
})
  
const ProjectPageComponent = ({theme, projects, dispatchFetchDataLoaded}) => {
    const { projectId } = useParams() // получаем id проекта из URL
    
    useEffect(() => {
        dispatchFetchDataLoaded()
    }, [])

    if (projects) {
        let project_id = null 

        // находим проект по id из url 
        Object.entries(projects).map(project => project[1].id === Number(projectId) ? project_id = project[0] : null)
        const project = projects[project_id]

        const projectName = project?.name
        return (
            <section className={cx('application-wrapper', `application-wrapper-theme-${theme}`)}>
                <BackButton/>
            <> 
                <ThemeSwitcher/>
                <ProjectContent
                    projectId={projectId}
                    projectName={projectName}
                />
            </>
            </section>
        )
    }
    else {
        return (<Redirect to='/404'/>)
    }
}


export const ProjectPage = connect(mapStateToProps, mapDispatchToProps)(ProjectPageComponent)
