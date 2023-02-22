import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolios from "./components/portfolio/Portfolios";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [activeColor, setActiveColor] = useState("");

  useEffect(() => {

    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });

    if (localStorage.getItem("selectedTheme")) {
      const activeTheme = localStorage.getItem("selectedTheme");
      const parseTheme = JSON.parse(activeTheme || "");
      if (parseTheme) {
        setActiveColor(parseTheme);
      }
    }
  }, []);

  return (
    <div
      className={`
     ${
       activeColor === "yellow"
         ? "yellowTheme"
         : activeColor === "blue"
         ? "blueTheme"
         : activeColor === "pink"
         ? "pinkTheme"
         : activeColor === "green"
         ? "greenTheme"
         : activeColor === "orange"
         ? "orangeTheme"
         : ""
     } `}
    >
      <ToastContainer/>
      <ThemeSwitcher setActiveColor={setActiveColor} />
      <Navbar />
      <Hero activeColor={activeColor} />
      <About />
      <Skills />
      <Services />
      <Portfolios />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
