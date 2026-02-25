import { useNavigate } from 'react-router-dom'
import FailureImg from '../assets/failure-img.png'

const JobsFailureView = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <img src={FailureImg} alt="" />
      <h1 className="text-white text-xl">
        Oops! Something Went Wrong
      </h1>
      <button className="bg-[#6366f1] text-white px-6 py-2 mt-4 rounded" onClick={() => {window.location.reload()}}>
        Retry
      </button>
    </div>
  )
  
}

export default JobsFailureView
