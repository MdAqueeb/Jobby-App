import Logo from '../assets/logo-img.png'
import { AiFillHome } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 py-4 bg-[#202020]">

        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="h-8 md:h-10 object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-[#6366f1]">Home</Link>
          <Link to="/jobs" className="hover:text-[#6366f1]">Jobs</Link>
          
        </div>

        <div className="hidden md:block">
          <button className="bg-[#6366f1] px-4 py-2 rounded-md" onClick={() => {navigate("/login")}}>
            Logout
          </button>
        </div>

        <div className="flex md:hidden items-center space-x-6 text-xl">
          <Link to="/">
            <AiFillHome />
          </Link>
          <Link to="/jobs">
            <FaBriefcase />
          </Link>
          <button  onClick={() => {navigate("/login")}}>
            <FiLogOut />
          </button>
        </div>
      </nav>
    )
}

export default NavBar;