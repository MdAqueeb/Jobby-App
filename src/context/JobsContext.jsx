
import { createContext, useContext, useState, useEffect } from "react"
import { getJobs } from "../apis/JobApi"

const JobsContext = createContext()

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([])
  const [filters, setFilters] = useState({
    employeType: [],
    search: "",
    min_salary: 0
  })
  const [status, setStatus] = useState("LOADING")

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  useEffect(() => {
    const fetchData = async () => {
      setStatus("LOADING")
      try {
        const res = await getJobs(filters)
        setJobs(res.data)          
        setStatus("SUCCESS")
      } catch {
        setStatus("FAILURE")
      }
    }

    fetchData()
  }, [filters])   

  return (
    <JobsContext.Provider value={{
      jobs,
      status,
      updateFilters,
      filters
    }}>
      {children}
    </JobsContext.Provider>
  )
}

export const useJobs = () => useContext(JobsContext)