import React from 'react'

const PageHeader = ({title, path}) => {
  return (
    <div className='flex items-center justify-center py-24 mt-3 rounded bg-[#111111] '>
      <div>
        <h2 className='mb-1 text-3xl font-medium text-center text-red-500'>{title}</h2>
        <p className='text-sm text-center'><a href='/'>Home</a> / {path}</p>
      </div>
    </div>
  )
}

export default PageHeader
