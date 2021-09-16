import React, { useEffect } from 'react';
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

  
  
  const handleInputStacks = (e) => {
    e.preventDefault()
    console.log(value.chipData)
    let input = value.chipData
    input.push({ key: uuidv4(), label: 'Java' })
    value.setChipData(input)
    console.log(input)
  }
  
  useEffect(() => {
  
  }, []);
  
  return (
    <form noValidate onSubmit={handleInputStacks}>
      <CustomNegativeInput
        label="Recherche par stacks"
        variant="outlined"
        id="custom-css-outlined-input"
        InputLabelProps={{
          style: { color: '#fff' }, 
       }}
       autoComplete="off"
      />
    </form  >
  );
};

export default InputStacks;