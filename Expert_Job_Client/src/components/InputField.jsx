import React from 'react'

const InputField = ({handleChange, value, title, name}) => {
  return (
        <label className="text-white sidebar-label-container">
            <input 
            type="radio" 
            name={name} 
            value={value} 
            onChange={handleChange} 
            />
            <span className='checkmark'></span>{title}
        </label>

        // <Field handleChange={handleChange} value="london" title="London" name="test"/>
    
  )
}

export default InputField
