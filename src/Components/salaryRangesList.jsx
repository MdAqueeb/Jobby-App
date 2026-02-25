import { useJobs } from "../context/JobsContext"

const salaryRangesList = [
  10,
  20,
  30,
  40,
]

const SalaryFilter = () => {
  const { updateFilters } = useJobs()

  const handleSalaryChange = (salary) => {
    updateFilters({ min_salary: salary })
  }

  return (
    <div>
      <h1 className="text-white font-semibold mb-3">
        Salary Range
      </h1>

      {salaryRangesList.map(range => (
        <div key={range} className="flex items-center gap-2 mb-2">
          <input
            type="radio"
            name="salary"
            onChange={() => handleSalaryChange(range)}
            className="accent-[#6366f1]"
          />
          <label className="text-[#cbd5e1] text-sm">
            {range} LPA and above
          </label>
        </div>
      ))}
    </div>
  )
}

export default SalaryFilter