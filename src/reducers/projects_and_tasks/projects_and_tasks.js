import {  PROJECTS_LOAD } from '../../actions/projects_and_tasks/projects_and_tasks'

const initialState = []

export const projects_and_tasks_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case PROJECTS_LOAD: {
            return {
                ...state,
                projectsByIds: action.projects,
                tasksByIds: action.tasks
            }
        }   
        default: return state
    }
}