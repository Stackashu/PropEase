import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import About from "./components/About/About";
// import SideTray from "./components/navbar/SideTray";
import Client from "./components/Client/Client";
import Services from "./components/services/Services";
import VisionValues from "./components/Values/Values";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const[contactTray,setContactTray] = useState(false)
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const clientRef = useRef(null);
  const serviceRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    if (contactTray) {
      document.body.style.overflow = 'hidden'; // disables scroll
    } else {
      document.body.style.overflow = ''; // enables scroll
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [contactTray]);

  const scrollToView = (section) => {
    if (section === "Home") {
      homeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "About") {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "Client") {
      clientRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "Services") {
      serviceRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "Values") {
      visionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="landing">
      <Navbar scrollToView={scrollToView} setContactTray={setContactTray} />
      {/* <SideTray trayOpen={trayOpen} setTrayOpen={setTrayOpen}/> */}
      <div ref={homeRef}>
        <Hero />
      </div>

      <div ref={aboutRef}>
        <About scrollToView={scrollToView} />
      </div>

      <div ref={clientRef}>
        <Client />
      </div>

      <div ref={serviceRef}>
        <Services />
      </div>

      <div ref={visionRef}>
        <VisionValues />
      </div>

      <div className={`conForm ${contactTray? 'overlayForm':''}`} style={{display : contactTray? 'flex' : '', } }>
        <Form setContactTray={setContactTray} />
      </div>
      <Footer />
      <ToastContainer/>
    </div>
  );
};

export default App;
