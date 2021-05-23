import React from 'react'
import '../App/App.scss';

// Импорт компонентов
import MyTodoList from '../MyTodoList/MyTodoList'
import Switch from '../UI/Switch/Switch'

// Импорт контекста
import { DEFAULT_THEME, ThemeContext } from "./ThemeContext"

import classes from './App.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)
// import { createGlobalStyle } from 'styled-components'

class App extends React.Component {
  state = {
    theme: DEFAULT_THEME,
    projects: [
      {
        id: 1,
        name: 'Main stuff',
        description: 'Here are a few tasks that should be completed this month',
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
          }
        ]
      },
      { 
        id: 2,
        name: 'University',
        description: 'Here are the university tasks that need to be done',
        tasks: [
          {
            id: 6,
            name: 'IT-infrastructure',
            description: '5th Lab. 23:59 LMS May 26',
            completed: true
          },
          {
            id: 7,
            name: 'Strategic management',
            description: 'The 2nd group project was listed. We need to show it until 30th of May',
            completed: false
          },
          {
            id: 8,
            name: 'Find mates for strategic management',
            description: "2nd group project is coming soon",
            completed: true
          },
          {
            id: 9,
            name: 'ImProfEdu',
            description: '5th HW – take a video',
            completed: true
          }
        ]
      }
    ]
  };

  // Смена статуса таски completed: done / undone
  handleTaskStatus = (taskID) => {
    const taskToChange_id = this.state.tasks.findIndex((task) => task.id === taskID); // находим id таски, которую нужно изменить 
    this.setState((currentState) => {
      const newTasksList = [...currentState.tasks] // дублируем стейт
      newTasksList[taskToChange_id] = { ...newTasksList[taskToChange_id], completed: !currentState.tasks[taskToChange_id].completed } // инвертируем булевое значение
      return {
        tasks: newTasksList // сетим новым стейт
      }
    })
  }

  // Добавление таски
  submitHandler = (name, value) => {
    name&&value ? this.setState( (currentState) => { // если поля desription и name заполнены.. 
      const newTasksList = [...currentState.tasks] // дублируем таски из стейта
      const tasksLastID = newTasksList.length // присвоем IDшник новой таске = +1 к последнему таскID из стейта
      newTasksList[tasksLastID] = { // если name и desciption заполнены..
        id: tasksLastID+1, // то творим новый объект для нового таска
        name: name,
        description: value,
        completed: false
      } 

      return {
        tasks: newTasksList //.. то обновляем стейт
      }
    })
    : alert('Enter name and description!') // ..а если пусты, то алёртим пользователя, чтобы тот внес данные
  }

  // Смена темы
  themeChangeHadnler = (event) => {
    const themeMode = event.target.checked ? 'dark' : 'light'
    this.setState( {theme: themeMode} )
  }

  render() {
    // Нормализация стейта
    const normalizeState = projectsArray => { 
      const normalizedProjectsArray = {} // проекты с айдишниками тасок
      const normalizedTasksArray = {} // все таски 
      
      const normilizedState = { 
        projectsById: normalizedProjectsArray,
        tasksById: normalizedTasksArray
      }

      // Получить ID тасок по проекту
      const getTasksIdsByProject = tasks => {
        const projectTasksIds = []
        tasks.map(task => projectTasksIds.push(task.id))
        return projectTasksIds
      }

      projectsArray.map( project => {
        const projectTasks = project.tasks
        projectTasks.map( task => {
          return normalizedTasksArray[task.id] = {
            id: task.id,
            name: task.name,
            description: task.description,
            completed: task.completed
          }
        })
        return normalizedProjectsArray[project.id] = {
          id: project.id,
          name: project.name,
          tasksIds: getTasksIdsByProject(project.tasks)
        }
      })

      return normilizedState
    };


    const {projectsById: projects, tasksById: tasks} = normalizeState(this.state.projects)
    console.log('PROJECTS', projects);
    console.log('TASKS', tasks);

    return (
      <section className={cx('application-wrapper', `application-wrapper-theme-${this.state.theme}`)}>
        <div className={cx('tasks-wrapper__layout')}>
          <ThemeContext.Provider value={this.state.theme}>
            <>
              <Switch
                  themeChangeHadnler={this.themeChangeHadnler}
              />
              <MyTodoList 
                  tasks={this.state.tasks}
                  submitHandler={this.submitHandler}
                  handleTaskStatus={this.handleTaskStatus}
              />
            </>
          </ThemeContext.Provider>
        </div>
      </section>
    )
  }
}

export default App;
