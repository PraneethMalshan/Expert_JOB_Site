import React from 'react'

const Button = ({onClickHandler, value, title}) => {
  return (

      <button onClick={onClickHandler} value={value} className={`px-4 py-1 border text-white text-base hover:bg-red-400 hover:text-black rounded-lg`}>
        {title}
      </button>
    
  )
}

export default Button
