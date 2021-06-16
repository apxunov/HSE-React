import React from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'

import {ThemeSwitcher} from '../UI/ThemeSwitcher/ThemeSwitcher'
import ProjectContent from './ProjectContent/ProjectContent'
import BackButton from '../UI/BackButton/BackButton'

import classes from '../ProjectsPage/ProjectsPage.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

// const mapStateToProps = (state) => ({
//     theme: state.themeState.theme,
//     projects: state.applicationData.projectsByIds
// }) 
const mapStateToProps = (state) => {
    console.log('Project Page STATE', state);
    return ({
        theme: state.themeState.theme,
        projects: state.applicationData.projectsByIds
    })
}

const ProjectPageComponent = ({theme, projects}) => {
    const { projectId } = useParams() // получаем id проекта из URL
    const project = projects[Object.values(projects).map( (project, id) => project.id === Number(projectId) ? id : false)]
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
