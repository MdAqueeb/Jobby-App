import {FaStar} from 'react-icons/fa'
import {IoLocationSharp} from 'react-icons/io5'
import {BsBriefcaseFill} from 'react-icons/bs'

const SimilarJobCard = ({job}) => (
  <div className="bg-[#272727] rounded-xl p-6">

    <h2 className="font-semibold">{job.title}</h2>

    <div className="flex items-center gap-2 mt-2">
      <FaStar className="text-[#fbbf24]" />
      <p>{job.rating}</p>
    </div>

    <h3 className="font-semibold mt-4">Description</h3>
    <p className="text-[#cbd5e1] mt-2 text-sm">
      {job.description}
    </p>

    <div className="flex gap-6 mt-4 text-[#cbd5e1]">
      <div className="flex items-center gap-1">
        <IoLocationSharp />
        <p>{job.location}</p>
      </div>
      <div className="flex items-center gap-1">
        <BsBriefcaseFill />
        <p>{job.employmentType}</p>
      </div>
    </div>

  </div>
)

export default SimilarJobCard
