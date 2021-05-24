import React from 'react'
import classes from '../../../ProjectsPage/ProjectsPageContent/ProjectsPageHeader/ProjectsPageHeader.module.scss'

const ProjectHeader = ({projectName, numberOfTasks}) => {
    if (numberOfTasks) { // если есть таски
        return (
            <div id='projects-page__header' className={classes['projects-page__header-wrapper']}>
                <h1>{projectName}</h1>
                <p>Here are {numberOfTasks} tasks you've created earlier. Click on any of them to change its status or create a new one.</p>
            </div>
        )
    } else { // если у проекта еще нет тасок (только что созданный)
        return (
            <div id='projects-page__header' className={classes['projects-page__header-wrapper']}>
                <h1>{projectName}</h1>
                <p>Currently there is no tasks. You can create a new one!</p>
            </div>
        )
    }
}

export default ProjectHeader