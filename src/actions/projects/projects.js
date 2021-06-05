export const PROJECT_ADD = 'PROJECT_ADD'

export const handleProjectAdd = (id, name, description) => ({
    type: PROJECT_ADD,
    id: id,
    name: name,
    description: description,
    tasksIds: []
})
