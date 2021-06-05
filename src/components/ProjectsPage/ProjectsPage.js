import React from 'react'
import { connect } from 'react-redux' // чтобы подключить store

import ProjectPageContent from './ProjectsPageContent/ProjectsPageContent'
import {ThemeSwitcher} from '../UI/ThemeSwitcher/ThemeSwitcher'
import BackButton from '../UI/BackButton/BackButton'


import classes from './ProjectsPage.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const mapStateToProps = (state) => {
    return({theme: state.themeState.theme})
}

const ProjectsPageComponent = ({theme, projectsById, tasksById, onProjectAddHandler}) => {
    return (
        <section className={cx('application-wrapper', `application-wrapper-theme-${theme}`)}>
            <BackButton/>
            <ThemeSwitcher/>
            <ProjectPageContent 
                projectsById={projectsById}
                tasksById={tasksById}
                onProjectAddHandler={onProjectAddHandler}
            />
        </section>
    )
}

export const ProjectsPage = connect(mapStateToProps)(ProjectsPageComponent)