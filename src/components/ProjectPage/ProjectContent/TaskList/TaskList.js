import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {Task} from './Task/Task'
import { fetchDataLoaded } from '../../../../actions/projects_and_tasks/projects_and_tasks'

const mapStateToProps = (state) => {
    return({
        tasks: state.applicationData.tasksByIds,
        projects: state.applicationData.projectsByIds
    })
}

const mapDispatchToProps = (dispatch) => ({
    dispatchFetchDataLoaded: (projects) => dispatch(fetchDataLoaded(projects))
})

const TaskListComponent = ( {projectId, projects, tasks} ) => {
    console.log('tasksList', tasks);
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
    const project = projects[Object.values(projects).map( (project, id) => project.id === Number(projectId) ? id : false)]
    console.log('TAKSLIST', project);
    if (project) {
        const projectTasksIds = project?.tasksIds
        return (<div></div>)
        // const projectTasks = searchForTask(projectTasksIds, tasks)
        // return (
        //     Object.values(projectTasks).map( task => {
        //         return (
        //             <Task
        //                 key={task.id}
        //                 id={task.id}
        //             />
        //         )
        //     })
        // )
    }
    else {
        return (<div/>)
        // return (<Redirect to='/404'/>)
    }
}

export const TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskListComponent)