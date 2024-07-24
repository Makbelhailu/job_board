import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import ApplicationForm from "./components/applicationForm";
import Register from "./pages/register";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main className="m-0 h-[90%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/apply/:title" element={<ApplicationForm />} />
            <Route path="/reg" element={<Register />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
