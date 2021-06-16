// import {  PROJECTS_LOAD, PROJECT_ADD, PROJECT_TASK_ADD } from '../../actions/projects/projects'

// // Импорт обработчика API
// import ApiService from '../../ApiService/api'

// const projects = new ApiService().loadProjects()
// const initialState = {
//   projects: projects,
// }

// export const projectsReducer = (state = initialState, action) => {
//         switch (action.type) {

//           case PROJECTS_LOAD: {
//             const projects = action.projects
//             console.log(projects);
//             return {
//               ...state,
//               projectsById: projects
//             }
//           }

//           case PROJECT_ADD: {
//             const newProjId = action.id
//             const newProjectsList = {...state.projects}
//             newProjectsList[newProjId] = {
//                 id: action.id,
//                 name: action.name,
//                 tasksCount: []
//             }
            
//             return {
//               ...state,
//               projects: newProjectsList
//             }
//           }

//           case PROJECT_TASK_ADD: {
//             const projectId = action.projectId
//             const newTaskId = action.taskId
//             let newProjectTasksList = {...state.projects}
//             newProjectTasksList[projectId].tasksIds.push(newTaskId)

//             return {
//               ...state,
//               projects: newProjectTasksList
//             }
//           }

//           default: return state;
//         }
        
//       };
