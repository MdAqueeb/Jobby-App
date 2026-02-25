


import { useState } from "react"
import { useJobs } from "../context/JobsContext"

const employmentTypesList = [
  { label: "Full Time", value: "full_time" },
  { label: "Part Time", value: "part_time" },
  { label: "Freelance", value: "freelancer" },
  { label: "Internship", value: "internship" },
]

const EmploymentFilter = () => {
  const { updateFilters } = useJobs()
  const [selectedTypes, setSelectedTypes] = useState([])

  const handleChange = (value, checked) => {
    let updatedTypes = []

    if (checked) {
      updatedTypes = [...selectedTypes, value]
    } else {
      updatedTypes = selectedTypes.filter(t => t !== value)
    }

    setSelectedTypes(updatedTypes)
    updateFilters({ employeType: updatedTypes })
  }

  return (
    <div>
      <h1 className="text-white font-semibold mb-3">
        Type of Employment
      </h1>

      {employmentTypesList.map(type => (
        <div key={type.value} className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            onChange={(e) => handleChange(type.value, e.target.checked)}
            className="accent-[#6366f1]"
          />
          <label className="text-[#cbd5e1] text-sm">{type.label}</label>
        </div>
      ))}
    </div>
  )
}

export default EmploymentFilter;
