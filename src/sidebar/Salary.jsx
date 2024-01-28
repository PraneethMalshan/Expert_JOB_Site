import React from 'react'
import Button from './Button'

function Salary({handleChange, handleClick}) {
  return (
    <div>
      <h4 className='mb-2 text-lg font-medium text-white'>Salary</h4>

      <div className='mb-4'>
        <Button onClickHandler={handleClick} value="" title="Hourly"/>
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly"/>
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly"/>

      </div>
    </div>
  )
}

export default Salary
