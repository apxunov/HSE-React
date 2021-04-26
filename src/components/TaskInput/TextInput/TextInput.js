import React from 'react'

const TextInput = ({ name, placeholder, size, isRequired, onChange }) => {
    return (
        isRequired ? 
        <input name={`${name}`} type='text' placeholder={`${placeholder}`} size={size} required onChange={onChange}/> 
        : <input name={`${name}`} type='text' placeholder={`${placeholder}`} size={size} required onChange={onChange}/>
    )
  }

export default TextInput