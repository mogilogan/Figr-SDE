import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproject, fetchprojects } from "../../action/projects";
import { FaPlus } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";

const Projects = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const { names } = useSelector((state) => state.projects);
  const [selectedproject, setSelectedproject] = useState();
  const navigate  = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
  

    fetchProjects();



    
  }, []);


  const fetchProjects = async ()=>{
    const formData = { email: user.result.email };
    await dispatch(fetchprojects(formData));
  }

  const fetchProject =(e)=>{
    const formData = {name:e.target.value};
    dispatch(fetchproject(formData))
  }

  return (
    <div className="flex justify-between p-6">
        <div>
        {names  ?
      <select onChange={fetchProject}>
        <option>Select Projects</option>
        {names?.map((project) => {
          return <option key={project._id} value={project.name}>{project.name}</option>;
        })}
      </select>
: <p>No Projects exist for user!</p>


}</div>
<div>
    <button onClick={()=>navigate("/create")} className="bg-[#882a2a] p-2 rounded-md flex justify-center items-center">Create new project <FaPlus size={15} className="mx-1" /></button>
</div>
    </div>
  );
};

export default Projects;
