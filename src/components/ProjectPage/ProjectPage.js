import React from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'

import {ThemeSwitcher} from '../UI/ThemeSwitcher/ThemeSwitcher'
import ProjectContent from './ProjectContent/ProjectContent'
import BackButton from '../UI/BackButton/BackButton'

import classes from '../ProjectsPage/ProjectsPage.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const mapStateToProps = (state) => {
    console.log('Project Page STATE', state.applicationData.projectsByIds);
    return ({
        theme: state.themeState.theme,
        projects: state.applicationData.projectsByIds
    })
}

const ProjectPageComponent = ({theme, projects}) => {
    const { projectId } = useParams() // получаем id проекта из URL
    let project_id = null 
    Object.entries(projects).map(project => project[1].id === Number(projectId) ? project_id = project[0] : null) // находим проект по id из url 
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


export const ProjectPage = connect(mapStateToProps)(ProjectPageComponent)
