import React from 'react'

const ProjectPreview = ({name, description, tasksNum}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description} --- {tasksNum}</p>
        </div>
    )
}

export default ProjectPreview