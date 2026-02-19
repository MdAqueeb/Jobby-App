import EmploymentFilter from './EmploymentFilter'
import SalaryFilter from './salaryRangesList'

const FiltersGroup = () => (
  <>
    <hr className="border-[#475569]" />
    <EmploymentFilter />
    <hr className="border-[#475569]" />
    <SalaryFilter />
  </>
)

export default FiltersGroup
