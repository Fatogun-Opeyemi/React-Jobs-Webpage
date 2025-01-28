import { FaExclamationTriangle } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="grid place-content-center">
         <p className='mt-10 text-3xl'>Page Not Found
            <FaExclamationTriangle className="inline ml-3"/>
        </p> 

        <NavLink to='/'className='bg-red-' > 
            <button className='bg-slate-400 rounded-md p-2 mt-14 ml-14'> Go Back Home </button>
        </NavLink>
    </div>
  )
}

export default ErrorPage