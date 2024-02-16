import React from 'react'

const Jobs = ({result}) => {
  return (
    <>
    <div>
    <h3 className='mb-2 text-lg font-bold text-white'>{result.length} Jobs</h3>
    </div>
    
    <section>{result}</section>
      
    </>
  )
}

export default Jobs
