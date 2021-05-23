import React from 'react'
import '../App/App.scss';
// import { BrowserRouter, Switch, Route, Link, Redirect, withRouter } from "react-router-dom"
import { BrowserRouter} from "react-router-dom"


// Импорт компонентов
import ApplicationWrapper from './ApplicationWrapper/ApplicationWrapper'
import ProjectContent from '../ProjectContent/ProjectContent'
// import ThemeSwitcher from '../UI/ThemeSwitcher/ThemeSwitcher'

// Импорт контекста
import { DEFAULT_THEME, ThemeContext } from "./ThemeContext"

import projects from '../ProjectsData/projectsData'
import normalizeState from '../ProjectsData/stateNormalizer'

// import classes from './App.scss'
// import classnames from "classnames/bind"
// const cx = classnames.bind(classes)

// Функция нормализует "стейт" (файл projects со вложенной структорой) и вернет на выходе объект со вложенными projectsById и tasksById
const {projectsById, tasksById} = normalizeState(projects)

class App extends React.Component {
  state = {
    theme: DEFAULT_THEME,
    // нормализуем стейт, записав в него соответствующие выводы функции normalizeState
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
      <BrowserRouter>
        <ThemeContext.Provider value={this.state.theme}>
            <ApplicationWrapper themeChangeHadnler={this.themeChangeHadnler}>

            </ApplicationWrapper>
          {/* <section className={cx('application-wrapper', `application-wrapper-theme-${this.state.theme}`)}>
                <>
                  <ThemeSwitcher
                      themeChangeHadnler={this.themeChangeHadnler}
                  />
                  <ProjectContent 
                      tasks={this.state.tasks}
                      submitHandler={this.submitHandler}
                      handleTaskStatus={this.handleTaskStatus}
                  />
                </>
          </section> */}
        </ThemeContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App;
