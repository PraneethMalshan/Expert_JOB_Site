import React from 'react'
import PageHeader from '../components/PageHeader'

const SalaryPage = () => {
  return (
    <div className='container px-4 mx-auto text-white max-w-screen-2xl xl:px-24'>
        <PageHeader title={"Estimate Salary"} path={"Salary"}/>

        <div className='mt-5'>
            <div className='p-2 mb-2 text-center search-box'>
                <input type='text' name='search' id='search' className='w-full py-2 pl-3 mb-4 bg-black border focus:outline-none lg:w-6/12'/>
                <button className='px-8 py-2 mb-4 font-semibold text-white bg-blue-500 rounded-sm'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default SalaryPage
