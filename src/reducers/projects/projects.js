import { PROJECT_ADD, PROJECT_TASK_ADD } from '../../actions/projects/projects'
import projectsAndTasks from '../../components/ProjectsData/projectsData';
import normalizeProjectsAndTasks from '../../components/ProjectsData/stateNormalizer';

const {projectsById} = normalizeProjectsAndTasks(projectsAndTasks)

const initialState = {
  projects: projectsById,
}

export const projectsReducer = (state = initialState, action) => {
        switch (action.type) {
          case PROJECT_ADD: {
            const newProjId = action.id
            const newProjectsList = {...state.projects}
            newProjectsList[newProjId] = {
                id: action.id,
                name: action.name,
                description: action.description,
                tasksIds: []
            }
            
            console.log('projectsReducer - покажи стейт', state);
            return {
              ...state,
              projects: newProjectsList
            }
          }
          case PROJECT_TASK_ADD: {
            const projectId = action.projectId
            const newTaskId = action.taskId
            let newProjectTasksList = {...state.projects}
            newProjectTasksList[projectId].tasksIds.push(newTaskId)

            return {
              ...state,
              projects: newProjectTasksList
            }
          }
          default:
            return state;
        }
      };
