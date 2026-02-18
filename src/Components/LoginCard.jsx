import { useState } from 'react';
import Logo from '../assets/logo-img.png';

const LoginCard = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErr] = useState("");

  const handleChangeUser = (e) => setUserName(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    setErr("*username and password invalid"); // Clear error
    e.preventDefault();
    console.log("Username:", username, "Password:", password);

  };

  return (
    <section className="border flex flex-col bg-[#272727] gap-10 p-8 rounded-sm max-w-md mx-auto mt-20">
      <div className='flex gap-6 items-center justify-center'>
        <img src={Logo} alt="Jobby Logo" className='h-12' />
      </div>

      <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>

          <div>
            <label htmlFor="username" className='text-sm text-white font-bold'>USERNAME</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChangeUser}
              placeholder='Username'
              className='mt-1 outline-gray-700 outline w-full text-[#f8fafc] text-sm placeholder:text-[#565656] px-5 py-1 rounded-sm bg-[#272727]'
              required
            />
          </div>

          <div>
            <label htmlFor="password" className='text-sm text-white font-bold'>PASSWORD</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChangePassword}
              placeholder='Password'
              className='mt-1 outline-gray-700 outline w-full text-[#f8fafc] text-sm placeholder:text-[#565656] px-5 py-1 rounded-sm bg-[#272727]'
              required
            />
          </div>
        </div>

        <div className='flex flex-col'>
             <button
          type="submit"
          className='bg-[#6366f1] text-white rounded-[8px] py-2 hover:bg-[#4f46e5] cursor-pointer transition-colors duration-200'
        >
          Login
        </button>
        {error && (
        <p className='text-red-500 text-sm'>
          {error}
        </p>
      )}
        </div>
       
      </form>

      
    </section>
  );
};

export default LoginCard;
