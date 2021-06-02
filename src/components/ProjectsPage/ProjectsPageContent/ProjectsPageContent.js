import React from 'react'

import ProjectsPageHeader from './ProjectsPageHeader/ProjectsPageHeader'
import ProjectsList from './ProjectsList/ProjectsList'
import {ProjectAdd} from './ProjectAdd/ProjectAdd'

import classes from './ProjectsPageContent.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const ProjectsPage = ({projectsById, tasksById, onProjectAddHandler}) => {
    return (
        <>
            <ProjectsPageHeader/>
            <div className={cx('projects-page__projects')}>
                <ProjectAdd onProjectAddHandler={onProjectAddHandler}/>
                <ProjectsList 
                    projectsById={projectsById}
                    tasksById={tasksById}
                />
            </div>
        </>
    )
}

export default ProjectsPage