import { useParams, useLoaderData } from 'react-router-dom'
import { useState } from "react"
import {FaMapMarkerAlt } from 'react-icons/fa'
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom"

const JobPage = () => {
  const {id} = useParams()
  const jobs = useLoaderData()
  console.dir(jobs)

  const [showFullDescription, setShowFullDescription] = useState(false)
  let description = jobs.description;

  if(!showFullDescription){
      description = description.substring(0,90) + '...'
  }

  return (
    <main>
      <section>
        <div className="container m-auto py-6 px-6 ">
          <NavLink to="/jobs" className="text-indigo-500 hover:text-indigo-600 flex items-center" >
            <BsArrowLeft className='mr-2'/> Back to Job Listings 
          </NavLink>
        </div>
      </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main className=''>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">{jobs.type} </div>
              <h1 className="text-3xl font-bold mb-4"> {jobs.title} </h1>
              <div
                className="text-red-500 mb-4 flex align-middle  justify-center md:justify-start"
              >
                <FaMapMarkerAlt className='inline mr-1'/>
                <p className="text-orange-700">{jobs.location} </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p className="mb-4"> {jobs.description}</p>

              <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

              <p className="mb-4">{jobs.salary} </p>
            </div>
          </main>

          {/* <!-- Sidebar --> */}
          <aside>
            {/* <!-- Company Info --> */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl">{jobs.company.name} </h2>

              <p className="my-2"> {jobs.company.description}</p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold"> {jobs.company.contactEmail}</p>

              <h3 className="text-xl">Contact Phone:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">{jobs.company.contactPhone} </p>
            </div>

            {/* <!-- Manage --> */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6  mx-auto">
              <h3 className="text-xl font-bold mb-6 text-center">Manage Job</h3>
                <p className='flex flex-grow-1 gap-8 mx-auto justify-center'>
              <NavLink to={`jobs/edit/${id}`} className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-1/4 focus:outline-none focus:shadow-outline mt-4 block" >Edit Job</NavLink>

              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-1/4 focus:outline-none focus:shadow-outline mt-4 block"  > Delete Job </button>

                </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
    </main>
      )
}

const getEachJob =async ({params})=>{
  const {id} = params
  const response = await fetch(`http://localhost:3011/jobs/${id}`)
  console.log(response);
  console.log('http://localhost:3011/jobs');
  
  
  const data = await response.json()

  return data;
}

export { JobPage  as default, getEachJob}