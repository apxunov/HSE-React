import React from 'react'
import classes from './TextInput.module.css'

const TextInput = ({ name, placeholder, size, isRequired, onChange }) => {
    return (
        isRequired 
        ? 
          <label className={classes['custom-field']} for={`${name}_input`}>
            <input className={classes['text-input']}
                id={`${name}_input`} 
                name={`${name}`} 
                type='text' 
                placeholder={`${placeholder}`} 
                size={size} 
                required 
                onChange={onChange}/> 
            <span className={classes['input-placeholder']}>{placeholder}</span>
          </label>
        : 
          <label className={classes['custom-field']} for={`${name}_input`}>
            <input className={classes['text-input']}
                id={`${name}_input`} 
                name={`${name}`} 
                type='text' 
                placeholder={`${placeholder}`} 
                size={size} 
                required 
                onChange={onChange}/>
            <span className={classes['input-placeholder']}>{placeholder}</span>
          </label>
    )
  }

export default TextInput