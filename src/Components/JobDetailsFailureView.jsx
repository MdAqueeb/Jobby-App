import NavBar from "./NavBar"

const JobDetailsFailureView = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col p-4 items-center justify-center min-h-screen bg-[#000000] text-white">
        <img
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="failure view"
          className="w-64 mb-6"
        />
        <h1 className="text-2xl font-semibold">
          Oops! Something Went Wrong
        </h1>
        <p className="text-[#cbd5e1] mt-2">
          We cannot seem to find the page you are looking for.
        </p>
        <button className="bg-[#6366f1] px-6 py-2 rounded mt-6">
          Retry
        </button>
      </div>
    </>
  )
}
export default JobDetailsFailureView
