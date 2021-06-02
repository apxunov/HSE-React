import React from 'react'

import TextInput from '../../../../ProjectPage/ProjectContent/TaskAdd/TaskInput/TextInput/TextInput'
import {Button} from '../../../../UI/Button/Button'

class ProjectInput extends React.Component {
    state = {
      projectName: '',
      projectDescription: '',
    }
  
    handleChange = (event) => {
      const { value, name } = event.currentTarget
      this.setState({ [name]: value })
    }

    handleProjectInput = (event) => {
      event.preventDefault()
      return this.props.onProjectAddHandler(this.state.projectName, this.state.projectDescription)
    }
  
    render() {
      return (
        <form onSubmit={this.handleProjectInput}>
          <fieldset>
            <TextInput 
                name="projectName" 
                placeholder='Enter project name'
                size=''
                isRequired='true'
                value={this.state.name} 
                onChange={this.handleChange}
            />
            <TextInput 
                name='projectDescription'
                placeholder='Enter project description'
                size=''
                isRequired='true'
                value={this.state.description} 
                onChange={this.handleChange}
            />
            <Button 
                btnName={'Submit'}
                type={'submit'}
            />
          </fieldset>
        </form>
      )
    }
  }
  
  
  export default ProjectInput