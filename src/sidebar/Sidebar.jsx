import React from 'react'
import Location from './Location'

const Sidebar = ({handleChange, handleClick}) => {
  return (
    <div className='space-y-5'>
      <h3 className='mb-2 text-lg font-bold text-white'>Filters</h3>

      <Location handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar
