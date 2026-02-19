const salaryRangesList = [
  '10 LPA and above',
  '20 LPA and above',
  '30 LPA and above',
  '40 LPA and above',
]

const SalaryFilter = () => {
  return (
    <div>
        <h1 className="text-white font-semibold mb-3">
        Salary Range
        </h1>

        {salaryRangesList.map(range => (
        <div key={range} className="flex items-center gap-2 mb-2">
            <input type="radio" name="salary" className="accent-[#6366f1]" />
            <label className="text-[#cbd5e1] text-sm">{range}</label>
        </div>
        ))}
    </div>
  )
}

export default SalaryFilter
