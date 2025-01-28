import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
const Nav = () => {

  const linkClass = ( {isActive} )=>
    isActive
      ? 'text-white bg-red-600 hover:bg-red-600 hover:text-white rounded-md px-3 py-2' 
      : 'text-white hover:bg-red-600 hover:text-white rounded-md px-3 py-2';

  return (
    <section>
    <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start "
            >
              {/* <!-- Logo --> */}
              <div className="flex flex-shrink-0 items-center mr-4">
                <img
                  className="h-10 w-auto"
                  src={logo}
                  alt="React Jobs"
                />
                <span className="hidden md:block text-white text-2xl font-bold ml-2" >React Jobs</span>

              </div>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={linkClass} >Home </NavLink>
                  <NavLink to="/jobs" className={linkClass} >Jobs</NavLink>
                  <NavLink to="/add-jobs" className={linkClass} >Add Job</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  
      </section>
  )
}

export default Nav

