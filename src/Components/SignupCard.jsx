import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo-img.png";
import { uploadImageToCloudinary } from "../services/cloudinaryService";
import { validateImage } from "../utils/imageValidation";
import { Signupapi } from "../apis/UserApi"; 

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Logo from "../assets/logo-img.png";
// import { uploadImageToCloudinary } from "../services/cloudinaryService";
// import { validateImage } from "../utils/imageValidation";
// import { Signupapi } from "../apis/UserApi";
import imageCompression from "browser-image-compression";

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
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle image selection & compression
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const errorMsg = validateImage(file);
    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    try {
      // Compress image before upload (optional, reduces upload time)
      const compressedFile = await imageCompression(file, {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1024,
        useWebWorker: true
      });

      setImage(compressedFile);
      setPreview(URL.createObjectURL(compressedFile));
      setError("");
    } catch (err) {
      console.error("Image compression error:", err);
      setError("Failed to process image.");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    let imageUrl = null;
    let imagePublicId = null;

    try {
      // Upload image to Cloudinary if exists
      if (image) {
        setError("Uploading image...");
        const uploadResult = await uploadImageToCloudinary(image);
        imageUrl = uploadResult.secure_url;
        imagePublicId = uploadResult.public_id;
      }

      // Prepare user object
      const user = {
        username: formData.username,
        password: formData.password,
        short_bio: formData.short_bio,
        user_profile: imageUrl,
        imagePublicId
      };

      setError("Registering user...");
      await Signupapi(user);

      // Navigate to login after success
      navigate("/login");
    } catch (err) {
      console.error(err);
      if (err?.response?.data) {
        setError(`Backend Error: ${err.response.data.message || err.response.data}`);
      } else if (err?.message) {
        setError(`Image Upload Error: ${err.message}`);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
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
          <label className="text-[#f8fafc] text-sm font-semibold">PROFILE IMAGE</label>
          <div className="mt-2 flex flex-col items-center gap-3">
            <label className="w-full border-2 border-dashed border-[#475569] rounded-lg p-4 text-center text-[#7e858e] hover:border-[#6366f1] cursor-pointer transition">
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
                  className="text-sm bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition text-white cursor-pointer"
                >
                  Remove Image
                </button>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`bg-[#6366f1] text-white cursor-pointer py-2 rounded mt-3 hover:bg-[#4f46e5] transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Please wait..." : "Sign Up"}
        </button>

        {error && <p className="text-[#ff0b37] text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default SignupCard;