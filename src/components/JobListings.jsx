import { useEffect, useState } from 'react';
import jobArray from '../../jobs.json'
import JobListMapped from './JobListMapped';
import Spinner from './Spinner';

  console.log(jobArray);
  

const JobListings = ({isHome = false}) => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        
        const  fetchJobs = async () =>{
            const url = isHome 
                ?  '/api/jobs?_limit=3' 
                :  '/api/jobs'
            try {
                const response = await fetch(url)
                const data = await response.json()
                setJobs(data)
            } catch (error) {
                console.log(error);
                
            }finally{
                setLoading(false)
            }
        };

        fetchJobs()
    }, [])

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    { isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>
                <div className="">
                    {loading ? (<Spinner/>) : (
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        
                        {jobs.map((job)=>(
                           <JobListMapped job={job} key={job.id} />
                        ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default JobListings
