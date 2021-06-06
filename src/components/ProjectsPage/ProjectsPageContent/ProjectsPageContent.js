import React from 'react'

import ProjectsPageHeader from './ProjectsPageHeader/ProjectsPageHeader'
import {ProjectsList} from './ProjectsList/ProjectsList'
import {ProjectAdd} from './ProjectAdd/ProjectAdd'

import classes from './ProjectsPageContent.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const ProjectsPage = () => {
    return (
        <>
            <ProjectsPageHeader/>
            <div className={cx('projects-page__projects')}>
                <ProjectAdd/>
                <ProjectsList/>
            </div>
        </>
    )
}

export default ProjectsPage