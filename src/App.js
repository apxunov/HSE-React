import React from 'react'
import './App.css';

import TaskList from './components/TaskList/TaskList'
import TaskAdd from './components/TaskAdd/TaskAdd';


class MyTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  handleTaskStatus = (event) => {
    const clickedBtn = event.target // находим нажатую внтури Task кнопку
    const taskID = clickedBtn.closest('div').id // получаем id Task'а

    this.setState((currentState) => {
      const newTasksList = [...currentState.tasks] // дублируем стейт
      newTasksList[taskID-1] = { ...newTasksList[taskID-1], completed: !currentState.tasks[taskID-1].completed } // инвертируем булевое значение
      return {
        tasks: newTasksList // сетим новым стейт
      }
    })
  }

  submitHandler = (event) => {
    event.preventDefault()

    const name = document.getElementsByName('taskName')[0].value // инпут названия таска
    const description = document.getElementsByName('taskDescription')[0].value // инпут описания таска

    description&&name ? this.setState( (currentState) => { // если поля desription и name заполнены.. 
      const newTasksList = [...currentState.tasks] // дублируем таски из стейта
      const tasksLastID = newTasksList.length // присвоем IDшник новой таске = +1 к последнему таскID из стейта
      newTasksList[tasksLastID] = { // если name и desciption заполнены..
        id: tasksLastID+1, // то творим новый объект для нового таска
        name: name,
        description: description,
        completed: false
      } 

      return {
        tasks: newTasksList //.. то обновляем стейт
      }
    })
    : alert('Enter name and description!') // ..а если пусты, то алёртим пользователя, чтобы тот внес данные
  }

  render() {
    const tasks = this.state.tasks 

    return (
      <>
        <TaskAdd
            onSubmit={this.submitHandler}/>
        <TaskList
            tasksList={tasks}
            onClick={this.handleTaskStatus}
        />
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
