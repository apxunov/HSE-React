import React from 'react'

import {ThemeContext} from '../../App/ThemeContext'

// Импорт стилей
import classes from '../ThemeSwitcher/ThemeSwitcher.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const ThemeSwitcher = ( {themeChangeHandler, themeTurnedToDark} ) => {
    return (
        <ThemeContext.Consumer>
            {theme => {
                 return (
                    <div className={cx("switcher_wrapper")}>
                        <label className={cx("switch")}>
                            <input onChange={themeChangeHandler} checked={ themeTurnedToDark ? 'checked' : null} type="checkbox"/>
                            <span className={cx("slider", `slider-${theme}`, "round")} ></span>
                        </label>
                    </div>
                )
            }}
        </ThemeContext.Consumer>
    )
  }

export default ThemeSwitcher