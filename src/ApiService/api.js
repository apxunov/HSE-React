import normalizeState from '../components/ProjectsData/stateNormalizer'

export default class ApiService {
  BASE_URL = 'http://valerystatinov.com/api'

  // Запрос на бэк
  request = (url, method, body) => {
    return fetch(`${this.BASE_URL}${url}`, {
      method,
      headers: {
        Token: 'Valera',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
  }

  get(url) {
      return this.request(url, 'GET')
  }
  post(url, body) {
      return this.request(url, 'POST', body)
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

      Object.values(response).map( (project, id) => {
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
  uploadTask = (url='/projects', projectId, name, description) => {
    const task = {
      'name': name,
      'description': description,
      'completed': 0
    }
    return this.post(`${url}/${projectId}/tasks/`, task)
  }
}