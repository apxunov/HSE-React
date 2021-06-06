import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {Task} from './Task/Task'

const mapStateToProps = (state) => ({tasks: state.tasksByIds.tasks})

const TaskListComponent = ( {tasks, onClick} ) => {
    if (tasks) {
        return (
            Object.values(tasks).map( task => {
                return (
                    <Task
                        key={task.id}
                        id={task.id}
                        name={task.name}
                        description={task.description}
                        completed={task.completed}
                        onClick={onClick}
                    />
                )
            })
        )
    }
    else {
        return (<Redirect to='/404'/>)
    }
}

export const TaskList = connect(mapStateToProps)(TaskListComponent)