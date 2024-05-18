import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Suspense } from "react";
import Hero from "./components/Hero/Hero";
import { Loader } from "@react-three/drei";
import About from "./components/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
        <Loader />
        <About />
      </BrowserRouter>
    </>
  );
}

export default App;
