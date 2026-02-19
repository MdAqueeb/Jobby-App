import {useState} from 'react'
import ProfileSection from '../Components/ProfileSection'
import FiltersGroup from '../Components/FiltersGroup'
import JobsList from '../Components/JobsList'
import NavBar from '../Components/NavBar'

const Jobs = () => {
  const [profileStatus, setProfileStatus] = useState('SUCCESS')
  const [jobsStatus, setJobsStatus] = useState('FAILURE')

  return (
    <>
    <NavBar />
    <div className="bg-[#000000] min-h-screen p-4 md:p-10">
        
      <div className="flex flex-col md:flex-row gap-6">
        
        <div className="md:w-1/4 space-y-6">
          <ProfileSection status={profileStatus} />
          <FiltersGroup />
        </div>

        <div className="md:w-3/4">
          <JobsList status={jobsStatus} />
        </div>

      </div>
    </div>
    </>
  )
}

export default Jobs
