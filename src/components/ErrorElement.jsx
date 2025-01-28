import {Link} from 'react-router-dom'

const ErrorElement = () => {
  return (
    <div className='flex flex-col gap-10 bg-black h-screen text-slate-100 text-2xl text-center' >
        <p className='mt-10 text-3xl'>Page Not Found</p> 

        <Link to='/'className='bg-red-' > 
            <button className='bg-slate-400 rounded-md p-2'> Go Back Home </button>
        </Link>
    </div>
  )
}

export default ErrorElement