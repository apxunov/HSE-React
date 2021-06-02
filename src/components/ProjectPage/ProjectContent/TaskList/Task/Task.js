import React from 'react'
import {connect} from 'react-redux'
// Импоррт компонентов
import {Button} from '../../../../UI/Button/Button'

// Импорт стилей
import classes from './Task.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const mapStateToProps = (state) => ({theme: state.themeState.theme})

const TaskComponent = ({ theme, id, name, description, completed, onClick }) => {
    const classTaskStatus = completed ? classes.completed : classes.incompleted // возвратим разные классы в зависимости от completed-статуса таски
    return (
            // в зависимости от темы приложения и completed-статуса таски возвращаем стили
            <div id={id} className={cx('task', `task-theme-${theme}`, `${classTaskStatus}`)}> 
                <h2>{name}</h2>
                <p>{description}</p>
                { completed ? <Button btnName='Undone' onClick={() => onClick(id)}/> : <Button btnName='Done' onClick={() => onClick(id)}/> }
            </div>
        )}



export const Task = connect(mapStateToProps)(TaskComponent)