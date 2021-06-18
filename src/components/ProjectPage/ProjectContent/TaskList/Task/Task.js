import React from 'react'
import {connect} from 'react-redux'
import {fetchStatusActionCreator} from '../../../../../actions/projects_and_tasks/projects_and_tasks'

// Импоррт компонентов
import {Button} from '../../../../UI/Button/Button'

// Импорт стилей
import classes from './Task.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const mapStateToProps = (state) => (
    {
        theme: state.themeState.theme,
        tasks: state.applicationData.tasksByIds
    }
)

const mapDispatchToProps = (dispatch) => ({
    dispatchOnStatusChange: (projectId, taskId, name, description, completed) => dispatch(fetchStatusActionCreator(projectId, taskId, name, description, completed))
})

const TaskComponent = (
    { 
        theme, 
        tasks,
        id,
        projectId,
        dispatchOnStatusChange
    }) => {
    const task = tasks[id]
    const classTaskStatus = task.completed ? classes.completed : classes.incompleted // возвратим разные классы в зависимости от completed-статуса таски
    return (
            // в зависимости от темы приложения и completed-статуса таски возвращаем стили
            <div id={id} className={cx('task', `task-theme-${theme}`, `${classTaskStatus}`)}> 
                <h2>{task.name}</h2>
                <p>{task.description}</p>
                { 
                task.completed 
                    ?   <Button btnName='Undone' onClick={
                            () => dispatchOnStatusChange(projectId,task.id, task.name, task.description, task.completed)
                        }/> 
                    :   <Button btnName='Done' onClick={
                            () => dispatchOnStatusChange(projectId,task.id, task.name, task.description, task.completed)
                    }   /> 
                }
            </div>
        )}



export const Task = connect(mapStateToProps, mapDispatchToProps)(TaskComponent)