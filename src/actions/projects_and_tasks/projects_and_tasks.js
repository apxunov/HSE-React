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