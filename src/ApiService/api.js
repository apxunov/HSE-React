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
  loadTasks = (url='/projects', projectId) => {
    return this.get(`${url}/${projectId}/tasks/`)
  }

  // Загрузка данных из API
  loadData = (url='/projects/') => {
    return this.get(url).then(response => {
      let tasks = this.loadTasks(310).then(res => res)
      console.log('TASKS', tasks);

      const result = {
        projects: [],
        tasks: []
      }
      Object.values(response).map( (project, id) => {
        return result.projects[id] = {
          id: project.id,
          name: project.name,
          tasksCount: project.tasksCount
        }
      })
      return result
    })
    .catch(err => new Error('ApiService.loadData(): an error occured:\n', err))
  }

  // Загрузка нового проекта 
  uploadProject = (name, url='/projects/') => {
    const _newProject = {
      name: name
    }
    return this.post(url, _newProject)
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