// import normalizeState from '../components/ProjectsData/stateNormalizer'

export default class ApiService {
  BASE_URL = 'http://valerystatinov.com/api'

  request = (url, method, body) => {
    return fetch(`${this.BASE_URL}${url}`, {
      method,
      headers: {
        Token: 'Valeron',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
  }

  get(url, method='GET') {
      return this.request(url, method)
  }

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
      console.log('load projects api \n',result);
      return result
      // return normalizeState(result)
    })
    .catch(err => new Error('ApiService.loadData(): an error occured:\n', err))
  }
}