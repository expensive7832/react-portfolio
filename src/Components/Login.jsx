import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.min.css'; 


const Login = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(name === process.env.REACT_APP_ADMIN){
          localStorage.setItem("techFolioAdmin", name )
          navigate(`/add-project/${process.env.REACT_APP_ADMIN}`)
        }else{
            toast.error("Hey! Do not be a stubborn guy, kindly go back now!!! ")
        }
    }

  return (
    <div className="w-50 position-absolute top-50 start-50 translate-middle">
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login