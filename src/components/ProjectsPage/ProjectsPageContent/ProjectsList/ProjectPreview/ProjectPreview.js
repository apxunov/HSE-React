import React from 'react'

// Импорт контекста 
import { ThemeContext } from "../../../../App/ThemeContext"

// Импорт стилей
import classes from './ProjectPreview.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)


const ProjectPreview = ({name, description, tasksNum}) => {
    return (<ThemeContext.Consumer>
        {theme => {
            return (
                <div className={cx('project', `project-theme-${theme}`)}>
                    <h2>{name}</h2>
                    {tasksNum 
                        ? <p>{description}. <br/> Has {tasksNum} tasks</p> 
                        : <p>{description}. <br/> Has no tasks yet</p>}
                </div>
            )
        }}
    </ThemeContext.Consumer>)
}

export default ProjectPreview