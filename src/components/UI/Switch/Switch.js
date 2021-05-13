import React from 'react'
import classes from '../Switch/Switch.module.scss'

import classnames from "classnames/bind"
const cx = classnames.bind(classes)


const Switch = () => {
    return (
        <div className={cx("switcher_wrapper")}>
            <label className={cx("switch")}>
                <input type="checkbox"/>
                <span className={cx("slider", "round")} ></span>
            </label>
        </div>
    )
  }

export default Switch