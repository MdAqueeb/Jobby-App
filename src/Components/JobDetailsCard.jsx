import {FaStar, FaExternalLinkAlt} from 'react-icons/fa'
import {IoLocationSharp} from 'react-icons/io5'
import {BsBriefcaseFill} from 'react-icons/bs'
import SkillsSection from './SkillsSection'

const JobDetailsCard = ({jobData}) => {
  const {
    title,
    rating,
    location,
    employmentType,
    packagePerAnnum,
    description,
    companyWebsiteUrl,
    skills,
    lifeAtCompany,
  } = jobData

  return (
    <div className="bg-[#272727] rounded-2xl p-6 mb-10">

      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <div className="flex items-center gap-2 mt-2">
            <FaStar className="text-[#fbbf24]" />
            <p>{rating}</p>
          </div>
        </div>
        <p className="font-semibold">{packagePerAnnum}</p>
      </div>

      <div className="flex gap-6 mt-4 text-[#cbd5e1]">
        <div className="flex items-center gap-1">
          <IoLocationSharp />
          <p>{location}</p>
        </div>
        <div className="flex items-center gap-1">
          <BsBriefcaseFill />
          <p>{employmentType}</p>
        </div>
      </div>

      <hr className="border-[#475569] my-6" />

      {/* Description */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Description</h2>
        <a
          href={companyWebsiteUrl}
          target="_blank"
          rel="noreferrer"
          className="text-[#6366f1] flex items-center gap-2"
        >
          Visit <FaExternalLinkAlt />
        </a>
      </div>

      <p className="text-[#cbd5e1] mt-4">{description}</p>

      {/* Skills */}
      <h2 className="text-lg font-semibold mt-8 mb-4">Skills</h2>
      <SkillsSection skills={skills} />

      {/* Life at Company */}
      <h2 className="text-lg font-semibold mt-8 mb-4">Life at Company</h2>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <p className="text-[#cbd5e1] md:w-2/3">
          {lifeAtCompany.description}
        </p>
        <img
          src={lifeAtCompany.imageUrl}
          alt="life at company"
          className="rounded-lg md:w-1/3"
        />
      </div>

    </div>
  )
}

export default JobDetailsCard
