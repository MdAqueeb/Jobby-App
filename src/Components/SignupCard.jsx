import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo-img.png";

const SignupCard = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    short_bio: ""
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password || !formData.short_bio || !image) {
      setError("*All fields including image are required");
      return;
    }

    setError("");

    const data = new FormData();
    data.append("username", formData.username);
    data.append("password", formData.password);
    data.append("short_bio", formData.short_bio);
    data.append("image", image);

    try {
      await fetch("http://localhost:8080/users/register", {
        method: "POST",
        body: data
      });

      navigate("/login");

    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <div className="bg-[#272727] rounded-lg p-6 w-full max-w-sm min-[576px]:max-w-md min-[768px]:max-w-lg min-[992px]:max-w-xl">
      
      <div className="flex justify-center mb-8">
        <img src={Logo} alt="logo" className="h-10" />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        <div>
          <label className="text-[#f8fafc] text-sm font-semibold">USERNAME</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-2 w-full bg-[#272727] border border-[#475569] text-[#f8fafc] px-4 py-2 rounded outline-none focus:border-[#6366f1]"
            required
          />
        </div>

        <div>
          <label className="text-[#f8fafc] text-sm font-semibold">PASSWORD</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-2 w-full bg-[#272727] border border-[#475569] text-[#f8fafc] px-4 py-2 rounded outline-none focus:border-[#6366f1]"
            required
          />
        </div>

        <div>
          <label className="text-[#f8fafc] text-sm font-semibold">SHORT BIO</label>
          <textarea
            name="short_bio"
            value={formData.short_bio}
            onChange={handleChange}
            className="mt-2 w-full bg-[#272727] border border-[#475569] text-[#f8fafc] px-4 py-2 rounded outline-none focus:border-[#6366f1]"
            required
          />
        </div>

  
        <div>
        <label className="text-[#f8fafc] text-sm font-semibold">
            PROFILE IMAGE
        </label>

        <div className="mt-2 flex flex-col items-center gap-3">

            <label
            className="
                w-full
                border-2 border-dashed border-[#475569]
                rounded-lg
                p-4
                text-center
                text-[#7e858e]
                hover:border-[#6366f1]
                cursor-pointer
                transition
            "
            >
            Click to Upload Image
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
            />
            </label>

            {preview && (
            <div className="flex flex-col items-center gap-3">
                <img
                src={preview}
                alt="preview"
                className="h-24 w-24 object-cover rounded-full border border-[#6366f1]"
                />

                <button
                type="button"
                onClick={() => {
                    setImage(null);
                    setPreview(null);
                }}
                className="
                    text-sm
                    bg-red-600
                    px-3 py-1
                    rounded
                    hover:bg-red-700
                    transition
                    text-white
                    cursor-pointer
                "
                >
                Remove Image
                </button>
            </div>
            )}
        </div>
        </div>

        <button
          type="submit"
          className="bg-[#6366f1] text-white cursor-pointer py-2 rounded mt-3 hover:bg-[#4f46e5] transition"
        >
          Sign Up
        </button>

        {error && (
          <p className="text-[#ff0b37] text-sm">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default SignupCard;