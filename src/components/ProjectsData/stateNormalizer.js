export default function normalizeState(projectsArray) { 
    const normalizedProjectsArray = {} // проекты с айдишниками тасок
    const normalizedTasksArray = {} // все таски 
    
    const normilizedState = { 
      projectsById: normalizedProjectsArray,
      tasksById: normalizedTasksArray
    }

    // Получить ID тасок по проекту
    const getTasksIdsByProject = tasks => {
      const projectTasksIds = []
      tasks.map(task => projectTasksIds.push(task.id))
      return projectTasksIds
    }

    projectsArray.map( project => {
      const projectTasks = project.tasks
      projectTasks.map( task => {
        return normalizedTasksArray[task.id] = {
          id: task.id,
          name: task.name,
          description: task.description,
          completed: task.completed
        }
      })
      return normalizedProjectsArray[project.id] = {
        id: project.id,
        name: project.name,
        description: project.description,
        tasksIds: getTasksIdsByProject(project.tasks)
      }
    })

    return normilizedState
  };