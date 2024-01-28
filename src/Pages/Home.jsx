import {useEffect, useState} from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const[jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;


    useEffect(() => {
        setIsLoading(true);
        fetch("jobs.json").then(res => res.json()).then(data => {
            // console.log(data)
            setJobs(data);
            setIsLoading(false)
        })
    }, [])

    // console.log(jobs)

    // hsndle input change
    const [query, setQuery] = useState("");
    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }

// Filter jobs title
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);


    // ===Radio Filtering===
    const handleChange = (event) => {
        setSelectedCategory(event.target.value)
    }

    // ===Button based Filtering===
    const handleClick = (event) => {
        setSelectedCategory(event.target.value)
    }


    // ====Calculate the index range====
    const calculatePageRange = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return {startIndex, endIndex};
    }

    // function for the next page
    const nextPage = () => {
        if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
            setCurrentPage(currentPage + 1);
        }
    }

    // function for the previous page
    const prevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }
    
    

    // Main function 
    const filteredData = (jobs, selected, query) => {
        let filteredJobs = jobs;
        // filtering input items
        if(query){
            filteredJobs =filteredItems;
        }

        // category filtering
        if(selected){
            filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, 
                employmentType, postingDate}) => (
                jobLocation.toLowerCase() === selected.toLowerCase() ||
                parseInt(maxPrice) <= parseInt(selected) ||
                salaryType.toLowerCase() === selected.toLowerCase() ||
                employmentType.toLowerCase() === selected.toLowerCase()
            ));
            console.log(filteredJobs);
        }

        // slice the data baased on current page
        const {startIndex, endIndex} = calculatePageRange();
        filteredJobs = filteredJobs.slice(startIndex, endIndex)
        return filteredJobs.map((data, i) => <Card key={i} data={data}/>)


    }

    const result = filteredData(jobs, selectedCategory, query);


  return (
    <div>
        <Banner query={query} handleInputChange={handleInputChange}/>

        {/* Main Content */}
        <div className='bg-[#000000] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12 ' >
            {/* Left Side */}
            <div className='p-4 bg-[#121212] rounded'>
                <Sidebar handleChange={handleChange} handleClick={handleClick}/>
            </div>

            {/* Job Cards */}
            <div className='col-span-2 p-4 bg-[#121212] rounded-sm'>
                
                {
                    isLoading ? (<p className='font-medium text-white'>Loading.....</p>) : result.length > 0 ? (<Jobs result={result}/>) : <>
                    <h3 className='mb-2 text-lg font-bold text-white'>{result.length} Jobs</h3>
                    <p className='text-white'>No data found!</p>
                    </>
                }

                {/* Pagination here */}
                {

                    result.length > 0 ? (
                        <div className="flex justify-center mt-4 space-x-8 text-white">
                            <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline'>Previous</button>
                            <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                            <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline'>Next</button>
                        </div>
                    ) : ""                       

                }

            </div>
            
            
            {/* Right Side */}
            <div className='p-4 bg-[#121212] rounded'>Right</div>
        </div>
    </div>
  )
}

export default Home
