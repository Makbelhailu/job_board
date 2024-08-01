import axios from "axios";

export const autoResize = (ref) => {
  const textarea = ref.current;
  textarea.style.height = "auto"; // Reset the height
  textarea.style.height = textarea.scrollHeight + "px"; // Set the height to the scrollHeight
};

export const fetchJobs = () => {
  return axios
    .get("http://localhost:5000/api/v1/jobs")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
