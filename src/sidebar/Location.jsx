import React from 'react'
import InputField from '../components/InputField'

const Location = ({handleChange}) =>  {
  return (
    <div>
        <h4 className='mb-2 text-lg font-medium text-white'>Location</h4>
    
        <div>
            <label className="text-white sidebar-label-container">
                <input 
                  type="radio" 
                  name="test" 
                  id="test" 
                  value="" 
                  onChange={handleChange} 
                  />
                <span className="checkmark"></span>All
            </label>

            <InputField 
              handleChange={handleChange} 
              value="london" 
              title="London" 
              name="test"
              />
            <InputField 
              handleChange={handleChange} 
              value="seattle" 
              title="Seattle" 
              name="test"
              />

            <InputField 
              handleChange={handleChange} 
              value="madrid" 
              title="Madrid" 
              name="test"
              />

            <InputField 
              handleChange={handleChange} 
              value="boston" 
              title="Boston" 
              name="test"
              />


        </div>
        
    </div>
  )
}

export default Location