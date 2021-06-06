import React from 'react'
import {connect} from 'react-redux'
import { handleTaskStatusChange } from '../../../../../actions/tasks/tasks'

// Импоррт компонентов
import {Button} from '../../../../UI/Button/Button'

// Импорт стилей
import classes from './Task.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const mapStateToProps = (state) => (
    {
        theme: state.themeState.theme,
        tasks: state.tasksByIds.tasks
    }
)

const mapDispatchToProps = (dispatch) => ({
    dispatchOnStatusChange: (id, status) => dispatch(handleTaskStatusChange(id, status))
})

const TaskComponent = (
    { 
        theme, 
        id, name, description, completed, 
        dispatchOnStatusChange
        // onClick 
    }) => {
    const classTaskStatus = completed ? classes.completed : classes.incompleted // возвратим разные классы в зависимости от completed-статуса таски
    return (
            // в зависимости от темы приложения и completed-статуса таски возвращаем стили
            <div id={id} className={cx('task', `task-theme-${theme}`, `${classTaskStatus}`)}> 
                <h2>{name}</h2>
                <p>{description}</p>
                { completed ? <Button btnName='Undone' onClick={() => dispatchOnStatusChange(id, completed)}/> : <Button btnName='Done' onClick={() => dispatchOnStatusChange(id, completed)}/> }
            </div>
        )}



export const Task = connect(mapStateToProps, mapDispatchToProps)(TaskComponent)