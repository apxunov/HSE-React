import React from 'react'
import '../App/App.scss';
// import { BrowserRouter, Switch, Route, Link, Redirect, withRouter } from "react-router-dom"
import { BrowserRouter, Route} from "react-router-dom"


// Импорт компонентов

// import ProjectContent from '../ProjectContent/ProjectContent'
// import ThemeSwitcher from '../UI/ThemeSwitcher/ThemeSwitcher'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
//import ProjectContent from '../ProjectContent/ProjectContent'
import ProjectPage from '../ProjectContent/ProjectPage'

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
  changeTaskStatusHandler = (taskId) => {
    const taskToChange = this.state.tasksById[taskId]
    const taskToChange_updatedStatus = { ...taskToChange, completed: !taskToChange.completed }

    this.setState( (currentState) => ({
        tasksById: {
          ...currentState.tasksById, 
          [taskId]: taskToChange_updatedStatus
        }
    }))
  }

  // Добавление таски
  taskAddHandler = (projectId, taskName, taskDescription) => {
    taskName&&taskDescription 
    ? this.setState( (currentState) => {
      const projectTasksIdsList = [...currentState.projectsById[projectId].tasksIds]
      const tasksList = {...currentState.tasksById};
      
      // Ставим новой таске Id последней +1
      function getLastId(tasks) {
        let lastId = 0
        for (let task in tasks) {
          if (lastId <= task) {
            lastId++
          } else {return lastId}
        }
        return lastId
      }

      const lastTask_id = getLastId(tasksList)
      const newTask_id = lastTask_id+1
      const projectNewTask_id = getLastId(projectTasksIdsList)

      // новый ProjectsByIds
      projectTasksIdsList[projectNewTask_id] = newTask_id

      // новый TasksByIds
      tasksList[newTask_id] = {
        id: newTask_id,
        name: taskName,
        description: taskDescription,
        completed: false
      }

      return {
        projectsById: { // соответсвующему проекту присваиваем новый массив айдишников тасок
          ...currentState.projectsById,
          [projectId]: { tasksIds: projectTasksIdsList}
        },
        tasksById: tasksList // обновляем массив айдишников всех тасок
      }
      
    } )
    : alert('Enter NEW TASK name and description')
  }

  // Смена темы
  themeChangeHadnler = (event) => {
    const themeMode = event.target.checked ? 'dark' : 'light'
    this.setState( {theme: themeMode} )
  }

  // Создавние нового проекта
  onProjectAddHandler = (projectName, projectDescription) => {
    // Новый проект будет иметь Id последнего +1
    function setNewProjectId(projects) {
      let lastId = 0
      for (let projectId in projects) {
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
            <Route exact path='/'></Route>
            <Route exact path='/projects'>
                <ProjectsPage 
                  projectsById={this.state.projectsById} 
                  tasksById={this.state.tasksById}
                  themeChangeHadnler={this.themeChangeHadnler}
                  onProjectAddHandler={this.onProjectAddHandler}
                />
            </Route>
            <Route exact path='/projects/:projectId'>
                <ProjectPage
                  taskAddHandler={this.taskAddHandler}
                  changeTaskStatusHandler={this.changeTaskStatusHandler}
                  projectsById={this.state.projectsById} 
                  tasksById={this.state.tasksById}
                  // tasks={this.getProjectTasks()}
                />
            </Route>
            
          {/* <section className={cx('application-wrapper', `application-wrapper-theme-${this.state.theme}`)}>
                <>
                  <ThemeSwitcher
                      themeChangeHadnler={this.themeChangeHadnler}
                  />
                  <ProjectContent 
                      tasks={this.state.tasks}
                      taskAddHandler={this.taskAddHandler}
                      changeTaskStatusHandler={this.changeTaskStatusHandler}
                  />
                </>
          </section> */}
        </ThemeContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App;
