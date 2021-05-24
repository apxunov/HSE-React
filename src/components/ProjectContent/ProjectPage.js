import React from 'react'
import ProjectContent from './ProjectContent'

import {useParams} from 'react-router-dom'

const ProjectPage = ({projectsById, tasksById, taskAddHandler, changeTaskStatusHandler}) => {
    const { projectId } = useParams() // получаем id проекта из URL
    const project = projectsById[projectId]
    const { tasksIds } = project
    const tasks = tasksIds.map( taskId => tasksById[taskId] )

    return (
        <ProjectContent
            projectId={projectId}
            tasks={tasks}
            taskAddHandler={taskAddHandler}
            changeTaskStatusHandler={changeTaskStatusHandler}
        />
    )
}

export default ProjectPage