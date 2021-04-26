import React from 'react'
import './App.css';

import TaskList from './components/TaskList/TaskList'
import TaskAdd from './components/TaskAdd/TaskAdd';

class MyTodoList extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        name: 'Buy milk',
        description: '20 packages of Parmalat 1.5%',
        completed: true
      },
      {
        id: 2,
        name: 'Write a review',
        description: 'Write a review for season 1 of the series "Love Death + Robots"',
        completed: false
      },
      {
        id: 3,
        name: 'Find ball and sneakers',
        description: "We'll play basketball this Wednesday",
        completed: true
      },
      {
        id: 4,
        name: 'Take a pizza cooking lesson',
        description: 'Ur gf bet she cooks better🤢',
        completed: true
      },
      {
        id: 5,
        name: 'Visit parents',
        description: 'This weekend we might go for a walk. Go visit a restaurant on Kitay-Gorod',
        completed: true
      },
    ]
  }

  clickHandler = (taskID) => {
    var currTask = this.state.tasks[taskID]
    console.log(`Task ${currTask.id} completed status = ${currTask.completed}`)
  }



  render() {
    const tasks = this.state.tasks
    tasks.map( (t) => console.log(t.description))

    return (
      <>
        <TaskList
            tasksList={tasks}/>
        <TaskAdd/>
      </>
    )    
  }
}


function App() {
  return (
      <div className='tasks-wrapper__layout'>
        <MyTodoList/>
      </div>
  )
}

export default App;
