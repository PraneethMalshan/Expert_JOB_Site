import React, { useEffect, useState } from 'react'
import Jobs from './Jobs';
import { Link } from 'react-router-dom';

  

const MyJobs = () => {
    // const email = "praneeth@gmail.com"
    const [jobs, setJobs] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // Set current page
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:3000/myJobs/praneeth@gmail.com`)
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
                setIsLoading(false);
        });
    },[searchText]);


    // pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem)

    // next brn & previous btn
    const nextPage = () => {
        if(indexOfLastItem < jobs.length) {
            setCurrentPage(currentPage + 1)
        }
    }
    const prevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }
    

    const handleSearch = () => {
        const filter = jobs.filter(
            (job) => 
                job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
                );
        // console.log(filter)
        setJobs(filter);
        setIsLoading(false);
        
    }

    const handleDelete = (id) => {
        // console.log(id)
        fetch(`http://localhost:3000/job/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json)
            .then((data) => {
            if(data.acknowledged === true ) {
                alert("Job Deleted Successfully!!!");
            }
        });
    };
    
    // console.log(searchText);
  return ( 
    <div className='container px-4 mx-auto text-black max-w-screen-2xl xl:px-24 '>
      <div className='my-job-container'>
        <h1 className='p-4 text-center'>All My Jobs</h1>
        <div className='p-2 mb-2 text-center search-box'>
            <input 
                onChange={(e) => setSearchText(e.target.value)}
                type="text" name='search' id='search' className='w-full py-2 pl-3 mb-4 text-white bg-black border focus:outline-none lg:w-6/12'/>
            <button className='px-8 py-2 mb-4 font-semibold text-white bg-blue-700 rounded-sm' onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* Table */}
      <section className="py-1 bg-blueGray-50">
<div className="w-full px-4 mx-auto mt-5 mb-12 xl:w-8/12 xl:mb-0">
  <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg ">
    <div className="px-4 py-3 mb-0 border-0 rounded-t">
      <div className="flex flex-wrap items-center">
        <div className="relative flex-1 flex-grow w-full max-w-full px-4">
          <h3 className="text-base font-semibold text-blueGray-700">All Jobs</h3>
        </div>
        <div className="relative flex-1 flex-grow w-full max-w-full px-4 text-right">
            <Link to="/post-job">
            <button className="px-3 py-1 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-indigo-500 rounded outline-none active:bg-indigo-600 focus:outline-none" type="button">Post A New Job</button>
            </Link>
        </div>
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center w-full bg-transparent border-collapse ">
        <thead>
          <tr>
            <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                          NO.
                        </th>
          <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                          TITLE
                        </th>
           <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                          COMPANY NAME
                        </th>
          <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                          SALARY
                        </th>
          <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                          EDIT
                        </th>
          <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                          DELETE
                        </th>              
          </tr>
        </thead>

        {
            isLoading ? (<div className='flex items-center justify-center h-20'><p>loading......</p></div>) : (
             
                <tbody>
                        {
                            currentJobs.map((job, index) => (
                                <tr key={index}>
                                    <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap text-blueGray-700 ">
                                        {index + 1}
                                    </th>
                                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap ">
                                    {job.jobTitle}
                                    </td>
                                    <td className="p-4 px-6 text-xs border-t-0 border-l-0 border-r-0 align-center whitespace-nowrap">
                                    {job.companyName}
                                    </td>
                                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                    ${job.minPrice}-${job.maxPrice}
                                    </td>
                                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                        <button><Link to={`/edit-job/${job?._id}`}>Edit</Link></button>
                                    </td>
                                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                        <button onClick={() => handleDelete(job._id)} className='px-6 py-2 text-white bg-red-700 rounded-sm'>Delete</button>
                                    </td>
                                </tr>  
                                                
                            ))
                        }
                </tbody>
            )
        }

       

      </table>
    </div>
  </div>
</div>

{/* Pagination */}
<div className='flex justify-center mb-8 space-x-8 text-white'>
    {
        currentPage > 1 && (
            <button className='hover:underline' onClick={prevPage}>Previous</button>
        )
    }
    {
        indexOfLastItem < jobs.length && (
            <button className='hover:underline' onClick={nextPage}>Next</button>
        )
    }
</div>

</section>
    </div>
  )
};

export default MyJobs
