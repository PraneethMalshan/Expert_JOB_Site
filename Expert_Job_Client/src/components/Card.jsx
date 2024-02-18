import React from 'react'
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';

const Card = ({data}) => {
    const {companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, employmentType, postingDate, description, } = data;
  return (
    // <div>
    //   <h3>{data.jobTitle}</h3>
    // </div>

    <section className='card'>
        <Link to={"/"} className='flex flex-col items-start gap-4 sm:flex-row'>
            <img className='h-14 w-14' src={companyLogo} alt="" />
            <div>
                <h4 className='mb-1 text-white'>{companyName}</h4>
                <h3 className='mb-2 text-lg font-semibold text-white'>{jobTitle}</h3>

                <div className='flex flex-wrap gap-2 mb-2 text-base text-white/70'>
                    <span className='flex items-center gap-2 '><FiMapPin/>{jobLocation}</span>
                    <span className='flex items-center gap-2 '><FiClock/>{employmentType}</span>
                    <span className='flex items-center gap-2 '><FiDollarSign/>{minPrice}-{maxPrice}</span>
                    <span className='flex items-center gap-2 '><FiCalendar/>{postingDate}</span>
                </div>

                <p className='text-base text-white/70 '>{description}</p>
                
            </div>
        </Link>
    </section>

  )
}

export default Card
