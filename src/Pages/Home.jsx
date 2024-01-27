import {useEffect, useState} from 'react'
import Banner from '../components/Banner'

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
    // console.log(filteredItems)

  return (
    <div>
        <Banner query={query} handleInputChange={handleInputChange}/>
    </div>
  )
}

export default Home
