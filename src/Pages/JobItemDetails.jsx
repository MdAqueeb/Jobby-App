import {useState} from 'react'
import JobDetailsCard from '../Components/JobDetailsCard'
import SimilarJobsSection from '../Components/SimilarJobsSection'
import JobDetailsFailureView from '../Components/JobDetailsFailureView'
import NavBar from '../Components/NavBar'

const JobItemDetails = () => {
  const [status] = useState('SUCCESS') // change to FAILURE to test

  const jobData = {
    title: 'Devops Engineer',
    rating: 4,
    location: 'Delhi',
    employmentType: 'Internship',
    packagePerAnnum: '10 LPA',
    description:
      'We are looking for a DevOps Engineer with minimum 5 years of industry experience...',
    companyWebsiteUrl: 'https://netflix.com',
    skills: [
      {name: 'Docker', imageUrl: 'https://assets.ccbp.in/frontend/react-js/docker-img.png'},
      {name: 'Kubernetes', imageUrl: 'https://assets.ccbp.in/frontend/react-js/kubernetes-img.png'},
      {name: 'Terraform', imageUrl: 'https://assets.ccbp.in/frontend/react-js/terraform-img.png'},
      {name: 'Jenkins', imageUrl: 'https://assets.ccbp.in/frontend/react-js/jenkins-img.png'},
      {name: 'GO', imageUrl: 'https://assets.ccbp.in/frontend/react-js/go-lang-img.png'},
      {name: 'Ansible', imageUrl: 'https://assets.ccbp.in/frontend/react-js/ansible-img.png'},
    ],
    lifeAtCompany: {
      description:
        'Our core philosophy is people over process...',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/life-netflix-img.png',
    },
  }

  const similarJobs = [
    {
      id: 1,    
      title: 'Frontend Engineer',
      rating: 4,
      location: 'Delhi',
      employmentType: 'Freelance',
      description: 'The Experimentation Platform team builds...',
    },
    {
      id: 2,
      title: 'Frontend Engineer',
      rating: 5,
      location: 'Mumbai',
      employmentType: 'Part Time',
      description: 'The Experimentation Platform team builds...',
    },
  ]

  if (status === 'FAILURE') {
    return <JobDetailsFailureView />
  }

  return (
    <>
        <NavBar />
        <div className="bg-[#000000] min-h-screen p-4 md:p-10 text-white">
            <JobDetailsCard jobData={jobData} />
            <SimilarJobsSection jobs={similarJobs} />
        </div>
    </>
    
  )
}

export default JobItemDetails
