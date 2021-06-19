import normalizeState from '../components/ProjectsData/stateNormalizer'

export default class ApiService {
  BASE_URL = 'http://valerystatinov.com/api'

  // Запрос на бэк
  request = (url, method, body) => {
    return fetch(`${this.BASE_URL}${url}`, {
      method,
      headers: {
        Token: 'apxunov',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }

  get(url) {
      return this.request(url, 'GET')
      .then(res => res.json())
  }
  post(url, body) {
      return this.request(url, 'POST', body)
      .then(res => res.json())
  }
  put(url, body) {
      return this.request(url, 'PUT', body)
  }

  // Загрузка задач
  loadTasks = (projectId, url='/projects') => {
    return this.get(`${url}/${projectId}/tasks/`)
    .then(response => response)
  }

  // Загрузка данных из API и их нормализация
  loadData = (url='/projects/') => {
    return this.get(url).then(response => {
      
      const projects = []
      Object.values(response).map( (project) => {
        return projects.push({
          id: project.id,
          name: project.name,
          tasksCount: project.tasksCount
        })
      })

      let tasksOnUploading = projects.map( project => this.loadTasks(project.id))
      
      const normalizedState = Promise.all(tasksOnUploading).then( responses => {
        Object.entries(responses).map((response, id) => {
          return projects[id].tasks = response[1]
        })
        return normalizeState(projects)
      })

      return normalizedState
    })
    .catch(err => new Error('ApiService.loadData(): an error occured:\n', err))
  }

  // Загрузка нового проекта 
  uploadProject = (name, url='/projects/') => {
    const project = {
      name: name
    }
    return this.post(url, project)
  }

  // Загрузка новой задачи 
  uploadTask = (projectId, name, description, url='/projects') => {
    const task = {
      'name': name,
      'description': description,
      'completed': 0
    }
    return this.post(`${url}/${projectId}/tasks/`, task)
  }

  // Смена статуса задачи
  changeStatus = (projectId, taskId, name, description, completed, url='/projects') => {
    const updatedTask = {
      name,
      description,
      priority: 1,
      'completed': !completed,
      'projectId': Number(projectId)
    }
    return this.put(`${url}/${projectId}/tasks/${taskId}/`, updatedTask)
  }
}