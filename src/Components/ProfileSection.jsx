import ProfileFailureView from './ProfileFailureView'
import ProfileBg from '../assets/profile-bg.png'

const ProfileSection = ({ status }) => {
  if (status === 'FAILURE') {
    return <ProfileFailureView />
  }

  return (
    <div
      className="rounded-xl p-4 flex flex-col gap-4"
      style={{
        backgroundImage: `url(${ProfileBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
      }}
    >
        <div>
            <img
                src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
                alt="profile"
                className="w-14 h-14 rounded-full"
                />
            <h1 className="text-[#6366f1] text-lg font-semibold">
                Rahul Attuluri
            </h1>
          
        </div>

        <p className="text-[#475569] text-sm mt-1">
            Lead Software Developer and AI-ML expert
        </p>
    </div>
  )
}

export default ProfileSection
