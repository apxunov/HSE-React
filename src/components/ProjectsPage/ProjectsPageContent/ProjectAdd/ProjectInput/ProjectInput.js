import React, { useState } from 'react'
import { connect } from 'react-redux'
import {fetchProjectUploadActionCreator} from '../../../../../actions/projects_and_tasks/projects_and_tasks'
import TextInput from '../../../../ProjectPage/ProjectContent/TaskAdd/TaskInput/TextInput/TextInput'
import {Button} from '../../../../UI/Button/Button'

const mapDispatchToProps = (dispatch) => ({
  dispatchOnProjectAdd: (projectName) => {
    return dispatch(fetchProjectUploadActionCreator(projectName))
  }
})

const ProjectInputComponent = ({dispatchOnProjectAdd}) => 
  {    
    const [projectName, setName] = useState('')

    const handleChange = (event) => {
      const { value } = event.currentTarget
      setName(value)
    }

    // обработка sumbit'а формы. projectName берется из хукового стейта компонента
    const hadnleSubmit = (event) => {
      event.preventDefault()
      return dispatchOnProjectAdd(projectName)
    }

    return (
      <form onSubmit={hadnleSubmit}> 
        <fieldset>
          <TextInput 
              name="projectName" 
              placeholder='Enter project name'
              size=''
              isRequired='1'
              value={projectName} 
              onChange={handleChange}
          />
          <Button 
              btnName={'Submit'}
              type={'submit'}
          />
        </fieldset>
      </form>
    )
}

export const ProjectInput = connect(null, mapDispatchToProps)(ProjectInputComponent)
