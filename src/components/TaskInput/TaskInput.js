import React from 'react'
import TextInput from './TextInput/TextInput'

class TaskInput extends React.Component {
    state = {
      taskName: '',
      taskDescription: '',
    }
  
    handleChange = (event) => {
      const { value, name } = event.currentTarget
      this.setState({ [name]: value })
    }
  
    render() {
  
      return (
        <fieldset>
          <TextInput 
              name="taskName" 
              placeholder='Enter task name'
              size=''
              isRequired='1'
              value={this.state.name} 
              onChange={this.handleChange} 
          />
          <TextInput 
              name='taskDescription'
              placeholder='Enter task description'
              size=''
              isRequired='1'
              value={this.state.description} 
              onChange={this.handleChange} 
          />
        </fieldset>
      )
    }
  }
  
  
  export default TaskInput