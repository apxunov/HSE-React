import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import {ThemeSwitcher} from '../../UI/ThemeSwitcher/ThemeSwitcher'
import {Button} from '../../UI/Button/Button'

import classes from './PageNotFound.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(classes)

const mapStateToProps = (state) => ({theme: state.themeState.theme})

const PageNotFoundComponent = ({theme}) => {
            return (
                <section className={cx('application-wrapper', `application-wrapper-theme-${theme}`)}>
                    <ThemeSwitcher/>
                    <div className={cx('notfound-wrapper')}>
                        <h1>404</h1>
                        <h2>Page not found. Click the button below to get to the projects page</h2>
                        <Link to='/projects'>
                            <Button btnName='Projects'/>
                        </Link>
                    </div>
                </section>
            )
        }

export const PageNotFound = connect(mapStateToProps)(PageNotFoundComponent)