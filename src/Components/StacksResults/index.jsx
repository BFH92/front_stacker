import React,{useState, useEffect} from 'react';
import StacksManager from '../../Services/RailsApi/StacksFetch';
// import StackPreview from './StackPreview';
import { TablePreview } from './Tablepreview';
import { Accordions } from '../../Components/StacksResults/Accordion'
const StackResults = () => {
  const [stacks, setStacks] = useState([])
  const [backendStacks, setBackendStacks]= useState([])
  const [frontendStacks, setFrontendStacks]= useState([])
  const [devopsStacks, setDevopsStacks]= useState([])
  const [dataStacks, setDataStacks]= useState([])
  const [mobileStacks, setMobileStacks]= useState([])
  const [projectStacks, setProjectStacks]= useState([])
  const [ideStacks, setIdeStacks]= useState([])
  const [noCodeStacks, setNoCodeStacks]= useState([])

  const getAllStacks = async() =>{
    const response = await StacksManager.getAllStacks()
    console.log(response)
    setStacks(response.data)
  
  }



  useEffect(() => {
    getAllStacks()
  }, []);
  useEffect(() => {
    setBackendStacks(stacks.filter((stack) => stack.stack_category_id === 1))
    setFrontendStacks(stacks.filter((stack) => stack.stack_category_id === 2))
    setDevopsStacks(stacks.filter((stack) => stack.stack_category_id === 3))
    setDataStacks(stacks.filter((stack) => stack.stack_category_id === 4))
    setMobileStacks(stacks.filter((stack) => stack.stack_category_id === 5))
    setProjectStacks(stacks.filter((stack) => stack.stack_category_id === 6))
    setIdeStacks(stacks.filter((stack) => stack.stack_category_id === 7))
    setNoCodeStacks(stacks.filter((stack) => stack.stack_category_id === 8))
  }, [stacks]);
  return (

        <div className="results--all">
          {/* <TablePreview stacks={stacks}/> */}
          <Accordions stacks={stacks}/>
        <div className="all--items">
          {/* <ul>
            <div>
            <h2>Backend Frameworks & Languages</h2>
            {backendStacks && backendStacks.map((stack) => (
              <li key={stack.id}>
              <StackPreview stacks={stack}/>

            </li>
            ))}
            </div>
            <div>
            <h2> FrontEnd Frameworks & Languages</h2>
            {frontendStacks && frontendStacks.map((stack) => (
              <li key={stack.id}>
              <StackPreview stack={stack}/>
            </li>
            ))}
            </div>
            <div>
            <h2> DevOps</h2>
            {devopsStacks && devopsStacks.map((stack) => (
              <li key={stack.id}>
              <StackPreview stack={stack}/>
            </li>
            ))}
            </div>
            <div>
            <h2>Data</h2>
            {dataStacks && dataStacks.map((stack) => (
              <li key={stack.id}>
              <StackPreview stack={stack}/>
            </li>
            ))}
            </div>
            <div>
            <h2>Mobile</h2>
            {mobileStacks && mobileStacks.map((stack) => (
              <li key={stack.id}>
              <StackPreview stack={stack}/>
            </li>
            ))}
            </div>
            <div>
            <h2>Project Management</h2>
            {projectStacks && projectStacks.map((stack) => (
              <li key={stack.id}>
              <StackPreview stack={stack}/>
            </li>
            ))}
            </div>
            <div>
            <h2>IDE</h2>
            {ideStacks && ideStacks.map((stack) => (
              <li key={stack.id}>
              <StackPreview stack={stack}/>
            </li>
            ))}
            </div>
            <div>
            <h2>NoCode</h2>
            {noCodeStacks && noCodeStacks.map((stack) => (
              <li key={stack.id}>
              <StackPreview stack={stack}/>
            </li>
            ))}
            </div>
          </ul> */}
        </div>
      </div>

  );
}

export default StackResults;
