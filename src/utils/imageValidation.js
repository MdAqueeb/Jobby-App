export const validateImage = (file) => {
  const MAX_SIZE = 1 * 1024 * 1024;
  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];

  if (!allowedTypes.includes(file.type)) {
    return "Only JPG, PNG, JPEG, WEBP allowed";
  }

  if (file.size > MAX_SIZE) {
    return "File must be less than 1MB";
  }

  return null;
};