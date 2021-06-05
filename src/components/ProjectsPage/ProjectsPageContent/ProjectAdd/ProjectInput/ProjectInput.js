import React from 'react'
import { connect } from 'react-redux'
import { handleProjectNameChange, handleProjectDescriptionChange } from '../../../../../actions/projects/projects'

import TextInput from '../../../../ProjectPage/ProjectContent/TaskAdd/TaskInput/TextInput/TextInput'
import {Button} from '../../../../UI/Button/Button'

const mapStateToProps = (state) => {
  return({
    id: Object.keys(state.projectsByIds.projects).length+1,
    name: state.projectsByIds.projectToAdd.name,
    description: state.projectsByIds.projectToAdd.description
  })
}

const mapDispatchToProps = (dispatch) => ({
  dispatchOnNameChange: (newName) => dispatch(handleProjectNameChange(newName)),
  dispatchOnDescriptionChange: (newDescription) => dispatch(handleProjectDescriptionChange(newDescription))
});

const ProjectInputComponent = (
  {
    name, 
    description,
    dispatchOnNameChange,
    dispatchOnDescriptionChange,
  }) => {
  const onNameChange = (event) => dispatchOnNameChange(event.currentTarget.value)
  const onDescriptionChange = (event) => dispatchOnDescriptionChange(event.currentTarget.value)
  // const onProjectAdd = (id, name, description) => dispatchOnProjectAdd(id, name, description)

  return (
    // <form onSubmit={onProjectAdd(name, description)}>
    <form>
      <fieldset>
        <TextInput 
            name="projectName" 
            placeholder='Enter project name'
            size=''
            isRequired='true'
            value={name} 
            onChange={onNameChange}
        />
        <TextInput 
            name='projectDescription'
            placeholder='Enter project description'
            size=''
            isRequired='true'
            value={description} 
            onChange={onDescriptionChange}
        />
        <Button 
            btnName={'Submit'}
            type={'submit'}
        />
      </fieldset>
    </form>
  )
}

export const ProjectInput = connect(mapStateToProps, mapDispatchToProps)(ProjectInputComponent)

/*
onProjectAddHandler = (projectName, projectDescription) => {
    // Новый проект будет иметь Id последнего +1
    function setNewProjectId(projects) {
      let lastId = 0
      for (let projectId in projects) {
        if (lastId <= projectId) {
          lastId++
        } else {return ++lastId}
      }
      return ++lastId
    }

    projectName&&projectDescription 
    ? this.setState( (currentState) => {
        const newProjectsList = {...currentState.projectsById}
        const projectToBeAddedID = setNewProjectId(newProjectsList)
        newProjectsList[projectToBeAddedID] = {
          id: projectToBeAddedID,
          name: projectName,
          description: projectDescription,
          tasksIds: []
        }
        return {
          projectsById: newProjectsList
        }
    })
    : alert('Enter PROJECT name and description!') 
  }
  */



/*class ProjectInput extends React.Component {
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
  */