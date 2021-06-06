export const PROJECT_ADD = 'PROJECT_ADD'
export const PROJECT_TASK_ADD = 'PROJECT_TASK_ADD'

export const handleProjectAdd = (id, name, description) => ({
    type: PROJECT_ADD,
    id: id,
    name: name,
    description: description,
    tasksIds: []
})

export const handleProjectTaskAdd = (projectId, taskId, taskName, taskDescription, taskStatus) => ({
    type: PROJECT_TASK_ADD,
    projectId: projectId,
    taskId: taskId,
    taskName: taskName,
    taskDescription: taskDescription,
    taskStatus: taskStatus
})
