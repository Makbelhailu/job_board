import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FaSearch } from "react-icons/fa";

import { api } from "../utils/functions";
import { useRecoilState } from "recoil";
import { searchJobState } from "../utils/states";

import { useSearchParams } from "react-router-dom";

const SearchBar = ({
  value,
  setValue,
  inputValue,
  setInputValue,
  page,
  count,
  setCount,
  isLoading,
  setIsLoading,
  clearFilterState,
}) => {
  const [searchList, setSearchList] = useState([]);
  const [searchedJob, setSearchedJob] = useRecoilState(searchJobState);
  const [query, setQuery] = useSearchParams();
  const btnRef = useRef(null);

  useEffect(() => {
    if (searchedJob.length) {
      const fetchInterval = setInterval(() => {
        api
          .get(`/jobs/search?title=${inputValue}&page=${page}`)
          .then((res) => {
            if (res.data.jobs.length > 12 && page == count) setCount(count + 1);
            setSearchedJob(res.data.jobs.splice(0, 12));
            clearInterval(fetchInterval);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log("error fetching jobs:", err.message);
          });
      }, 5000);

      return () => clearInterval(fetchInterval);
    }
  }, [page, isLoading]);

  const handleChange = (e) => {
    const value = e.target.value;
    // setInputValue(value);
    if (!value.trim()) {
      setSearchList([]);
      setSearchedJob([]);
      setValue("");
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
    if (inputValue.trim()) {
      setIsLoading(true);
      clearFilterState();
      setCount(1);
      setQuery({ ...query, page: 1 });
      api
        .get(`/jobs/search?title=${value}&page=1`)
        .then((res) => {
          const jobs = res.data.jobs;
          if (jobs.length > 12 && page == count) {
            setCount(count + 1);
            console.log("count changed\n");
          }
          if (jobs.length) setSearchedJob(jobs.slice(0, 12));
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        className="mr-auto w-full max-w-[600px] !rounded-full"
        options={searchList.map((title) => title)}
        value={value} // Controlled selected option
        onChange={(event, newValue) => {
          setValue(newValue); // Update the selected option
        }}
        inputValue={inputValue} // Controlled input text
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            btnRef.current.click();
          }
        }}
        disableClearable
        renderInput={(params) => (
          <div className="searchInput relative">
            <TextField
              {...params}
              label="Search"
              className=""
              onChange={handleChange}
              onFocus={(e) => {
                if (e.target.value.trim()) setSearchList([]);
              }}
              inputMode="search"
            />
            <button
              ref={btnRef}
              type="submit"
              className="absolute right-5 top-5 h-fit w-fit"
            >
              <FaSearch className="text-lg" />
            </button>
          </div>
        )}
      />
    </form>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.string,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.string,
  page: PropTypes.string,
  count: PropTypes.string,
  setCount: PropTypes.function,
  isLoading: PropTypes.bool,
  setIsLoading: PropTypes.function,
  clearFilterState: PropTypes.function,
};

export default SearchBar;
