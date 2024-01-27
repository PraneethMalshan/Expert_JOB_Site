import React, { useState } from 'react'
import {FiMapPin, FiSearch} from "react-icons/fi"

const Banner = ({query, handleInputChange}) => {


    
  return (
    <div className='container px-4 mx-auto max-w-screen-2xl xl:px-24 md:py-20 py-14 '>
        <h1 className='mb-3 text-5xl font-bold text-white text-primary'>Find your <span className='text-red-600'>new job</span> today.</h1>
        <p className='mb-8 text-lg text-white/70 '>Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>
    
        <form>
            <div className='flex flex-col justify-start gap-4 md:flex-row md:gap-0'>
                <div className='flex w-full rounded shadow-sm md:rounded-s-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2'>
                    <input type="text" name='title' id='title' placeholder='What position are you looking?' className='flex-1 block border-0 border-stone-300 bg-transparent py-1.5 pl-8 text-gray-100 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6' 
                        onChange={handleInputChange}
                        value={query}
                    />
                    <FiSearch className='absolute mt-2.5 ml-2 text-gray-400'/>
                </div>

                <div className='flex w-full rounded shadow-sm md:rounded-s-none ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3'>
                    <input type="text" name='title' id='title' placeholder='Location' className='flex-1 block border-0 border-stone-300 bg-transparent py-1.5 pl-8 text-gray-100 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6' 
                    
                    />
                    <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400'/>
                </div>
                
                <button type='submit' className='px-8 py-2 text-white bg-blue-500 rounded md:rounded-s-none'>Search</button>
                
            </div>
    
        </form>
    </div>
  )
}

export default Banner
