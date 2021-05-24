import React from 'react'
import {Link} from 'react-router-dom'

import ThemeSwitcher from '../../UI/ThemeSwitcher/ThemeSwitcher'
import Button from '../../UI/Button/Button'
import {ThemeContext} from '../ThemeContext'

import cls from './HomePage.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(cls)

const HomePage = ({themeChangeHadnler}) => {
    return (
        <ThemeContext.Consumer>
            {theme => {
                return (
                    <>
                    <section className={cx('application-wrapper', `application-wrapper-theme-${theme}`)}>
                        <ThemeSwitcher themeChangeHadnler={themeChangeHadnler}/>
                        <div className={cx('homepage_backgroud', `homepage_backgroud-${theme}`)}>
                            <h1>You're on main page</h1>
                            <p>By clicking the button below you will be redirected to projects' page</p>
                            <Link to='/projects/' style={{ textDecoration: 'none' }}>
                                <Button btnName={'Enter'}/>
                            </Link>
                        </div>
                    </section>
                    </>
                )
            }}
        </ThemeContext.Consumer>
    )
}
export default HomePage