import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className='flex items-center gap-2 mb-2 text-lg font-bold text-white'>
        <FaEnvelopeOpenText/>
        Email me for jobs.
        </h3>

        <p className='mb-4 text-base text-white/75'>Please Enter your Email.</p>

        <div className='w-full space-y-4'>
            <input type="email" name='email' id='email' placeholder='name@gamil.com' className='block w-full py-2 pl-3 border focus:outline-none' />

            <input type="submit" value={"Subscribe"} className='block w-full py-2 pl-3 font-semibold text-black bg-red-400 border rounded-sm cursor-pointer focus:outline-none' />
        </div>
      </div>
{/* Second Part */}

    <div className='mt-20'>
        <h3 className='flex items-center gap-2 mb-2 text-lg font-bold text-white'>
        <FaRocket/>
        Get noticed faster.
        </h3>

        <p className='mb-4 text-base text-white/75'>Please Enter your Email.</p>

        <div className='w-full space-y-4'>

            <input type="submit" value={"Upload your Resume"} className='block w-full py-2 pl-3 font-semibold text-black bg-red-400 border rounded-sm cursor-pointer focus:outline-none' />
        </div>
      </div>

      
    </div>
  )
}

export default Newsletter
