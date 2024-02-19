import React, { useEffect, useState } from 'react'

const MyJobs = () => {
    // const email = "praneeth@gmail.com"
    const [jobs, setJobs] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:3000/myJobs/praneeth@gmail.com`)
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
        });
    },[]);
    
    
  return (
    <div className='container px-4 mx-auto text-white max-w-screen-2xl xl:px-24 '>
      <div className='my-job-container'>
        <h1 className='p-4 text-center'>All My Jobs</h1>
        <div className='p-2 mb-2 text-center search-box'>
            <input type="text" name='search' id='search' className='w-full py-2 pl-3 mb-4 bg-black border focus:outline-none lg:w-6/12'/>
            <button className='px-8 py-2 mb-4 font-semibold text-white bg-blue-700 rounded-sm'>Search</button>
        </div>
      </div>
    </div>
  )
};

export default MyJobs
