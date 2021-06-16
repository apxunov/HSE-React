import React from 'react'

import TextInput from '../../../../ProjectPage/ProjectContent/TaskAdd/TaskInput/TextInput/TextInput'
import {Button} from '../../../../UI/Button/Button'

const ProjectInput = (
  {
    id,
    name, 
    description,
    dispatchOnProjectAdd
  }) => {    

  return (
    // <form onSubmit={handleSubmit}> 
    <form> 
      <fieldset>
        <TextInput 
            name="projectName" 
            placeholder='Enter project name'
            size=''
            isRequired='1'
            value={name} 
            // onChange={onProjectDataChange}
        />
        <TextInput 
            name='projectDescription'
            placeholder='Enter project description'
            size=''
            isRequired='1'
            value={description} 
            // onChange={onProjectDataChange}
        />
        <Button 
            btnName={'Submit'}
            type={'submit'}
        />
      </fieldset>
    </form>
  )
}

export default ProjectInput
