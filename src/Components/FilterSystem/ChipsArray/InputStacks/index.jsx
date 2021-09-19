import React, { useEffect, useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { v4 as uuidv4 } from "uuid";
import Autocomplete from "@mui/material/Autocomplete";
import { STACKLIST } from "../../../../Config/Stack_list";
import UserStackManager from "../../../../Services/RailsApi/ViewerStackManager ";
import { UserStacksContext } from "../../../../Context/UserStacksContext";
import { useSelector } from "react-redux";


const InputStacks = () => {
const {setFilterStacks} = useContext(UserStacksContext);
const {chipData} = useContext(UserStacksContext)
const {setChipData} = useContext(UserStacksContext)
const  viewerLoggedAs = useSelector(state => state.user.logged_as)



  const [inputData, setInputData] = useState("");
  const [stacks, setStacks] = useState(""); //add new state for the autocomplete

  let stackNames = new Set()

  chipData.map((element)=>
    stackNames.add(element.label)
  )


  const addInputStacks = (e) => {
    e.preventDefault();
    if (inputData) {
      stackNames.add(inputData)
      stackNames = Array.from(stackNames)
      let StackList =[] 
      stackNames.map((stackName)=>{
      StackList.push({ key: uuidv4(), label: stackName})
      if (viewerLoggedAs !== "visitor")(UserStackManager.addUserStack(stackName,viewerLoggedAs))
      if(setFilterStacks)(setFilterStacks(stackNames))
      })
      setChipData(StackList)
      setInputData("")
    }
  } 
  useEffect(() => {
  }, [inputData]);

  return (
    <form noValidate onSubmit={addInputStacks}>
      <Autocomplete
        value={stacks}
        onChange={(event, newValue) => {
          setInputData(newValue);
        }}
        inputValue={stacks}
        onInputChange={(event, newInputValue) => {
          setStacks(newInputValue);
        }}
        id="controllable-states-demo"
        options={STACKLIST}
        sx={{ width: 250 }}
        renderInput={(params) => (
          <TextField {...params} label="Liste des Stack" />
        )}
      />
    </form>
  );
};

export default InputStacks;
