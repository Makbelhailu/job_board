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
export const hasFilter = (filters) => {
  return (
    filters.countries.length || filters.sectors.length || filters.type.length
  );
};
export const fetchByFilter = (filters, search = "", page = 1) => {
  const { countries, sectors, type } = filters;

  console.log(filters);
  const queryParams = new URLSearchParams();

  if (search.trim()) queryParams.append("search", search);
  if (countries.length > 0)
    queryParams.append("countries", countries.join(","));
  if (sectors.length > 0) queryParams.append("sectors", sectors.join(","));
  if (type.length > 0) queryParams.append("type", type.join(","));

  queryParams.append("page", page);

  // Make the API request with the query parameters
  return api
    .get(`/jobs/filter?${queryParams.toString()}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
