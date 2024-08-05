import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import ApplicationCard from "./components/applicationCard";
import ApplicationForm from "./components/applicationForm";
import Loading from "./components/loading";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import ErrorPage from "./components/errorPage";
import AccountType from "./components/accountType";

import { SignedIn, SignedOut } from "@clerk/clerk-react";

import { fetchJobs } from "./utils/functions";
import { useRecoilState } from "recoil";
import { useSetRecoilState } from "recoil";
import { jobsState, userState } from "./utils/states";
import { useUser } from "@clerk/clerk-react";

function App() {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const setJobList = useSetRecoilState(jobsState);
  const [isLoading, setIsLoading] = useState(true);
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      fetchJobs()
        .then((data) => {
          setJobList(data);
          setIsLoading(false);
          console.log("12 job fetched");
          clearInterval(fetchInterval);
        })
        .catch((err) => {
          console.log("error fetching jobs:", err.message);
        });
    }, 5000);

    return () => clearInterval(fetchInterval);
  }, []);

  useEffect(() => {
    if (isSignedIn) setUserInfo({ ...user, isSignedIn });
  }, [isLoaded]);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main className="m-0 h-[90%]">
          <SignedOut>
            <Routes>
              <Route path="/" element={<Home isLoading={isLoading} />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </SignedOut>
          <SignedIn>
            <Routes>
              <Route path="/" element={<Home isLoading={isLoading} />} />
              {<Route path="/account-type" element={<AccountType />} />}
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/:id" element={<ApplicationCard />} />
              <Route path="/apply/:title" element={<ApplicationForm />} />
              <Route path="*" element={<ErrorPage />} />
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
