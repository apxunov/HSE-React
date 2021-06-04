import { combineReducers } from "redux";
import { themeReducer } from './theme/theme'
import { tasksReducer } from './tasks/tasks'

export const rootReducer = combineReducers({
    themeState: themeReducer,
    tasksReducer: tasksReducer
})