import React from 'react'
import { useHistory } from "react-router-dom";

import cls from './BackButton.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(cls)


const BackButton = () => {
    let history = useHistory();

    return (
        <button onClick={history.goBack} className={cx('backbutton-wrapper')}>
            <span className={cx('backbutton-arrow')}></span>
            <span className={cx('backbutton-text')}>BACK</span>
        </button>
    )
}

export default BackButton