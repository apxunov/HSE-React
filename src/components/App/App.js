import React from 'react'
import '../App/App.scss';
// import { BrowserRouter, Switch, Route, Link, Redirect, withRouter } from "react-router-dom"
import { BrowserRouter, Route} from "react-router-dom"


// Импорт компонентов
import ApplicationWrapper from './ApplicationWrapper/ApplicationWrapper'
// import ProjectContent from '../ProjectContent/ProjectContent'
// import ThemeSwitcher from '../UI/ThemeSwitcher/ThemeSwitcher'
import ProjectsPage from '../ProjectsPage/ProjectsPage'

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

  // Создавние нового проекта
  onProjectAddHandler = (projectName, projectDescription) => {
    console.log(projectName, projectDescription);

    // Новый проект будет иметь Id последнего +1
    function setNewProjectId(projects) {
      let lastId = 0
      for (let projectId in projects) {
        console.log(projectId);
        if (lastId <= projectId) {
          lastId++
        } else {return ++lastId}
      }
      return ++lastId
    }

    projectName&&projectDescription 
    ? this.setState( (currentState) => {
        const newProjectsList = {...currentState.projectsById}
        const projectToBeAddedID = setNewProjectId(newProjectsList)
        newProjectsList[projectToBeAddedID] = {
          id: projectToBeAddedID,
          name: projectName,
          description: projectDescription,
          tasks: []
        }
        return {
          projectsById: newProjectsList
        }
    })
    : alert('Enter PROJECT name and description!') 
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeContext.Provider value={this.state.theme}>
          {/* <ApplicationWrapper> */}
            <Route exact path='/'></Route>
          
            <Route path='/projects'>
                <ProjectsPage 
                  projectsById={this.state.projectsById} 
                  tasksById={this.state.tasksById}
                  themeChangeHadnler={this.themeChangeHadnler}
                  onProjectAddHandler={this.onProjectAddHandler}
                />
            </Route>
          {/* </ApplicationWrapper> */}
            
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
