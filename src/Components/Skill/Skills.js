import React, { useContext, Fragment, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import "./skills.css";
import VisibilitySensor from "react-visibility-sensor";
import skillsIllustration from "../../assets/imgs/focused_working.svg";
import { skillsSection } from "../../techfolio";
import { ScrollContext } from "../../Context/scroll";
import fire from "./../../assets/imgs/fire.png";
import Heading from "../common/Heading";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import db from "../../firebase";
import { toast } from "react-toastify";


function Skills() {

  const [skills, setSkills ] = useState([])

const getSkills = async() =>{
  const projectCol = onSnapshot(collection(db, "skills"), (snapshot) => setSkills(snapshot.docs.map((doc) =>({
    data:  doc.data(), 
    id: doc.id
  }))))
 
}

  useEffect(() =>{
  
    getSkills()

    return () =>{
      getSkills()
    }
    
  }, [])

  const handleDelete = async(id) =>{
    
    try {
     const del = await deleteDoc(doc(db,  "skills", id))
     .then((res) =>  toast.success("deleted successfully"))
     .catch((res) =>  toast.warn("fail to delete"))
     
    } catch (error) {
      toast.error(error.message)
    }
  }

  const { scrollChange } = useContext(ScrollContext);
  const skillsSet = skills.map((skill, i) => {
    return (
      <div onDoubleClick={() => handleDelete(skill?.id)} className="mx-2"  key={skill?.id}>
        <i className={`${skill?.data?.fontAwesomeClassname} skill_img`}></i>
      </div>
    );
  });
  const skillsTagLines = skillsSection.skillsTagLines.map((tagline, i) => {
    return (
      <h3 className="skills_section_skill" key={i}>
        <img
          draggable="false"
          className="emoji"
          alt="💠"
          src={fire}
        ></img>
        {tagline}
      </h3>
    );
  });
  return (
    <Fragment>
      <div className="d-block d-md-none">
      <Heading heading={"Skills"} style={{ marginBottom: "60px" }} />
      </div>
      <section className="" id="skillsSection" name="skills">
        <div className="site-container">
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible) {
                scrollChange("skills");
              }
            }}
          >
            <div className="row justify-content-center">
              <div className="col-xs-12 col-md-6" >
                <Flip left>
              
                  <img src={skillsIllustration} alt="skills" />{" "}
                </Flip>
              </div>
              <div className="col-xs-12 col-md-6">
                <Fade bottom cascade>
                  {skills  === []? <div className="text-center ">Loading...</div> : 
                  <div className="d-flex align-items-center flex-wrap skills_section_skillsSets">{skillsSet} </div>
                  }
                  {skillsTagLines}
                </Fade>
              </div>
            </div>
          </VisibilitySensor>
        </div>
      </section>
    </Fragment>
  );
}

export default Skills;
