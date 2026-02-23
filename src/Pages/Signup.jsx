import { useNavigate } from "react-router-dom";
import SignupCard from "../Components/SignupCard";

const Signup = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center px-4">
        <div>
            <SignupCard />
            <p className="text-[#7e858e] text-sm text-center mt-3">
                Already have an account?{" "}
                <span
                    onClick={() => navigate("/login")}
                    className="text-[#6366f1] hover:text-[#4f46e5] cursor-pointer"
                >
                    Login
                </span>
            </p>
        </div>
      
    </div>
  );
};

export default Signup;