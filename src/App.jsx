import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Suspense, useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import { Loader } from "@react-three/drei";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import ProjectMobile from "./components/Projects/ProjectMobile";
import Technologies from "./components/Technologies/Technologies";
import Poster from "./components/Poster";

function App() {
  const [isDeskTop, setIsDeskTop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleSize = () => {
      setIsDeskTop(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  });

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
        <Loader />
        <About />
        {isDeskTop ? (
          <Suspense fallback={null}>
            <Project />
          </Suspense>
        ) : (
          <ProjectMobile />
        )}
        <Technologies />
        <Poster />
      </BrowserRouter>
    </>
  );
}

export default App;
