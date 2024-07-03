import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import Login from "./pages/login";
import Register from "./pages/register";
import NavBar from "./components/navBar";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reg" element={<Register />} />
          </Routes>
        </main>
        <footer></footer>
      </BrowserRouter>
    </>
  );
}

export default App;
