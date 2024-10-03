import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import ApplicationCard from "./components/applicationCard";
import ApplicationForm from "./components/applicationForm";
import Dashboard from "./pages/dashboard";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import ErrorPage from "./pages/errorPage";
import AccountType from "./pages/accountType";
import Post from "./pages/post";
import About from "./pages/about";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

import { fetchJobs } from "./utils/functions";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { jobsState, userState, getAccountType } from "./utils/states";
import { useUser } from "@clerk/clerk-react";

function App() {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const setJobList = useSetRecoilState(jobsState);
  const accountType = useRecoilValue(getAccountType);
  const [isLoading, setIsLoading] = useState(true);
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      fetchJobs()
        .then((data) => {
          setJobList(data.jobs);
          setIsLoading(false);
          clearInterval(fetchInterval);
        })
        .catch((err) => {
          console.error("error fetching jobs:", err.message);
        });
    }, 5000);

    return () => clearInterval(fetchInterval);
  }, []);

  useEffect(() => {
    if (isSignedIn)
      setUserInfo({
        user,
        isSignedIn,
        accountType: user.unsafeMetadata.AccountType,
      });
  }, [isLoaded]);

  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main className="m-0 md:h-[91%]">
          <SignedOut>
            <Routes>
              <Route path="/" element={<Home isLoading={isLoading} />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/post" element={<Post />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </SignedOut>
          <SignedIn>
            <Routes>
              <Route path="/" element={<Home isLoading={isLoading} />} />
              <Route
                path="/dashboard"
                element={<Dashboard accountType={accountType} />}
              />
              <Route path="/account-type" element={<AccountType />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/:id" element={<ApplicationCard />} />
              {accountType === "company" ? (
                <Route path="/post" element={<Post />} />
              ) : (
                <Route path="/apply/:id" element={<ApplicationForm />} />
              )}
              <Route path="/about" element={<About />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </SignedIn>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
