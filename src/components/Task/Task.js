import React from 'react'
import classes from './Task.module.css'

import Button from './Button/Button'

const Task = ({ id, name, description, completed, onClick }) => {
    const cls = [classes.task]
    completed ? cls.push(classes.completed) : cls.push(classes.incompleted)

    return (
      <div id={id} className={cls.join(' ')}>
          <h2>{name}</h2>
          <p>{description}</p>
          <Button onClick={onClick} btnName='Click me'/>
      </div>
    )
  }

export default Task