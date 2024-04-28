import React, { useState } from "react";

const Field = ({project}) => {

   
    const [selectedOption, setSelectedOption] = useState('');
    const [generatedElements, setGeneratedElements] = useState([]);
    const [selectedElement,setSelectedElement] = useState(0);
    const [selectedStyle, setSelectedStyle] = useState('');
    const [colors,setColors] = useState('color:red');
    const [radius,setRadius] = useState('border:2px');
    const [spacing,setSpacing] = useState('padding:2px');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
    const handleAddElement = () => {
        let element;
        let className;
        switch (selectedOption) {
          case 'button':
            className = "";
            element = <button>Button</button>;
            break;
          case 'text':
            className = "";
            element = <input type="text" />;
            break;
          case 'radio':
            className = "";
            element = (
    
              <div>
                <input type="radio" name="radio-option" value="option1" /> Option 1
                <input type="radio" name="radio-option" value="option2" /> Option 2
              </div>
            );
            break;
          case 'checkbox':
            className = "";
            element = (<div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> I have a bike</label><br/>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
            <label for="vehicle2"> I have a car</label><br/>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
            <label for="vehicle3"> I have a boat</label><br/></div>);
            break;
          case 'select':
            className = "";
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
            setGeneratedElements(prevElements => [...prevElements, {element,className}]);
          }


      };

      const handleCssChange = (e) =>{
        const { name, value } = e.target;
       
        
       let css;

        switch (name) {
          case "colors":
            setColors(`color:'${value}'`)
             css = `color:'${value}'; ${radius}; ${spacing};`;
            
            break;
            case "radius":
              setRadius(`border:'${value}'`)
               css = `${colors}; border:'${value}; ${spacing};`;
              
            break;
            case "spacing":
              setSpacing(`padding:'${value}'`)
              css = `${colors}; ${radius}; padding:'${value}`;
                
            break;
        
          default:
            break;
        }
        // If it's a nested field (like colors, radius, or spacing)

   
   const classes = css.toString();

   console.log(classes)

   console.log(selectedElement);

   setGeneratedElements(prevElements => {
    const newElements = prevElements.map((elem, index) =>
      index === selectedElement ? { ...elem, className: classes } : elem
    );
  
    console.log('Updating elements:', newElements);
    return newElements;
  });

    console.log(generatedElements)
     
      }

      const handleElementChange = (e) =>{
        setSelectedElement(e.target.id);
        
      }
      
     
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
                    <select name="colors" onChange={(e)=>handleCssChange(e)}>
                    <option type="text" id="primaryColor"  name="colors[primary]" placeholder="primary" value={project?.colors?.primary} class="form-input w-[80%] mt-1 block " >{project?.colors?.primary}</option>
                    <option type="text" id="secondaryColor"   name="colors[secondary]" placeholder="secondary " value={project?.colors?.secondary} class="form-input w-[80%] mt-1 block " >{project?.colors?.secondary}</option>
                    <option type="text" id="tertiaryColor"   name="colors[tertiary]" placeholder="tertiary" value={project?.colors?.tertiary} class="form-input w-[80%] mt-1 block " >{project?.colors?.tertiary}</option>
                    <option type="text" id="quardinaryColor"   name="colors[quardinary]" placeholder="quardinary" value={project?.colors?.quardinary} class="form-input w-[80%] mt-1 block " >{project?.colors?.quardinary}</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label class="block text-gray-700">Radius</label>
                    <select name="radius"  onChange={(e)=>handleCssChange(e)}>
                    <option type="text" id="MRadius" name="radius[M]"  class="form-input mt-1 w-[80%] block " value={project?.radius?.M} placeholder="M Radius" > {project?.radius?.M}</option>
                    <option type="text" id="LgRadius" name="radius[Lg]"   class="form-input mt-1 w-[80%] block " value={project?.radius?.Lg} placeholder="Lg Radius" >{project?.radius?.Lg}</option>
                    <option type="text" id="sRadius" name="radius[s]"   class="form-input mt-1 block  w-[80%] " value={project?.radius?.s} placeholder="S Radius" >{project?.radius?.s}</option>
                    <option type="text" id="XlRadius" name="radius[Xl]"   class="form-input mt-1 block  w-[80%]" value={project?.radius?.Xl} placeholder="XL Radius" >{project?.radius?.Xl}</option>
                    </select>
                </div>
                <div class="mb-2">
                <label class="block text-gray-700">Spacing</label>
                <select name="spacing"  onChange={(e)=>handleCssChange(e)}>
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
                <option value="select a vlaue">Select</option>
                <option value="button">BUTTON</option>
                <option value="text">TEXT</option>
                <option value="radio">RADIO</option>
                <option value="checkbox">CHECKBOX</option>
                <option value="select">SELECT</option>
            </select>
            <button onClick={handleAddElement}>Add</button>
        </div>
        <div>
        {generatedElements.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input onChange={handleElementChange} type="radio" id={index} name="selectedOption" value={index} />
           <div  > {item.element}</div>
          </div>
        ))}
      </div>
      </div>
      
    </div>: <div>Please Select a Project!</div>}
   </>
  );
};

export default Field;
