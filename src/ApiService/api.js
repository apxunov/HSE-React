export default class ApiService {
  BASE_URL = 'http://valerystatinov.com/api'

  // Запрос на бэк
  request = (url, method, body) => {
    return fetch(`${this.BASE_URL}${url}`, {
      method,
      headers: {
        Token: 'apxunov',
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

  // Выгрузка данных из API
  loadData = (url='/projects/') => {
    return this.get(url)
    .then(response => {
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

  // Загрузка нового проекта на бэк
  uploadProject = (newProject_Name, url='/projects/') => {
    const _newProject = {
      name: newProject_Name
    }
    return this.post(url, _newProject)
  }
}