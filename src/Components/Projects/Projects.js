import React, { useEffect, useState, Fragment } from "react";
import { collection, onSnapshot} from "firebase/firestore";
import db from "./../../firebase";
import Fade from "react-reveal/Fade";
import ProjectCard from "./ProjectCard";
import "./project.css";
import Heading from "../common/Heading";


function Projects() {

const [pr, setPr ] = useState([])

const getProjects = async() =>{
  const projectCol = onSnapshot(collection(db, "projects"), (snapshot) => setPr(snapshot.docs.map((doc) =>({
    data:  doc.data(), 
    id: doc.id
  }))))
 
}

  useEffect(() =>{
  
    getProjects()

    return () =>{
      getProjects()
    }
    
  }, [])

  const projects = pr.map((project, i) => {
    return <ProjectCard project={project} key={project?.id} />;
  });
  const initialValue = projects.length > 2 ? 2 : projects.length;
  const [view, setView] = useState(2);


  return (
    <Fragment>
      <div className="d-block d-md-none">
         <Heading heading={"Projects"} style={{ marginBottom: "30px" }} />
      </div>
      {pr === [] ? 
           <div className="d-flex justify-content-center">
             <div class="spinner-grow text-info" role="status">
              <span class="sr-only">Loading...</span>
            </div>
           </div> :
      <section className="section section5" name="projects">
        <div className="site-container">
          <Fade bottom>
            <div className="project-cards">{projects.slice(0, view)}</div>
            <div className="justify-content-around">
              <div className="banner-content d-flex align-items-center">
                <div className="banner-btns">
                  {projects?.length > view ? (
                    <button
                      className="btn btn-1"
                      onClick={() => {
                        setView((prev) => prev + 1 );
                      }}
                    >
                      View more
                    </button>
                  ) : projects.length === view && (
                    <p className="py-1 text-white">Check Back For More Later</p>
                  )}
                </div>
                <button
                style={{"display": `${pr === [] ? "none" : "block"}`}}
                      className="btn btn-1"
                      onClick={() => {
                        setView((prev) => prev - 1 );
                      }}
                    >
                      View less
                    </button>
              </div>
            </div>
           
           
          </Fade>
        </div>
      </section>
    }
    </Fragment>
  );
}

export default Projects;
