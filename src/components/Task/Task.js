import React from 'react'

// Импоррт компонентов
import Button from '../UI/Button/Button'

// Импорт контекста 
import { ThemeContext } from "../App/ThemeContext"

// Импорт стилей
import classes from './Task.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const Task = ({ id, name, description, completed, onClick }) => {
    const classTaskStatus = completed ? classes.completed : classes.incompleted // возвратим разные классы в зависимости от completed-статуса таски
    return (
      <ThemeContext.Consumer>
        {theme => (
            // в зависимости от темы приложения и completed-статуса таски возвращаем стили
            <div id={id} className={cx('task', `task-theme-${theme}`, `${classTaskStatus}`)}> 
                <h2>{name}</h2>
                <p>{description}</p>
                { completed ? <Button btnName='Undone' onClick={() => onClick(id)}/> : <Button btnName='Done' onClick={() => onClick(id)}/> }
            </div>
        )}
      </ThemeContext.Consumer>
    )}


export default Task