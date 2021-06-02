import React from 'react'
import {connect} from 'react-redux'

// Импорт стилей
import classes from './Button.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const mapStateToProps = (state) => ({theme: state.themeState.theme})

const ButtonComponent = ({theme, ...props}) => {
    return (
        <button 
            className={cx('btn', `btn-theme-${theme}`)}
            onClick={props.onClick}
            type={props.type}
            >
            {props.btnName}
        </button>
    )
}
    

export const Button = connect(mapStateToProps)(ButtonComponent)