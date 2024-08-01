import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import ApplicationCard from "./components/applicationCard";
import ApplicationForm from "./components/applicationForm";
import Register from "./pages/register";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import ErrorPage from "./components/errorPage";
import AccountType from "./components/accountType";

import { SignedIn, SignedOut } from "@clerk/clerk-react";

import { fetchJobs } from "./utils/functions";
import { useSetRecoilState } from "recoil";
import { jobsState } from "./utils/states";

function App() {
  const setJobs = useSetRecoilState(jobsState);

  useEffect(() => {
    fetchJobs()
      .then((data) => setJobs(data))
      .catch((err) => console.log("error fetching jobs: ", err));
  }, []);
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main className="m-0 h-[90%]">
          <SignedOut>
            <Routes>
              <Route path="*" element={<ErrorPage />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </SignedOut>
          <SignedIn>
            <Routes>
              <Route path="*" element={<ErrorPage />} />
              <Route path="/" element={<Home />} />
              <Route path="/account-type" element={<AccountType />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/:id" element={<ApplicationCard />} />
              <Route path="/apply/:title" element={<ApplicationForm />} />
            </Routes>
          </SignedIn>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
