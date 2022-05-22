import React, { StrictMode, Suspense } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ReactDOM from "react-dom";
import "./index.css";
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.min.css'; 
import Loader from "./Components/common/Loader.js";
const App = React.lazy(() => import("./App"));
const Login = React.lazy(() => import("./Components/Login"));
const AddProject = React.lazy(() => import("./Components/AddProject"));
const Addskill = React.lazy(() => import("./Components/Addskills"));


ReactDOM.render(
    <StrictMode>
      <Suspense fallback={<Loader />}>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/admin" element={<Login />}/>
      <Route path="/add-project/:user" element={<AddProject />}/>
      <Route path="/add-skills/:user" element={<Addskill />}/>
     </Routes>
     </BrowserRouter>
     <ToastContainer/>
    </Suspense>
    </StrictMode> , 
    document.getElementById("root"));
