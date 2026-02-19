import {useState} from 'react'
import {BsSearch} from 'react-icons/bs'
import JobCard from './JobCard'
import NoJobsView from './NoJobsView'
import JobsFailureView from './JobsFailureView'

const JobsList = ({status}) => {
  const [search, setSearch] = useState('')
  const jobs = [
    {
      id: 1,
      title: 'Devops Engineer',
      rating: 4,
      location: 'Delhi',
      type: 'Internship',
      salary: '10 LPA',
      description: 'We are looking for DevOps Engineer...',
    },
  ]

  if (status === 'FAILURE') {
    return <JobsFailureView />
  }

  if (jobs.length === 0) {
    return <NoJobsView />
  }

  return (
    <>
      <div className="flex mb-6">
        <input
          type="search"
          placeholder="Search"
          className="w-full bg-[#121212] border border-[#475569] text-white p-2 rounded-l outline-none"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="bg-[#272727] px-4 rounded-r border border-[#475569]">
          <BsSearch className="text-white" />
        </button>
      </div>

      <ul className="space-y-6">
        {jobs.map(job => (
          <JobCard key={job.id} job={job}  />
        ))}
      </ul>
    </>
  )
}

export default JobsList
