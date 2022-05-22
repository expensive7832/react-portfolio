import React, { useState } from 'react'
import db from './../firebase'
import { collection, addDoc } from "firebase/firestore"; 
import { toast } from 'react-toastify'; 
import {useNavigate, useParams } from 'react-router-dom'

const AddProject = () => {

  const navigate = useNavigate()
  const {user} = useParams()
 

const [projectName, setProjectName ] = useState("");
const [projectBio, setProjectBio ] = useState("");
const [projectUrl, setProjectUrl ] = useState("");
const [stackList, setStackList ] = useState("");

const stackArray = stackList.split(',')
const handleSubmit = async() =>{
  const projectCol = collection(db, 'projects');
  
  try {
    const addProject = await addDoc(projectCol,{
      'projectName': projectName,
      'projectBio': projectBio,
      'projectUrl': projectUrl,
      'stackList': stackArray
    })

    if(!addProject){
      toast.warn("fail to add")
    }else{
      setProjectName("")
      setProjectBio("")
      setProjectUrl("")
      setStackList("")
      toast.success("successfully added");
      navigate("/")
    }

  } catch (error) {
    toast.error("error.message")
  }


}

  return (
    <div style={{"display": `${user === "amuda7832" ? "block" : "none"}`}} className="w-50 position-absolute top-50 start-50 translate-middle">
       <div className="form-group" >
           <label htmlFor="pjn">ProjectName</label>
           <input className="form-control" id="pjn" type="text" onChange={e => setProjectName(e.target.value)} />
       </div>
       <div  className="form-group">
           <label htmlFor="pjb">ProjectBio</label>
        <input  className="form-control" id="pjb" type="text" onChange={e => setProjectBio(e.target.value)} />
        </div>
        <div  className="form-group">
           <label htmlFor="pju">ProjectUrl</label>
        <input  className="form-control" id="pju" type="text" onChange={e => setProjectUrl(e.target.value)} />
        </div>
        <div  className="form-group">
           <label htmlFor="pjs">ProjectStack</label>
        <textarea  className="form-control" id="pjs" onChange={e => setStackList(e.target.value)}></textarea>
        </div>
        <div  className="form-group">
            <button onClick={handleSubmit} className="btn btn-primary my-3">Submit</button>
        </div>
        
    </div>
  )
}

export default AddProject