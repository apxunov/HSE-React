import React from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Импорт компонентов
import {HomePage} from './HomePage/HomePage'
import {ProjectsPage} from '../ProjectsPage/ProjectsPage'
import {ProjectPage} from '../ProjectPage/ProjectPage'
import {PageNotFound} from './PageNotFound/PageNotFound'
import { rootReducer } from '../../reducers/index' // Импорт общего reducer'а

// Импорт стилей 
import '../App/App.scss';

// Импорт данных
import projects from '../ProjectsData/projectsData'
import normalizeState from '../ProjectsData/stateNormalizer'
// Функция нормализует "стейт" (файл projects со вложенной структорой) и вернет на выходе объект со вложенными projectsById и tasksById
const {projectsById, tasksById} = normalizeState(projects)

// Инициализация store
const store = createStore(rootReducer)

class App extends React.Component {
  state = {
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
          [projectId]: { ...currentState.projectsById[projectId], 
              tasksIds: projectTasksIdsList
          }
        },
        tasksById: tasksList // обновляем массив айдишников всех тасок
      }
      
    } )
    : alert('Enter NEW TASK name and description')
  }

  // Создавние нового проекта
  // onProjectAddHandler = (projectName, projectDescription) => {
  //   // Новый проект будет иметь Id последнего +1
  //   function setNewProjectId(projects) {
  //     let lastId = 0
  //     for (let projectId in projects) {
  //       if (lastId <= projectId) {
  //         lastId++
  //       } else {return ++lastId}
  //     }
  //     return ++lastId
  //   }

  //   projectName&&projectDescription 
  //   ? this.setState( (currentState) => {
  //       const newProjectsList = {...currentState.projectsById}
  //       const projectToBeAddedID = setNewProjectId(newProjectsList)
  //       newProjectsList[projectToBeAddedID] = {
  //         id: projectToBeAddedID,
  //         name: projectName,
  //         description: projectDescription,
  //         tasksIds: []
  //       }
  //       return {
  //         projectsById: newProjectsList
  //       }
  //   })
  //   : alert('Enter PROJECT name and description!') 
  // }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Switch>
              <Route exact path='/'>
                <HomePage/>
              </Route>
              <Route exact path='/projects'>
                  <ProjectsPage />
              </Route>
              <Route exact path='/projects/:projectId'>
                  <ProjectPage/>
              </Route>
              <Route>
                <PageNotFound/>
              </Route>
              <Route exact path='/404'>
                <PageNotFound/>
              </Route>
            </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
