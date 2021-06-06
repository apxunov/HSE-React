import React from 'react'
import { connect } from 'react-redux'
import { handleThemeChange } from '../../../actions/theme/theme';

// Импорт стилей
import classes from '../ThemeSwitcher/ThemeSwitcher.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const mapStateToProps = (state) => ({
    theme: state.themeState.theme,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchOnThemeChange: (theme) => dispatch(handleThemeChange(theme))
  });

const ThemeSwitcherComponent = ( {theme, dispatchOnThemeChange} ) => {
    const onThemeChange = (event) => {
        const themeMode = event.target.checked ? 'dark' : 'light'
        dispatchOnThemeChange(themeMode)
    }
    return (
        <div className={cx("switcher_wrapper")}>
            <label className={cx("switch")}>
                <input onChange={onThemeChange} checked={ theme === 'dark' ? 'checked' : null} type="checkbox"/>
                <span className={cx("slider", `slider-${theme}`, "round")} ></span>
            </label>
        </div>
    )
  }

export const ThemeSwitcher = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcherComponent)