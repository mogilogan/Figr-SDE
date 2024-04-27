import React, { useState } from "react";

const Field = ({project}) => {

   
    const [selectedOption, setSelectedOption] = useState('');
    const [generatedElements, setGeneratedElements] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
    const handleAddElement = () => {
        let element;
        switch (selectedOption) {
          case 'button':
            element = <button>Button</button>;
            break;
          case 'text':
            element = <input type="text" />;
            break;
          case 'radio':
            element = (
              <div>
                <input type="radio" name="radio-option" value="option1" /> Option 1
                <input type="radio" name="radio-option" value="option2" /> Option 2
              </div>
            );
            break;
          case 'checkbox':
            element = <input type="checkbox" />;
            break;
          case 'select':
            element = (
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            );
            break;
          default:
            element = null;
        }
    
        if (element) {
            setGeneratedElements(prevElements => [...prevElements, element]);
          }
      };
  return (
    <>
    {project?.name ?
    <div className="flex flex-row ">
        <div className=" bg-[#7a9144] h-screen pl-6 sm:min-w-[250px] sm:max-w-[250px] min-w-[180px] max-w-[180px] sm:overflow-hidden overflow-y-auto">

            
            <>
            <div class="mb-4">
                <label for="name" class="block text-gray-700">Project Name</label>
                <input type="text" id="name" name="name" class="form-input mt-1 w-[80%] block bg-white" value={project?.name} placeholder="Enter your name" disabled/>
            </div>
            <div className="flex flex-col gap-10">
                <div class="mb-2">
                    <label class="block text-gray-700">Colors</label>
                    <select>
                    <option type="text" id="primaryColor"  name="colors[primary]" placeholder="primary" value={project?.colors?.primary} class="form-input w-[80%] mt-1 block " >{project?.colors?.primary}</option>
                    <option type="text" id="secondaryColor"   name="colors[secondary]" placeholder="secondary " value={project?.colors?.secondary} class="form-input w-[80%] mt-1 block " >{project?.colors?.secondary}</option>
                    <option type="text" id="tertiaryColor"   name="colors[tertiary]" placeholder="tertiary" value={project?.colors?.tertiary} class="form-input w-[80%] mt-1 block " >{project?.colors?.tertiary}</option>
                    <option type="text" id="quardinaryColor"   name="colors[quardinary]" placeholder="quardinary" value={project?.colors?.quardinary} class="form-input w-[80%] mt-1 block " >{project?.colors?.quardinary}</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label class="block text-gray-700">Radius</label>
                    <select>
                    <option type="text" id="MRadius" name="radius[M]"  class="form-input mt-1 w-[80%] block " value={project?.radius?.M} placeholder="M Radius" > {project?.radius?.M}</option>
                    <option type="text" id="LgRadius" name="radius[Lg]"   class="form-input mt-1 w-[80%] block " value={project?.radius?.Lg} placeholder="Lg Radius" >{project?.radius?.Lg}</option>
                    <option type="text" id="sRadius" name="radius[s]"   class="form-input mt-1 block  w-[80%] " value={project?.radius?.s} placeholder="S Radius" >{project?.radius?.s}</option>
                    <option type="text" id="XlRadius" name="radius[Xl]"   class="form-input mt-1 block  w-[80%]" value={project?.radius?.Xl} placeholder="XL Radius" >{project?.radius?.Xl}</option>
                    </select>
                </div>
                <div class="mb-2">
                <label class="block text-gray-700">Spacing</label>
                <select>
                    
                    <option type="text" id="MSpacing" name="spacing[M]"   class="form-input mt-1 block w-[80%] " value={project?.spacing?.M} placeholder="M Spacing" >{project?.spacing?.M}</option>
                    <option type="text" id="LgSpacing" name="spacing[Lg]"  class="form-input mt-1 block  w-[80%]" value={project?.spacing?.Lg} placeholder="Lg Spacing" >{project?.spacing?.Lg} </option>
                    <option type="text" id="sSpacing" name="spacing[s]"  class="form-input mt-1 block  w-[80%]" value={project?.spacing?.s} placeholder="S Spacing" >{project?.spacing?.s}</option>
                    <option type="text" id="XlSpacing" name="spacing[Xl]"   class="form-input mt-1 block  w-[80%]" value={project?.spacing?.Xl} placeholder="XL Spacing" >{project?.spacing?.Xl}</option>
                    </select>
                </div>
            </div></> 
        </div>



      <div className="bg-[#dddada]  overflow-y-auto w-full">
        <div className=" justify-center mt-2 flex">
        <select value={selectedOption} onChange={handleSelectChange}>
                <option value="button">BUTTON</option>
                <option value="text">TEXT</option>
                <option value="radio">RADIO</option>
                <option value="checkbox">CHECKBOX</option>
                <option value="select">SELECT</option>
            </select>
            <button onClick={handleAddElement}>Add</button>
        </div>
        <div>
        {generatedElements.map((element, index) => (
          <div key={index}>
            <input type="radio" name="selectedOption" value={index} />
            {element}
          </div>
        ))}
      </div>
      </div>
      
    </div>: <div>Please Select a Project!</div>}
   </>
  );
};

export default Field;
