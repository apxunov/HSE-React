import ApiService from '../../ApiService/api'

export const PROJECTS_LOAD = 'PROJECTS_LOAD'
export const fetchDataLoaded = () => (dispatch) => {
    const api = new ApiService()
    api.loadData().then( response => {
        const { projectsById, tasksById } = response
        dispatch({
            type: PROJECTS_LOAD,
            projects: projectsById,
            tasks: tasksById
        })
    })
}

// Добавление проекта (на бэкенд)
export const fetchProjectUploadActionCreator = (projectName) => (dispatch) => {
    const api = new ApiService()
    api.uploadProject(projectName)
    .then(() => dispatch(fetchDataLoaded()))
}

// Добавление задачи
export const fetchTaskUploadActionCreator = (projectId, taskName, taskDescription) => (dispatch) => {
    const api = new ApiService()
    api.uploadTask(projectId, taskName, taskDescription)
    .then(() => dispatch(fetchDataLoaded()))
}
