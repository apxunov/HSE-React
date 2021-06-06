import React from 'react'
import { connect } from 'react-redux'

import ProjectPageContent from './ProjectsPageContent/ProjectsPageContent'
import {ThemeSwitcher} from '../UI/ThemeSwitcher/ThemeSwitcher'
import BackButton from '../UI/BackButton/BackButton'


import classes from './ProjectsPage.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const mapStateToProps = (state) => ({theme: state.themeState.theme,})

const ProjectsPageComponent = ({theme}) => {
    return (
        <section className={cx('application-wrapper', `application-wrapper-theme-${theme}`)}>
            <BackButton/>
            <ThemeSwitcher/>
            <ProjectPageContent/>
        </section>
    )
}

export const ProjectsPage = connect(mapStateToProps)(ProjectsPageComponent)