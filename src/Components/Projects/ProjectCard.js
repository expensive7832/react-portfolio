import React, { useContext } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { ScrollContext } from "../../Context/scroll";
import projectImg from "../../assets/imgs/dummy-project.png";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from 'react-toastify'; 
import db from "../../firebase";


function ProjectCard({ project }) {
  const { scrollChange } = useContext(ScrollContext);

  const user = localStorage.getItem("techFolioAdmin")


  const handleDelete = async(id) =>{
    
    try {
     const del = await deleteDoc(doc(db,  "projects", id))
     .then((res) =>  toast.success("deleted successfully"))
     .catch((res) =>  toast.warn("fail to delete"))
     
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <VisibilitySensor
     
      onChange={(isVisible) => {
        if (isVisible) {
          scrollChange("projects");
        }
      }}
    ><>
      <a href={project?.data?.projectUrl}>
      <div className="project-card">
        <div className="content-wrapper">
          <img src={projectImg} alt="" className="project-card-img" />
          <div className="card-content">
            <div className="project-name">{project?.data?.projectName}</div>
            <div className="card-bio">{project?.data?.projectBio}</div>
          </div>
        </div>
        <div className="languages">
          <div className="languages-profile">
            <div className="languages-name">
              {project?.data?.stackList.map((stack, i) => {
                return <span key={i}>{stack}</span>;
              })}
            </div>
          </div>
        </div>
      
      </div>
      
      </a>
     {user &&  <button className="btn-danger w-25 btn-sm m-auto"  onClick={() => handleDelete(project?.id)}>Delete</button>}
     </>
    </VisibilitySensor>
  );
}

export default ProjectCard;
