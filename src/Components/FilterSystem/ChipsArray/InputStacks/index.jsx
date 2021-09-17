import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { v4 as uuidv4 } from 'uuid';
import Autocomplete from '@mui/material/Autocomplete';
import { stacksList } from '../../../../Config/Top';
import { StacksFetch } from '../../../../Services/RailsApi/StacksFetch';
import { API_URL } from '../../../../Config/API_URL'

const InputStacks = ({value}) => {
  const {data} = StacksFetch(API_URL +'stacks');
  console.log(data)

  const [inputData, setInputData] = useState("")
  const [stacks, setStacks] = useState("");//add new state for the autocomplete 

  let labels = new Set()

  value.data.chipData.map((element)=>
    labels.add(element.label)
  )

  const addInputStacks = (e) => {
    e.preventDefault()
    if (inputData) {
    labels.add(inputData)
    labels = Array.from(labels)
    let StackList =[] 
    labels.map((label)=>
    StackList.push({ key: uuidv4(), label: label})
    )
    value.data.setChipData(StackList)
    setInputData("")
    }
  }



  
  return (
    <form noValidate onSubmit={addInputStacks} >
    <Autocomplete 
    //The component has two states that can be controlled:
    //the "value" state with the value/onChange props combination. This state represents the value selected by the user, for instance when pressing Enter.
    //the "input value" state with the inputValue/onInputChange props combination. This state represents the value displayed in the textbox.

        value={stacks}
        onChange={(event, newValue) => {
          setInputData(newValue);
          console.log(newValue)
        }}

        inputValue={stacks}
        onInputChange={(event, newInputValue) => {
          setStacks(newInputValue);  
          console.log(newInputValue)
        }}
        
        id="controllable-states-demo"
        options={stacksList}
        sx={{ width: 250}}
        renderInput={(params) => <TextField {...params} label="Liste des Stack" />}
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
    </form  >
  );
};

export default InputStacks;