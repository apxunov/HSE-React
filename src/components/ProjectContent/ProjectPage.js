import React from 'react'
import ProjectContent from './ProjectContent'

import {useParams} from 'react-router-dom'

const ProjectPage = ({projectsById, tasksById, submitHandler, handleTaskStatus}) => {
    const { projectId } = useParams() // получаем id проекта из URL
    const project = projectsById[projectId]
    const { tasksIds } = project
    const tasks = tasksIds.map( taskId => tasksById[taskId] )

    return (
        <ProjectContent
            projectId={projectId}
            tasks={tasks}
            submitHandler={submitHandler}
            handleTaskStatus={handleTaskStatus}
        />
    )
}

export default ProjectPage