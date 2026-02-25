export const uploadImageToCloudinary = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "jobby_unsigned");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dwqaxpz7g/image/upload",
    {
      method: "POST",
      body: data,
    }
  );

  if (!res.ok) {
    throw new Error("Image upload failed");
  }

  return await res.json();
};