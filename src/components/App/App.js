import React from 'react'
import '../App/App.scss';

// Импорт компонентов
import MyTodoList from '../MyTodoList/MyTodoList'
import ThemeSwitcher from '../UI/ThemeSwitcher/ThemeSwitcher'

// Импорт контекста
import { DEFAULT_THEME, ThemeContext } from "./ThemeContext"

import projects from '../ProjectsData/projectsData'
import normalizeState from '../ProjectsData/stateNormalizer'

import classes from './App.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const {projectsById, tasksById} = normalizeState(projects)

class App extends React.Component {
  state = {
    theme: DEFAULT_THEME,
    projectsById,
    tasksById
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
    console.log(this.state);
    return (
      <section className={cx('application-wrapper', `application-wrapper-theme-${this.state.theme}`)}>
        <div className={cx('tasks-wrapper__layout')}>
          <ThemeContext.Provider value={this.state.theme}>
            <>
              <ThemeSwitcher
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
