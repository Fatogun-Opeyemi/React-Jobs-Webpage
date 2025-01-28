import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import ViewAllJobs from '../components/ViewAllJobs'
import JobListings from '../components/JobListings'

const PageForHome = () => {
  return (
    <div>
        <Hero/>
        <HomeCards/>
        <JobListings isHome={true} />
        <ViewAllJobs/>

    </div>
  )
}

export default PageForHome