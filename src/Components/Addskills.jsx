import React, { useState } from 'react'
import db from './../firebase'
import { toast } from 'react-toastify'; 
import {useNavigate} from 'react-router-dom'
import { addDoc, collection} from "firebase/firestore"; 


const Addskills = () => {

  const navigate = useNavigate()


const [skill, setSkill ] = useState("");

const handleSubmit = async() =>{
  const projectCol = collection(db, 'skills');
  
  try {
    const addProject = await addDoc(projectCol,{
      'fontAwesomeClassname': skill,
    })

    if(!addProject){
      toast.warn("fail to add")
    }else{
      setSkill("")
      toast.success("successfully added");
      navigate("/")
    }

  } catch (error) {
    toast.error("error.message")
  }
}

  return (
    <div className="w-50 position-absolute top-50 start-50 translate-middle">
       <div className="form-group" >
           <label htmlFor="pjn">Skill</label>
           <input placeholder='fontawesome icon class' className="form-control" id="pjn" type="text" onChange={e => setSkill(e.target.value)} />
       </div>
      
        <div  className="form-group">
            <button onClick={handleSubmit} className="btn btn-primary my-3">Submit</button>
        </div>
    </div>
  )
}

export default Addskills