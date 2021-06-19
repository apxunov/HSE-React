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
        completed,
        projectId,
        dispatchOnStatusChange
    }) => {

    const task = tasks[id]
    const classTaskStatus = completed ? classes.completed : classes.incompleted // возвратим разные классы в зависимости от completed-статуса таски
    
    const handleClick = () => {
        return dispatchOnStatusChange(projectId,task.id, task.name, task.description, completed)
    }

    return (
            // в зависимости от темы приложения и completed-статуса таски возвращаем стили
            <div id={id} className={cx('task', `task-theme-${theme}`, `${classTaskStatus}`)}> 
                <h2>{task.name}</h2>
                <p>{task.description}</p>
                { 
                completed 
                    ?   <Button btnName='Undone' onClick={handleClick}/> 
                    :   <Button btnName='Done' onClick={handleClick}/> 
                }
            </div>
        )}



export const Task = connect(mapStateToProps, mapDispatchToProps)(TaskComponent)