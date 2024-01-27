import {useEffect, useState} from 'react'
import Banner from '../components/Banner'
import { data } from 'autoprefixer';
import Card from '../components/Card';
import Jobs from './Jobs';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("jobs.json").then(res => res.json()).then(data => {
            // console.log(data)
            setJobs(data)
        })
    }, [])

    console.log(jobs)

    const [query, setQuery] = useState("");
    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }

// Filter jobs title
    const filteredItems = jobs.filter((jobs) => jobs.jobTitle.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);


    // ===Radio Filtering===
    const handleChange = (event) => {
        setSelectedCategory(event.target.value)
    }

    // ===Button based Filtering===
    const andleClick = (event) => {
        setSelectedCategory(event.target.value)
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
            filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate}) => {
                jobLocation.toLowerCase() <= selected.toLowerCase() ||
                parseInt(maxPrice) === parseInt(selected) ||
                employmentType.toLowerCase() === selected.toLowerCase()
            });
            console.log(filteredJobs);
        }

        return filteredJobs.map((data, i) => <Card key={i} data={data}/>)


    }

    const result = filteredData(jobs, selectedCategory, query);


  return (
    <div>
        <Banner query={query} handleInputChange={handleInputChange}/>

{/* Main Content */}
        <div className='bg-[#000000] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12 ' >
            {/* Left Side */}
            <div className='p-4 bg-[#121212] rounded'>Left</div>

            {/* Job Cards */}
            <div className='col-span-2 p-4 bg-[#121212] rounded-sm'><Jobs result={result}/></div>
            
            
            {/* Right Side */}
            <div className='p-4 bg-[#121212] rounded'>Right</div>
        </div>
    </div>
  )
}

export default Home
