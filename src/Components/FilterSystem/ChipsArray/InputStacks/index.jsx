import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { v4 as uuidv4 } from 'uuid';

const CustomNegativeInput = withStyles({
  root: {
    '& .MuiInputBase-root': {
      color: 'rgb(255, 255, 255)',
    },
    '& label.Mui-focused': {
      color: 'rgb(255, 255, 255)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgb(255, 255, 255)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '2px solid rgb(255, 255, 255)',
      },
      '&:hover fieldset': {
        borderColor: 'rgb(255, 255, 255)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgb(255, 255, 255)',
      },
    },
  },
})(TextField);

const InputStacks = ({value}) => {
  
  const[inputData, setInputData]=useState("")

  const handleInputStacks = (e) => {
    setInputData(e.target.value);
  }
  
  let labels = new Set()

  value.data.chipData.map((element)=>
    labels.add(element.label)
  )

  const addInputStacks = (e) => {
    e.preventDefault()
    labels.add(inputData)
    labels = Array.from(labels)
    let StackList =[] 
    labels.map((label)=>
    StackList.push({ key: uuidv4(), label: label})
    )
    value.data.setChipData(StackList)
    setInputData("")
  }

  return (
    <form noValidate onSubmit={addInputStacks}> 
      <CustomNegativeInput
        label="Recherche par stacks"
        variant="outlined"
        id="custom-css-outlined-input"
        InputLabelProps={{
          style: { color: '#fff' }, 
       }}
       value={inputData}
       onChange={handleInputStacks}
       autoComplete="off"
      /> 
    </form  >
  );
};

export default InputStacks;