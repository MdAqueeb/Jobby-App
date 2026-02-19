const NoJobsView = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-white text-2xl">No Jobs Found</h1>
            <p className="text-[#cbd5e1] mt-2">
            We could not find any jobs. Try other filters.
            </p>
        </div>
    )
}
export default NoJobsView
