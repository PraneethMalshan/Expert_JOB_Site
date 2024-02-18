import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        data.skills = selectedOption;
        // console.log(data)
        fetch("http://localhost:3000/post-job", {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if(result.acknowledged === true){
                    alert("Job Posted Successfully!!!")
                }
                reset()
        });
    };

    const options = [
        {value: "JavaScript", label: "JavaScript"},
        {value: "C++", label: "C++"},
        {value: "HTML", label: "HTML"},
        {value: "CSS", label: "CSS"},
        {value: "React", label: "React"},
        {value: "MongoDB", label: "MongoDB"},
        {value: "Redux", label: "Redux"},
        {value: "TypeScript", label: "TypeScript"},
        {value: "SpringBoot", label: "SpringBoot"},
        
    ]
    
    
    
  return (
    <div className='container px-4 mx-auto max-w-screen-2xl xl:px-24'>
        
        {/* form */}
        <div className='bg-[#121212] py-10 px-4 lg:px-16'>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                
                {/* 1st Row */}
                <div className="create-job-flex">
                    <div className="w-full lg:w-1/2">
                        <label className="block mb-2 text-lg text-white">Job Title</label>
                        <input type="text" defaultValue={"Web Developer"} 
                        {...register("jobTitle")} className="create-job-input" />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <label className="block mb-2 text-lg text-white">Company Name</label>
                        <input type="text" placeholder="Ex: Microsoft" 
                        {...register("companyName")} className="create-job-input" />
                    </div>
                </div>  

                {/* 2nd Row */}
                <div className="create-job-flex">
                    <div className="w-full lg:w-1/2">
                        <label className="block mb-2 text-lg text-white">Minimum Salary</label>
                        <input type="text" placeholder="$20k"
                        {...register("minPrice")} className="create-job-input" />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <label className="block mb-2 text-lg text-white">Maximum Salary</label>
                        <input type="text" placeholder="$120k" 
                        {...register("maxPrice")} className="create-job-input" />
                    </div>
                </div>  

                {/* 3rd Row */}
                <div className="create-job-flex">
                    <div className="w-full lg:w-1/2">
                        <label className="block mb-2 text-lg text-white">Salary Type</label>
                        <select {...register("salaryType")} className="create-job-input">
                            <option value="">Choose Your Salary</option>
                            <option value="Hourly">Hourly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <label className="block mb-2 text-lg text-white">Job Location</label>
                        <input type="text" placeholder="Ex: New York" 
                        {...register("jobLocation")} className="create-job-input" />
                    </div>
                </div>  

                {/* 4th Row */}
                <div className="create-job-flex">
                    <div className="w-full lg:w-1/2">
                        <label className="block mb-2 text-lg text-white">Job Posting Date</label>
                        <input type="date" placeholder="Ex: 2024-02-05" 
                        {...register("postingDate")} className="create-job-input" />
                    </div>
                    
                    <div className="w-full lg:w-1/2">
                        <label className="block mb-2 text-lg text-white">Experience Level</label>
                        <select {...register("experienceLevel")} className="create-job-input">
                            <option value="">Choose Your Experience</option>
                            <option value="NoExperience">NoExperience</option>
                            <option value="Internship">Internship</option>
                            <option value="Work remotely">Work remotely</option>
                        </select>
                    </div>
                </div> 

                {/* 5th Row */}
                <div>
                    <label className="block mb-2 text-lg text-white">Required Skill Sets</label>
                    <CreatableSelect
                    defaultInputValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    isMulti
                        className="py-4 create-job-input"
                    />
                    
                </div>

                {/* 6th Row */}
                <div className="create-job-flex">
                    <div className="w-full lg:w-1/2">
                        <label className="block mb-2 text-lg text-white">Company Logo</label>
                        <input type="url" placeholder="Paste your company logo URL: https://weshare.com/img1" 
                        {...register("companyLogo")} className="create-job-input" />
                    </div>
                    
                    <div className="w-full lg:w-1/2">
                        <label className="block mb-2 text-lg text-white">Employment Type</label>
                        <select {...register("employmentType")} className="create-job-input">
                            <option value="">Choose Your Experience</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Temporary">Temporary</option>
                        </select>
                    </div>
                </div> 

                {/* 7th Row */}
                <div className="w-full">
                    <label className="block mb-2 text-lg text-white">Job Description</label>
                    <textarea className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-600"
                    rows={6}
                    defaultValue={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto aut consectetur distinctio eveniet facere fugiat ipsa iure."}
                    placeholder="Job Description"
                    {...register("description")} />
                </div>

                {/* 8th Row */}
                <div w-full>
                    <label className="block mb-2 text-lg text-white">Job Posted By</label>
                    <input 
                        type="demailate" 
                        placeholder="your email" 
                        {...register("postedBy")} 
                        className="create-job-input" 
                        />
                </div>
                

            
            <input type="submit" className="block px-8 py-2 mt-12 font-semibold text-black bg-red-400 rounded-sm cursor-pointer" />
            </form>
            
        </div>
        
    </div>
  )
}

export default CreateJob
