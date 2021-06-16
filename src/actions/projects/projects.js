// import ApiService from '../../ApiService/api'

// export const PROJECTS_LOAD = 'PROJECTS_LOAD'
// export const PROJECT_ADD = 'PROJECT_ADD'
// export const PROJECT_TASK_ADD = 'PROJECT_TASK_ADD'

// export const fetchProjectsLoaded = () => (dispatch, getState) => {
//     ApiService.loadProjects().then( projects => {
//         dispatch({
//             type: PROJECTS_LOAD,
//             projects: projects
//         })
//     })
// }

// export const handleProjectAdd = (id, name) => ({
//     type: PROJECT_ADD,
//     id: id,
//     name: name,
//     tasksCount: []
// })

// export const handleProjectTaskAdd = (projectId, taskId, taskName, taskDescription, taskStatus) => ({
//     type: PROJECT_TASK_ADD,
//     projectId: projectId,
//     taskId: taskId,
//     taskName: taskName,
//     taskDescription: taskDescription,
//     taskStatus: taskStatus
// })
