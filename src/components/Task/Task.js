import React from 'react'
import classes from './Task.module.css'

import Button from './Button/Button'

const Task = ({ id, name, description, completed }) => {
    const cls = [classes.task]
    completed ? cls.push(classes.completed) : cls.push(classes.incompleted)

    return (
      <div id={id} className={cls.join(' ')}>
          <h2>{name}</h2>
          <p>{description}</p>
          { completed ? <Button btnName='Undone'/> : <Button btnName='Done'/> }
      </div>
    )
  }

export default Task