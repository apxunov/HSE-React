import React from 'react'
import ThemeSwitcher from '../../UI/ThemeSwitcher/ThemeSwitcher'

import {ThemeContext} from '../ThemeContext'

import classes from './ApplicationWrapper.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const ApplicationWrapper = ({themeChangeHadnler}) => {
    return(
        <ThemeContext.Consumer>
            {theme => {
                return(
                    <section className={cx('application-wrapper', `application-wrapper-theme-${theme}`)}>
                    <ThemeSwitcher
                        themeChangeHadnler={themeChangeHadnler}
                    />
                    </section>
                )
            }}
        </ThemeContext.Consumer>
    )
}

export default ApplicationWrapper