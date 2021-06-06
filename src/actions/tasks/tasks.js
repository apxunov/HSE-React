export const ADD_TASK = 'ADD_TASK' 
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS' 

export const handleTaskAdd = (task) => ({
    type: ADD_TASK,
    payload: task
})

export const handleTaskStatusChange = (id, status) => ({
    type: CHANGE_TASK_STATUS,
    id: id,
    status: status
})