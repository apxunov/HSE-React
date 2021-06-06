import { combineReducers } from "redux";
import { themeReducer } from './theme/theme'
import { tasksReducer } from './tasks/tasks'
import { projectsReducer } from './projects/projects'

export const rootReducer = combineReducers({
    themeState: themeReducer,
    tasksByIds: tasksReducer,
    projectsByIds: projectsReducer
})