export const PROJECT_NAME_CHANGE = 'PROJECT_NAME_CHANGE'
export const PROJECT_DESCRIPTION_CHANGE = 'PROJECT_DESCRIPTION_CHANGE'

export const handleProjectNameChange = (name) => ({ 
    type: PROJECT_NAME_CHANGE,
    payload: name
})

export const handleProjectDescriptionChange = (description) => ({ 
    type: PROJECT_NAME_CHANGE,
    payload: description
})
