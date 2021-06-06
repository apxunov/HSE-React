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
        return { ...state, tasks: action.payload }
      }
      case CHANGE_TASK_STATUS: {
          let taskToChangeStatusID = action.id
          let updatedTasksList = {...state.tasks}
          updatedTasksList[taskToChangeStatusID].completed = !action.status
          console.log('new tasks list', updatedTasksList);
          return {
              ...state,
              tasksByIds: updatedTasksList
          }
      }
      default:
        return state;
    }
  };
