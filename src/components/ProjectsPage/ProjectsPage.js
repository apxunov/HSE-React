import React from 'react'

import ProjectPageContent from './ProjectsPageContent/ProjectsPageContent'
import ThemeSwitcher from '../UI/ThemeSwitcher/ThemeSwitcher'
import BackButton from '../UI/BackButton/BackButton'

import {ThemeContext} from '../App/ThemeContext'

import classes from './ProjectsPage.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const ProjectsPage = ({projectsById, tasksById, themeChangeHadnler, onProjectAddHandler}) => {
    return (
        <ThemeContext.Consumer>
        {theme => {
            return (
                <section className={cx('application-wrapper', `application-wrapper-theme-${theme}`)}>
                    <BackButton/>
                    <ThemeSwitcher themeChangeHadnler={themeChangeHadnler}/>
                    <ProjectPageContent 
                        projectsById={projectsById}
                        tasksById={tasksById}
                        onProjectAddHandler={onProjectAddHandler}
                    />
                </section>
            )
        }}
        </ThemeContext.Consumer>
    )
}

export default ProjectsPage