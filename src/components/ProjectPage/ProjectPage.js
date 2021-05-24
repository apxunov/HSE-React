import React from 'react'
import {useParams} from 'react-router-dom'

import ThemeSwitcher from '../UI/ThemeSwitcher/ThemeSwitcher'
import ProjectContent from './ProjectContent/ProjectContent'

import {ThemeContext} from '../App/ThemeContext'

import classes from '../ProjectsPage/ProjectsPage.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const ProjectPage = ({projectsById, tasksById, taskAddHandler, changeTaskStatusHandler, themeChangeHadnler}) => {
    const { projectId } = useParams() // получаем id проекта из URL
    const project = projectsById[projectId]
    const projectName = project?.name
    const tasksIds = project?.tasksIds
    const tasks = tasksIds?.map( taskId => tasksById[taskId] )

    return (
        <ThemeContext.Consumer>
            {theme => {
                return (
                    <section className={cx('application-wrapper', `application-wrapper-theme-${theme}`)}>
                    <> 
                        <ThemeSwitcher themeChangeHadnler={themeChangeHadnler}/>
                        <ProjectContent
                            projectId={projectId}
                            projectName={projectName}
                            tasks={tasks}
                            taskAddHandler={taskAddHandler}
                            changeTaskStatusHandler={changeTaskStatusHandler}
                        />
                    </>
                    </section>
                )
            }}
        </ThemeContext.Consumer>
    )
}

export default ProjectPage