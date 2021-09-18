import React, { useEffect, useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { v4 as uuidv4 } from "uuid";
import Autocomplete from "@mui/material/Autocomplete";
import { stacksList } from "../../../../Config/Top";
import { StacksFetch } from "../../../../Services/RailsApi/StacksFetch";
import { API_URL } from "../../../../Config/API_URL";
import UserStackManager from "../../../../Services/RailsApi/UserStackManager ";
import { UserStacksContext } from "../../../../Context/UserStacksContext";
import { FilterContext } from "../../../../Context/FilterContext";
const InputStacks = ({value}) => {
  const {data} = StacksFetch(API_URL +'stacks');
const {filterStacks}= useContext(FilterContext);
const {setFilterStacks}= useContext(FilterContext);
const {chipData} = useContext(UserStacksContext)
const {setChipData} = useContext(UserStacksContext)
const {addUserStackAuthorization} = useContext(UserStacksContext)
  const [inputData, setInputData] = useState("");
  const [stacks, setStacks] = useState(""); //add new state for the autocomplete

  let labels = new Set()

  chipData.map((element)=>
    labels.add(element.label)
  )

  const addInputStacks = (e) => {
    e.preventDefault();
    if (inputData) {
    labels.add(inputData)
    labels = Array.from(labels)
    let StackList =[] 
    labels.map((label)=>{
    StackList.push({ key: uuidv4(), label: label})
    console.log("LABEL")
    console.log(label)
    if(addUserStackAuthorization)(UserStackManager.addUserStack(label))
    })
    setFilterStacks(labels)
    setChipData(StackList)
    setInputData("")
  
  };
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
        options={stacksList}
        sx={{ width: 250 }}
        renderInput={(params) => (
          <TextField {...params} label="Liste des Stack" />
        )}
      />
      {/* <CustomNegativeInput
        label="Recherche par stacks"
        variant="outlined"
        id="custom-css-outlined-input"
        InputLabelProps={{
          style: { color: '#fff' }, 
        }}
        value={inputData}
        autoComplete="off"
        onChange={handleInputStacks}
      />  */}
    </form>
  );
};

export default InputStacks;
