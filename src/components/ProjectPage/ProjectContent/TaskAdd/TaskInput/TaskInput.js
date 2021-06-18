import React from 'react'
import {connect} from 'react-redux'
import TextInput from './TextInput/TextInput'
import {Button} from '../../../../UI/Button/Button'
import {fetchTaskUploadActionCreator} from '../../../../../actions/projects_and_tasks/projects_and_tasks'

const mapDispatchToProps = (dispatch) => ({
  dispatchOnTaskAdd: (projectId, name, description) => {
    dispatch(fetchTaskUploadActionCreator(projectId, name, description))
  }
})

class TaskInputComponent extends React.Component {
    state = {
      name: '',
      description: '',
    }
  
    handleChange = (event) => {
      const { value, name } = event.currentTarget
      this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      const projectId = this.props.projectId
      const name = this.state.name
      const description = this.state.description
      return this.props.dispatchOnTaskAdd(projectId, name, description)
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <TextInput 
                name="name" 
                placeholder='Enter task name'
                size=''
                isRequired='1'
                value={this.state.name} 
                onChange={this.handleChange} 
            />
            <TextInput 
                name='description'
                placeholder='Enter task description'
                size=''
                isRequired='1'
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
  
  
  export const TaskInput = connect(null, mapDispatchToProps)(TaskInputComponent)