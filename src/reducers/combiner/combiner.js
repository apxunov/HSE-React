import { combineReducers } from "redux";
import { themeReducer } from '../theme/theme'
import { projects_and_tasks_Reducer } from '../projects_and_tasks/projects_and_tasks'

export const rootReducer = combineReducers({
    themeState: themeReducer,
    applicationData: projects_and_tasks_Reducer
})