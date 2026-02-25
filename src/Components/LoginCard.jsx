import { useState } from 'react';
import Logo from '../assets/logo-img.png';
import { useNavigate } from 'react-router-dom';
import { Loginapi } from '../apis/UserApi';
import { useAuth } from '../context/AuthContext';

const LoginCard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    let credential = {
      "username" : username,
      "password" : password
    }
    Loginapi(credential)
      .then((res) => {
        console.log(res, res.data,+"data");
        login(res.data);
        setError("");
        navigate('/');
        return 
      })
      .catch((err) => {
        console.log(err);
        if(err.message === "User Not Found"){
          navigate("/signup");
          return 
        }
        else if(err.message === "Password Invalid"){

          setError("*Username and Password didn't match");
          return;
        }
        else{
          setError("Server Not reachable");
          return ;
        }
        
      })

    
    console.log(username, password);
  };

  return (
    <div
        className="
          bg-[#272727] 
          rounded-lg 
          p-6 
          w-full 
          max-w-sm

          min-[576px]:max-w-md
          min-[768px]:max-w-lg
          min-[992px]:max-w-xl
          min-[1200px]:max-w-xl
        "
      >
        <div className="flex justify-center mb-8">
          <img src={Logo} alt="jobby logo" className="h-10" />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <div>
            <label className="text-[#f8fafc] text-sm font-semibold">
              USERNAME
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="
                mt-2 w-full
                bg-[#272727]
                border border-[#475569]
                text-[#f8fafc]
                placeholder:text-[#7e858e]
                px-4 py-2
                rounded
                outline-none
                focus:border-[#6366f1]
              "
              required
            />
          </div>

          <div>
            <label className="text-[#f8fafc] text-sm font-semibold">
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="
                mt-2 w-full
                bg-[#272727]
                border border-[#475569]
                text-[#f8fafc]
                placeholder:text-[#7e858e]
                px-4 py-2
                rounded
                outline-none
                focus:border-[#6366f1]
              "
              required
            />
          </div>

          <button
            type="submit"
            className="
              bg-[#6366f1]
              text-white
              py-2
              rounded
              mt-3
              hover:bg-[#4f46e5]
              transition
            "
          >
            Login
          </button>

          {error && (
            <p className="text-[#ff0b37] text-sm mt-1">
              {error}
            </p>
          )}
        </form>
      </div>
  );
};

export default LoginCard;
