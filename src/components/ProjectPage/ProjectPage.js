import React from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'

import {ThemeSwitcher} from '../UI/ThemeSwitcher/ThemeSwitcher'
import ProjectContent from './ProjectContent/ProjectContent'
import BackButton from '../UI/BackButton/BackButton'

import classes from '../ProjectsPage/ProjectsPage.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const mapStateToProps = (state) => ({theme: state.themeState.theme}) // из store нам нужна только Тема (light или dark)

const ProjectPageComponent = ({theme, projectsById, tasksById, taskAddHandler, changeTaskStatusHandler}) => {
    const { projectId } = useParams() // получаем id проекта из URL
    const project = projectsById[projectId]
    const projectName = project?.name
    const tasksIds = project?.tasksIds
    const tasks = tasksIds?.map( taskId => tasksById[taskId] )

    return (
            <section className={cx('application-wrapper', `application-wrapper-theme-${theme}`)}>
                <BackButton/>
            <> 
                <ThemeSwitcher/>
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
    }


export const ProjectPage = connect(mapStateToProps)(ProjectPageComponent)
