import React from 'react'

import classes from './ProjectsPageHeader.module.scss'

const ProjectsPageHeader = () => {
    return (
        <div id='projects-page__header' className={classes['projects-page__header-wrapper']}>
            <h1>Projects</h1>
            <p>Here are projects you've created earlier. Click on any of them to see its tasks or create a new one.</p>
        </div>
    )
}

export default ProjectsPageHeader