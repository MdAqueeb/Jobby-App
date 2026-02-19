import SimilarJobCard from './SimilarJobCard'

const SimilarJobsSection = ({jobs}) => (
  <div>
    <h1 className="text-2xl font-semibold mb-6">Similar Jobs</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobs.map(job => (
        <SimilarJobCard key={job.id} job={job} />
      ))}
    </div>
  </div>
)

export default SimilarJobsSection
