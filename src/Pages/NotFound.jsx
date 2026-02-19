import NotFoundImg from "../assets/jobby-app-not-found-img.png"

const NotFound = () => {

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-center px-4">
      
      <img
        src={NotFoundImg}
        alt="not found"
        className="w-52 md:w-96"
      />

      <h1 className="text-white text-2xl md:text-4xl font-semibold mt-6">
        Page Not Found
      </h1>

      <p className="text-[#94a3b8] text-sm md:text-lg mt-3 max-w-md">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  )
}

export default NotFound
