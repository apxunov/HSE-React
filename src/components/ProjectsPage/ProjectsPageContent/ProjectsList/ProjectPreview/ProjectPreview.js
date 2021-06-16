import React from 'react'
import { connect } from 'react-redux'

// Импорт стилей
import classes from './ProjectPreview.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const mapStateToProps = (state) => {
    return({
        theme: state.themeState.theme,
    })
}

const ProjectPreviewComponent = ({theme, id, name, description, tasksCount}) => {
    return (
        <div id={`project#${id}`} className={cx('project', `project-theme-${theme}`)}>
            <h2>{name}</h2>
            {tasksCount 
                ? <p>Has {tasksCount} tasks</p> 
                : <p>Has no tasks yet.</p>}
        </div>
    )
}

export const ProjectPreview = connect(mapStateToProps)(ProjectPreviewComponent)