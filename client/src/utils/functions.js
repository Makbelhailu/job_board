import axios from "axios";
import moment from "moment";

export const autoResize = (ref) => {
  const textarea = ref.current;
  textarea.style.height = "auto"; // Reset the height
  textarea.style.height = textarea.scrollHeight + "px"; // Set the height to the scrollHeight
};

export const api = axios.create({
  baseURL: "http://localhost:5000/api/v1", // Replace with your API's base URL
});

export const fetchJobs = (page = 1) => {
  return api
    .get(`/jobs?page=${page}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const formatDate = (date) => moment(date).format("MMMM Do, YYYY");

export function useQuery(path) {
  return new URLSearchParams(path.search);
}
