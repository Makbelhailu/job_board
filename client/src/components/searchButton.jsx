import { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FaSearch } from "react-icons/fa";

import { api, fetchJobs } from "../utils/functions";
import { useSetRecoilState } from "recoil";
import { jobsState } from "../utils/states";

const SearchButton = () => {
  const setJobList = useSetRecoilState(jobsState);
  const [searchList, setSearchList] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (!value.trim()) {
      setSearchList([]);
      fetchJobs().then((data) => {
        const jobs = data.jobs;
        if (jobs) setJobList(jobs);
      });
    } else {
      api
        .get(`/jobs/getTitles?title=${value}`)
        .then((res) => {
          const jobs = res.data;
          if (jobs) setSearchList(jobs);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target[0].value;

    console.log(value);
    if (value.trim()) {
      api
        .get(`/jobs/search?title=${value}`)
        .then((res) => {
          const jobs = res.data.jobs;
          console.log(jobs);
          if (jobs) setJobList(jobs);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      className="mr-auto w-full max-w-[600px] !rounded-full"
      options={searchList.map((title) => title)}
      disableClearable
      renderInput={(params) => (
        <form onSubmit={handleSubmit} className="searchInput relative">
          <TextField
            {...params}
            label="Search"
            className=""
            onChange={handleChange}
          />
          <button type="submit" className="absolute right-5 top-5 h-fit w-fit">
            <FaSearch className="text-lg" />
          </button>
        </form>
      )}
    />
  );
};

export default SearchButton;
