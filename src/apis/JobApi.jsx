import axios from 'axios';

const url = "http://localhost:10000"; 


export const getJobs = (filters) => {
  const params = new URLSearchParams()

  if (filters.search) {
    params.append("search", filters.search)
  }

  if (filters.min_salary) {
    params.append("min_salary", filters.min_salary)
  }

  if (filters.employeType && filters.employeType.length > 0) {
    filters.employeType.forEach(type => {
      params.append("employeType", type)
    })
  }

  return axios.get(`${url}/jobs?${params.toString()}`)
    .then(res => res.data)
  .catch(err => {
    if (err.response) {
      throw err.response.data
    } else {
      throw err
    }
  })
}

export const getJobDetails = (jobId) => {
    return axios.get(`${url}/jobs/${jobId}`)
        .then((res) => {
            console.log(res," res true");
            return res.data;
        })
        .catch((err) => {
            if (err.response) {
                console.log(err.response.data, "err response"); 
                throw err.response.data;                         
            } else {
                console.log(err, "err network");                
                throw err;
            }
        })
}

export const getSimilarJobs = (jobId) => {
    return axios.get(`${url}/jobs/${jobId}/similar`)
        .then((res) => {
            console.log(res," res true");
            return res.data;
        })
        .catch((err) => {
            if (err.response) {
                console.log(err.response.data, "err response"); 
                throw err.response.data;                         
            } else {
                console.log(err, "err network");                
                throw err;
            }
        })
}