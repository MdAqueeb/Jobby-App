import {FaStar} from 'react-icons/fa'
import {IoLocationSharp} from 'react-icons/io5'
import {BsBriefcaseFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const JobCard = ({job}) => {
    const navigate = useNavigate();

   
    return (
        <li className="bg-[#272727] rounded-xl p-6 text-white" onClick={() => {navigate(`/job_details/${job.job_id}`)}}>
            <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">{job.job_title}</h1>
            <p>{job.package_per_annum}L</p>
            </div>

            <div className="flex items-center gap-2 mt-2">
            <FaStar className="text-[#fbbf24]" />
            <p>{job.rating}</p>
            </div>

            <div className="flex gap-6 mt-3 text-[#cbd5e1]">
            <div className="flex items-center gap-1">
                <IoLocationSharp />
                <p>{job.location}</p>
            </div>
            <div className="flex items-center gap-1">
                <BsBriefcaseFill />
                <p>{job.employment_type}</p>
            </div>
            </div>

            <hr className="border-[#475569] my-4" />

            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-[#cbd5e1] text-sm">{job.job_description}</p>
        </li>
    )
}
export default JobCard
