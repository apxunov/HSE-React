import ApiService from '../../ApiService/api'

// Выгрузка данных с бэка
export const STATE_LOAD = 'STATE_LOAD'
export const fetchDataLoaded = () => (dispatch) => {
    const api = new ApiService()
    api.loadData().then( response => {
        const { projectsById, tasksById } = response
        dispatch({
            type: STATE_LOAD,
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
    .then( () => dispatch(fetchDataLoaded()))
}

// Смена статуса задачи
export const fetchStatusActionCreator = (projectId, taskId, name, description, completed) => (dispatch) => {
    const api = new ApiService()
    api.changeStatus(projectId, taskId, name, description, completed)
    .then(() => dispatch(fetchDataLoaded()))
}
