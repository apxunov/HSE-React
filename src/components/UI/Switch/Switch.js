import React from 'react'

// Импорт стилей
import classes from '../Switch/Switch.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const Switch = ( {themeChangeHadnler} ) => {
    return (
        <div className={cx("switcher_wrapper")}>
            <label className={cx("switch")}>
                <input onChange={themeChangeHadnler} type="checkbox"/>
                <span className={cx("slider", "round")} ></span>
            </label>
        </div>
    )
  }

export default Switch