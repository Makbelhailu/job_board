import axios from "axios";
import moment from "moment";

export const autoResize = (ref) => {
  const textarea = ref.current;
  textarea.style.height = "auto"; // Reset the height
  textarea.style.height = textarea.scrollHeight + "px"; // Set the height to the scrollHeight
};

export const fetchJobs = (page = 1) => {
  return axios
    .get("http://localhost:5000/api/v1/jobs", { page: page })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const formatDate = (date) => moment(date).format("MMMM Do, YYYY");
