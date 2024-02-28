import React from 'react'
import InputField from '../components/InputField'

const Location = ({ handleChange }) =>  {
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
              value="colombo" 
              title="Colombo" 
              name="test"
              />
            <InputField 
              handleChange={handleChange} 
              value="galle" 
              title="Galle" 
              name="test"
              />

            <InputField 
              handleChange={handleChange} 
              value="kaluthara" 
              title="Kaluthara" 
              name="test"
              />

            <InputField 
              handleChange={handleChange} 
              value="mathara" 
              title="Mathara" 
              name="test"
              />
              
            <InputField 
              handleChange={handleChange} 
              value="jafna" 
              title="Jafna" 
              name="test"
              />
            
            <InputField 
              handleChange={handleChange} 
              value="singapore" 
              title="Singapore" 
              name="test"
              />
            
            <InputField 
              handleChange={handleChange} 
              value="australia" 
              title="Australia" 
              name="test"
              />

        </div>
        
    </div>
  )
}

export default Location
