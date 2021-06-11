import React from 'react'
import classes from '../../../ProjectsPage/ProjectsPageContent/ProjectsPageHeader/ProjectsPageHeader.module.scss'

const ProjectHeader = ({projectName, numberOfTasks}) => {
    return (
        <div id='projects-page__header' className={classes['projects-page__header-wrapper']}>
            <h1>{projectName}</h1>
            {numberOfTasks 
            ? <p>Here are {numberOfTasks} tasks you've created earlier. Click on any of them to change its status or create a new one.</p> 
            : <p>Currently there is no tasks. You can create a new one!</p>
            }
        </div>
    )
}

export default ProjectHeader