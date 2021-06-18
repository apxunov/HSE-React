import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {Task} from './Task/Task'
import { fetchDataLoaded } from '../../../../actions/projects_and_tasks/projects_and_tasks'

const mapStateToProps = (state) => {
    console.log('taskslist', state);
    return({
        tasks: state.applicationData.tasksByIds,
        projects: state.applicationData.projectsByIds
    })
}

const mapDispatchToProps = (dispatch) => ({
    dispatchFetchDataLoaded: (projects, tasks) => dispatch(fetchDataLoaded(projects, tasks))
})

const TaskListComponent = ( {projectId, projects, tasks} ) => {
    const searchForTask = (tasksIds, tasksList) => {
        const specificTasksList = {}
        Object.values(tasksIds)?.map( taskId => {
            return Object.values(tasksList).map( (task) => {
                return task.id.toString() === taskId.toString() 
                ? specificTasksList[taskId] = task
                : null
            })
        })
        return specificTasksList
    }
    const projectTasksIds = projects[projectId]?.tasksIds
    const projectTasks = searchForTask(projectTasksIds, tasks)

    if (projectTasks) {
        return (
            Object.values(projectTasks).map( task => {
                return (
                    <Task
                        projectId={projectId}
                        key={task.id}
                        id={task.id}
                    />
                )
            })
        )
    }
    else {
        return (<Redirect to='/404'/>)
    }
}

export const TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskListComponent)