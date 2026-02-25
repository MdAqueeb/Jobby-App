


import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import JobDetailsCard from '../Components/JobDetailsCard'
import SimilarJobsSection from '../Components/SimilarJobsSection'
import JobDetailsFailureView from '../Components/JobDetailsFailureView'
import NavBar from '../Components/NavBar'
import { getJobDetails, getSimilarJobs } from '../apis/JobApi'

const JobItemDetails = () => {
  const { jobId } = useParams()

  const [jobData, setJobData] = useState(null)
  const [similarJobs, setSimilarJobs] = useState([])
  const [status, setStatus] = useState('LOADING')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus('LOADING')

        const jobRes = await getJobDetails(jobId)
        const similarRes = await getSimilarJobs(jobId)

        setJobData(jobRes.data)       
        setSimilarJobs(similarRes.data)

        setStatus('SUCCESS')
      } catch (err) {
        setStatus('FAILURE')
      }
    }

    fetchData()
  }, [jobId])

  if (status === 'LOADING') {
    return <p className="text-white p-10">Loading...</p>
  }

  if (status === 'FAILURE') {
    return <JobDetailsFailureView />
  }

  return (
    <>
      <NavBar />
      <div className="bg-[#000000] min-h-screen p-4 md:p-10 text-white">
        {jobData && <JobDetailsCard jobData={jobData} />}
        <SimilarJobsSection jobs={similarJobs} />
      </div>
    </>
  )
}

export default JobItemDetails