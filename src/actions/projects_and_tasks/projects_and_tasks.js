import ApiService from '../../ApiService/api'

export const PROJECTS_LOAD = 'PROJECTS_LOAD'
export const fetchDataLoaded = () => (dispatch) => {
    const api = new ApiService()
    api.loadData().then( response => {
        console.log('FETCH DATA LOADED', response);
        const { projects, tasks } = response
        console.log('projects', projects);
        dispatch({
            type: PROJECTS_LOAD,
            projects: projects,
            tasks: tasks
        })
    })
}