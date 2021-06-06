import { ADD_TASK, CHANGE_TASK_STATUS } from '../../actions/tasks/tasks';
import projectsAndTasks from '../../components/ProjectsData/projectsData';
import normalizeProjectsAndTasks from '../../components/ProjectsData/stateNormalizer';

const {tasksById} = normalizeProjectsAndTasks(projectsAndTasks)

const initialState = {
  tasks: tasksById
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK: {
        const {taskId, taskName, taskDescription} = action
        const newTasksList = {...state.tasks}
        newTasksList[taskId] = {
          id: taskId,
          name: taskName,
          description: taskDescription,
          completed: false
        }
        return { 
          ...state, 
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
