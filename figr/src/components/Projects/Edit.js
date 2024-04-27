import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createproject, updateproject } from '../../action/projects';

const Edit = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const { projectDetails } = useSelector((state) => state.projects);

    const [formData, setFormData] = useState(projectDetails);
    
  const dispatch = useDispatch();
  const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        const [parentKey, childKey] = name.split("["); // Extract parent and child keys
        const updatedFormData = { ...formData };
    
        // If it's a nested field (like colors, radius, or spacing)
        if (childKey) {
          const childKeyTrimmed = childKey.slice(0, -1); // Remove the ']' from child key
          updatedFormData[parentKey][childKeyTrimmed] = value;
        } else {
          updatedFormData[name] = value;
        }
        
        setFormData(updatedFormData);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
       
    
    
        
      dispatch(updateproject(formData))
        
       
    
       
      };

      useEffect(() => {
        if(!projectDetails?.name){
            navigate("/projects")
        }
      }, [])
      

     
      
    
  return (
    <div className="m-2">
        <div>
            <p>Edit the Project : {formData?.name}</p>
        </div>
    <form id="projectForm" class="max-w-md mx-auto mt-8" onSubmit={handleSubmit} >
   <div class="mb-4">
       <label for="email" class="block text-gray-700">Email</label>
       <input type="email" id="email" name="email"  onChange={handleChange} class="form-input mt-1 block w-full" placeholder={user?.result?.email} disabled/>
   </div>
   <div class="mb-4">
       <label for="name" class="block text-gray-700">Project Name</label>
       <input type="text" id="name" name="name"  onChange={handleChange} class="form-input mt-1 block w-full" placeholder="Enter your name" value={formData?.name} disabled/>
   </div>
   <div className="flex flex-row gap-10">
   <div class="mb-4">
       <label class="block text-gray-700">Colors</label>
       <input type="text" id="primaryColor"  onChange={handleChange} name="colors[primary]" placeholder="primary" value={formData?.colors?.primary} class="form-input mt-1 block w-full" required/>
       <input type="text" id="secondaryColor"  onChange={handleChange} name="colors[secondary]" placeholder="secondary" value={formData?.colors?.secondary} class="form-input mt-1 block w-full" required/>
       <input type="text" id="tertiaryColor"  onChange={handleChange} name="colors[tertiary]" placeholder="tertiary" value={formData?.colors?.tertiary} class="form-input mt-1 block w-full" required/>
       <input type="text" id="quardinaryColor"  onChange={handleChange} name="colors[quardinary]" placeholder="quardinary" value={formData?.colors?.quardinary} class="form-input mt-1 block w-full" required/>
   </div>
   <div class="mb-4">
       <label class="block text-gray-700">Radius</label>
       <input type="text" id="MRadius" name="radius[M]"  onChange={handleChange} class="form-input mt-1 block w-full" value={formData?.radius?.M} placeholder="M Radius" required/>
       <input type="text" id="LgRadius" name="radius[Lg]"  onChange={handleChange} class="form-input mt-1 block w-full" value={formData?.radius?.Lg} placeholder="Lg Radius" required/>
       <input type="text" id="sRadius" name="radius[s]"  onChange={handleChange} class="form-input mt-1 block w-full" value={formData?.radius?.s} placeholder="S Radius" required/>
       <input type="text" id="XlRadius" name="radius[Xl]"  onChange={handleChange} class="form-input mt-1 block w-full" value={formData?.radius?.Xl} placeholder="XL Radius" required/>
   </div>
   <div class="mb-4">
       <label class="block text-gray-700">Spacing</label>
       <input type="text" id="MSpacing" name="spacing[M]"  onChange={handleChange} class="form-input mt-1 block w-full" value={formData?.spacing?.M} placeholder="M Spacing" required/>
       <input type="text" id="LgSpacing" name="spacing[Lg]"  onChange={handleChange} class="form-input mt-1 block w-full" value={formData?.spacing?.Lg} placeholder="Lg Spacing" required/>
       <input type="text" id="sSpacing" name="spacing[s]"  onChange={handleChange} class="form-input mt-1 block w-full" value={formData?.spacing?.s} placeholder="S Spacing" required/>
       <input type="text" id="XlSpacing" name="spacing[Xl]"  onChange={handleChange} class="form-input mt-1 block w-full" value={formData?.spacing?.Xl} placeholder="XL Spacing" required/>
   </div>
   </div>
   <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update!</button>
</form>
</div>
  )
}

export default Edit