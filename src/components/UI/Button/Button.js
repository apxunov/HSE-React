import React from 'react'

// Импорт контекста 
import { ThemeContext } from "../../App/ThemeContext"

// Импорт стилей
import classes from './Button.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)


const Button = (props) => {
    return (
        <ThemeContext.Consumer>
            {theme => (
                 <button 
                 className={cx('btn', `btn-theme-${theme}`)}
                 onClick={props.onClick}
                 type={props.type}
                 >
                 {props.btnName}
             </button>
            )}
        </ThemeContext.Consumer>
    )
  }

export default Button