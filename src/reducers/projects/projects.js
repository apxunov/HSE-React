import { PROJECT_NAME_CHANGE, PROJECT_DESCRIPTION_CHANGE } from '../../actions/projects/projects'
import projectsAndTasks from '../../components/ProjectsData/projectsData';
import normalizeProjectsAndTasks from '../../components/ProjectsData/stateNormalizer';

const { projectsById } = normalizeProjectsAndTasks(projectsAndTasks)

const initialState = {
  projects: projectsById,
  projectToAdd: {
    name: "",
    description: ""
  }
}

export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
      case PROJECT_NAME_CHANGE: {
        return { ...state,  
            projectToAdd: { ...state.projectToAdd, name: action.payload }
        } 
      }
      case PROJECT_DESCRIPTION_CHANGE: {
        return { ...state, 
            projectToAdd: { ...state.projectToAdd, description: action.payload }
        } 
      }
      default:
        return state;
    }
  };
