import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproject, fetchprojects } from "../../action/projects";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Field from "./Field";
import Edit from "./Edit";
import { CLEAR_PROJECT } from "../../constants/actionTypes";

const Projects = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const { names, projectDetails } = useSelector((state) => state.projects);
  

  const [selectedproject, setSelectedproject] = useState();
  const [selected,setSelected]=useState(false);
 
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleEdit = () =>{
    setSelected(false);
   navigate("/Edit")
  }

  const fetchProjects = async () => {
    const formData = { email: user.result.email };
    await dispatch(fetchprojects(formData));
  };

  const fetchProject = (e) => {
    const formData = { name: e.target.value };
    
    if(e.target.value === 'Select Projects'){
      setSelected(false);
      dispatch({ type: CLEAR_PROJECT});

    }else{
    setSelected(true);
    dispatch(fetchproject(formData));
    }
  };

  return (
    <div>
      <div className="flex justify-between p-6">
        <div className="flex flex-row justify-center items-center gap-4">
          {names ? (
            <select
              className="bg-[#a8a824] px-2 rounded-xl"
              onChange={fetchProject}
            >
              <option  value='Select Projects'>Select Projects</option>
              {names?.map((project) => {
                return (
                  <option key={project._id} value={project.name}>
                    {project.name}
                  </option>
                );
              })}
            </select>
          ) : (
            <p>No Projects exist for user!</p>
          )}

          {selected &&
          <div
            onClick={handleEdit}
            className="flex items-center hover:cursor-pointer justify-center gap-2 bg-[#ad2c2c] px-2 rounded-xl"
          >
            
            Edit <FaRegEdit />
          </div> }
        </div>

        <div>
          <button
            onClick={() => navigate("/create")}
            className="bg-[#882a2a] p-2 rounded-md flex justify-center items-center"
          >
            Create new project <FaPlus size={15} className="mx-1" />
          </button>
        </div>
      </div>
     
       <Field project={projectDetails} />

    </div>
  );
};

export default Projects;
