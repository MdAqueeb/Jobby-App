const employmentTypesList = [
  'Full Time',
  'Part Time',
  'Freelance',
  'Internship',
]

const EmploymentFilter = () => {
    return (
        <div>
            <h1 className="text-white font-semibold mb-3">
            Type of Employment
            </h1>

            {employmentTypesList.map(type => (
            <div key={type} className="flex items-center gap-2 mb-2">
                <input type="checkbox" className="accent-[#6366f1]" />
                <label className="text-[#cbd5e1] text-sm">{type}</label>
            </div>
            ))}
        </div>
    )
}
export default EmploymentFilter

