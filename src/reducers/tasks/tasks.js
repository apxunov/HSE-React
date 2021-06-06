import { ADD_TASK, CHANGE_TASK_STATUS } from '../../actions/tasks/tasks';
import projectsAndTasks from '../../components/ProjectsData/projectsData';
import normalizeProjectsAndTasks from '../../components/ProjectsData/stateNormalizer';

const {projectsById, tasksById} = normalizeProjectsAndTasks(projectsAndTasks)

const initialState = {
  projects: projectsById,
  tasks: tasksById
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK: {
        const {projectId, taskId, taskName, taskDescription} = action
        
        const newProjectsList = {...state.projects}
        newProjectsList[projectId]?.tasksIds.push(taskId)

        const newTasksList = {...state.tasks}
        newTasksList[taskId] = {
          id: taskId,
          name: taskName,
          descriptiom: taskDescription,
          completed: false
        }

        console.log('UPDATE from TASKSREDUCER', newTasksList, newProjectsList);
        return { 
          ...state, 
          projects: newProjectsList,
          tasks: newTasksList
        }
      }
      case CHANGE_TASK_STATUS: {
          let taskToChangeStatusID = action.id
          let updatedTasksList = {...state.tasks}
          updatedTasksList[taskToChangeStatusID].completed = !action.status
          return {
              ...state,
              tasks: updatedTasksList
          }
      }
      default:
        return state;
    }
  };
