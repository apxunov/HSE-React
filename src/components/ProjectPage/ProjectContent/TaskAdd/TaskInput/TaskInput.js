import React from 'react'

import TextInput from './TextInput/TextInput'
import {Button} from '../../../../UI/Button/Button'

class TaskInput extends React.Component {
    state = {
      taskName: '',
      taskDescription: '',
    }
  
    handleChange = (event) => {
      const { value, name } = event.currentTarget
      this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      return this.props.taskAddHandler(this.props.projectId, this.state.taskName, this.state.taskDescription)
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <TextInput 
                name="taskName" 
                placeholder='Enter task name'
                size=''
                isRequired='true'
                value={this.state.name} 
                onChange={this.handleChange} 
            />
            <TextInput 
                name='taskDescription'
                placeholder='Enter task description'
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
  
  
  export default TaskInput