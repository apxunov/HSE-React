import React from 'react'
import {connect} from 'react-redux'
import TextInput from './TextInput/TextInput'
import {Button} from '../../../../UI/Button/Button'
import { handleTaskAdd } from '../../../../../actions/tasks/tasks'
import { handleProjectTaskAdd } from '../../../../../actions/projects/projects'

const mapStateToProps = (state) => {
  return ({
    tasks: state.tasksByIds.tasks,
    projects: state.projectsByIds.projects
  })
}

const mapDispatchToProps = (dispatch) => ({
  dispatchOnTaskAdd: (projectId, taskId, taskName, taskDescription) => dispatch(handleTaskAdd(projectId, taskId, taskName, taskDescription)),
  dispatchOnPojectTaskAdd: (projectId, taskId, taskName, taskDescription, taskStatus) => dispatch(handleProjectTaskAdd(projectId, taskId, taskName, taskDescription, taskStatus))
})

class TaskInputComponent extends React.Component {
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
      const projectId = this.props.projectId
      const newTaskId = ++Object.keys(this.props.tasks)[Object.keys(this.props.tasks).length-1] // id новой таски = id последней + 1
      return [ 
        this.props.dispatchOnTaskAdd(projectId, newTaskId, this.state.taskName, this.state.taskDescription),
        this.props.dispatchOnPojectTaskAdd(projectId, newTaskId, this.state.taskName, this.state.taskDescription, false)
      ]
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
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
            <Button 
                btnName={'Submit'}
                type={'submit'}
            />
          </fieldset>
        </form>
      )
    }
  }
  
  
  export const TaskInput = connect(mapStateToProps, mapDispatchToProps)(TaskInputComponent)