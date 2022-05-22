import React from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import Banner from "./Components/Layout/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Skills from "./Components/Skill/Skills";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Layout/Footer";
import SideNav from "./Components/Layout/Navbar/SideNav";
import { ScrollProvider } from "./Context/scroll";


function App() {
  return (
  
<ScrollProvider>

      <div className="wrapper">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="d-none d-md-block col-md-2">
              <SideNav /> 
            </div>
            <div className="col-12 col-md-10">
              <Banner />
              <About />
              <Skills />
            
              <Projects />
              <Experience />
              <Contact />
              </div>
          </div>
        </div>
        
        <Footer />
      </div>
      
</ScrollProvider>
   
    
  );
}

export default App;
