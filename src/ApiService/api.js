import React from 'react'

export default class ApiService extends React.Component {
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

  loadProjects(url='/projects/') {
    return this.get(url)
    .then(response => {
      console.log('load projects api \n',response);
      const projects = []
      Object.values(response).map( (project, id) => {
        return projects[id] = {
          id: project.id,
          name: project.name,
          tasksCount: project.tasksCount
        }
      })
      return projects
    })
    .catch(err => new Error('ApiService.loadProjects(): an error occured:\n', err))
  }
}
