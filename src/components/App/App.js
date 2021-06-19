import React from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom"
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { rootReducer } from '../../reducers/combiner/combiner' // Импорт общего reducer'а
// Импорт компонентов
import {HomePage} from './HomePage/HomePage'
import {ProjectsPage} from '../ProjectsPage/ProjectsPage'
import {ProjectPage} from '../ProjectPage/ProjectPage'
import {PageNotFound} from './PageNotFound/PageNotFound'
// Импорт стилей 
import '../App/App.scss';
// Инициализация store
const store = createStore(rootReducer, applyMiddleware(thunk))

export const App =() => {
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
            </Switch>
        </BrowserRouter>
      </Provider>
    )
}
