import ApiService from '../../ApiService/api'

export const PROJECTS_LOAD = 'PROJECTS_LOAD'
export const fetchDataLoaded = () => (dispatch) => {
    const api = new ApiService()
    api.loadData().then( response => {
        const { projects, tasks } = response
        dispatch({
            type: PROJECTS_LOAD,
            projects: projects,
            tasks: tasks
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
    console.log("HERE'S THE TASK", projectId, taskName, taskDescription)
    const api = new ApiService()
    api.uploadTask(projectId, taskName, taskDescription)
    .then(() => dispatch(fetchDataLoaded()))
}
