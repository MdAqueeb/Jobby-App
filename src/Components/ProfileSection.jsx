import ProfileFailureView from './ProfileFailureView'
import ProfileBg from '../assets/profile-bg.png'
import { useAuth } from '../context/AuthContext'

const ProfileSection = () => {


  const { user } = useAuth();

  if (!user) return <ProfileFailureView />

  const CLOUDINARY_URL = 'https://res.cloudinary.com/dwqaxpz7g/image/upload/';

  const profileImage = user.user_profile
  ? user.user_profile
  : "https://assets.ccbp.in/frontend/react-js/profile-img.png";
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
                src={profileImage}
                alt="profile"
                className="w-14 h-14 rounded-full"
                />
            <h1 className="text-[#6366f1] text-lg font-semibold">
                {user.username}
            </h1>
          
        </div>

        <p className="text-[#475569] text-sm mt-1">
            {user.short_bio}
        </p>
    </div>
  )
}

export default ProfileSection
