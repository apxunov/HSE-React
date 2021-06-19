import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {Task} from './Task/Task'
import { fetchLoadProjectTasks } from '../../../../actions/projects_and_tasks/projects_and_tasks'

const mapStateToProps = (state) => {
    console.log('taskslist', state);
    return({
        tasks: state.applicationData.currentTasks,
    })
}

const mapDispatchToProps = (dispatch) => ({
    dispatchFetchDataLoaded: (projectId) => dispatch(fetchLoadProjectTasks(projectId))
})

const TaskListComponent = ( {projectId, tasks, dispatchFetchDataLoaded} ) => {
    
    useEffect(() => {
        dispatchFetchDataLoaded(projectId)
    }, [])

    if (tasks) {
        return (
            Object.values(tasks).map( task => {
                return (
                    <Task
                        projectId={projectId}
                        key={task.id}
                        id={task.id}
                        completed={task.completed}
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