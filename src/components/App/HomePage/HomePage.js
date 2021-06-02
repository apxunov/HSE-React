import React from 'react'
import {Link} from 'react-router-dom' // чтобы перенаправить на какую-либо страницу
import { connect } from 'react-redux' // чтобы подключить store

import {ThemeSwitcher} from '../../UI/ThemeSwitcher/ThemeSwitcher'
import Button from '../../UI/Button/Button'

import cls from './HomePage.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(cls)

const mapStateToProps = (state) => ({theme: state.themeState.theme}) // из store нам нужна только Тема (light или dark)
    
const HomePageComponent = ({theme}) => {
    return (
            <>
            <section className={cx('application-wrapper', `application-wrapper-theme-${theme}`)}>
                <ThemeSwitcher/>
                <div className={cx('homepage_backgroud', `homepage_backgroud-${theme}`)}>
                    <h1>You're on the main page</h1>
                    <p>By clicking the button below you will be redirected to projects' page</p>
                    <Link to='/projects/' style={{ textDecoration: 'none' }}>
                        <Button btnName={'Enter'}/>
                    </Link>
                </div>
            </section>
            </>
        )
    }

export const HomePage = connect(mapStateToProps)(HomePageComponent)