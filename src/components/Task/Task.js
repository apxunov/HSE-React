import React from 'react'
import classes from './Task.module.css'

import Button from './Button/Button'

const Task = ({ id, name, description, completed }) => {
    const cls = [classes.task]
    completed ? cls.push(classes.completed) : cls.push(classes.incompleted)

    const handleClick = () => { return (console.log(`Task ${id} completed status = ${completed}`)) }

    return (
      <div id={id} className={cls.join(' ')}>
          <h2>{name}</h2>
          <p>{description}</p>
          <Button onClick={handleClick} btnName='Click me'/>
      </div>
    )
  }

export default Task