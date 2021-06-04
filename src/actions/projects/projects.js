export const ADD_PROJECT = 'ADD_PROJECT'

export const handleProjectAdd = (project) => ({ 
    type: ADD_PROJECT,
    payload: project
  })