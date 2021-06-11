import React from 'react'
import classes from './TextInput.module.scss'

const TextInput = ({ name, placeholder, size, isRequired, onChange }) => {
    return (
          <label className={classes['custom-field']} htmlFor={`${name}_input`}>
            <input className={classes['text-input']}
                id={`${name}_input`} 
                name={name} 
                type='text' 
                placeholder={`${placeholder}`} 
                size={size} 
                required={isRequired} 
                onChange={onChange}/> 
            <span className={classes['input-placeholder']}>{placeholder}</span>
          </label>
    )
  }

export default TextInput