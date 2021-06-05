import { ADD_PROJECT } from '../../actions/projects/projects'
import projectsAndTasks from '../../components/ProjectsData/projectsData';
import normalizeProjectsAndTasks from '../../components/ProjectsData/stateNormalizer';

const {projectsById} = normalizeProjectsAndTasks(projectsAndTasks)

const initialState = {
  projects: projectsById
}

export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PROJECT: {
        return { ...state, projects: action.payload }
      }
      default:
        return state;
    }
  };
