import React from 'react'
import { connect } from 'react-redux'
import { handleProjectAdd } from '../../../../../actions/projects/projects'

import TextInput from '../../../../ProjectPage/ProjectContent/TaskAdd/TaskInput/TextInput/TextInput'
import {Button} from '../../../../UI/Button/Button'

const mapStateToProps = (state) => {
  return({
    id: Object.keys(state.projectsByIds.projects).length+1,
    name: "", 
    description: ""
  })
}

const mapDispatchToProps = (dispatch) => ({
  dispatchOnProjectAdd: (id, name, description) => dispatch(handleProjectAdd(id, name, description))
});

const ProjectInputComponent = (
  {
    id,
    name, 
    description,
    dispatchOnProjectAdd
  }) => {

    // собираю данные из инпутов name и description проекта
    const onProjectDataChange = (event) => { 
      switch (event.target.name) {
        case 'projectName': {
          name = event.currentTarget.value
          return name
        }
        case 'projectDescription': {
          description = event.currentTarget.value
          return description
        }
        default: { return event.target.name }
      }
    }

  const onProjectAdd = (id, name, description) => {
    return dispatchOnProjectAdd(id, name, description)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    return onProjectAdd(id, name, description)
  }

  return (
    <form onSubmit={handleSubmit}> 
      <fieldset>
        <TextInput 
            name="projectName" 
            placeholder='Enter project name'
            size=''
            isRequired='1'
            value={name} 
            onChange={onProjectDataChange}
        />
        <TextInput 
            name='projectDescription'
            placeholder='Enter project description'
            size=''
            isRequired='1'
            value={description} 
            onChange={onProjectDataChange}
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
