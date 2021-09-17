import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { v4 as uuidv4 } from "uuid";
import Autocomplete from "@mui/material/Autocomplete";
import { stacksList } from "../../../../Config/Top";
import { StacksFetch } from "../../../../Services/RailsApi/StacksFetch";
import { API_URL } from "../../../../Config/API_URL";

// const CustomNegativeInput = withStyles({
//   root: {
//     "& .MuiInputBase-root": {
//       color: "rgb(255, 255, 255)",
//     },
//     "& label.Mui-focused": {
//       color: "rgb(255, 255, 255)",
//     },
//     "& .MuiInput-underline:after": {
//       borderBottomColor: "rgb(255, 255, 255)",
//     },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         border: "2px solid rgb(255, 255, 255)",
//       },
//       "&:hover fieldset": {
//         borderColor: "rgb(255, 255, 255)",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "rgb(255, 255, 255)",
//       },
//     },
//   },
// })(TextField);

const InputStacks = ({ value }) => {
  const { data } = StacksFetch(API_URL + "stacks");
  console.log(data);

  const [inputData, setInputData] = useState("");
  const [stacks, setStacks] = useState(""); //add new state for the autocomplete

  let labels = new Set();
  value.chipData.map((element) => labels.add(element.label));

  const addInputStacks = (e) => {
    e.preventDefault();
    if (inputData) {
      labels.add(inputData);
      labels = Array.from(labels);
      let StackList = [];
      labels.map((label) => StackList.push({ key: uuidv4(), label: label }));

      value.setChipData(StackList);
      setInputData("");
    }
  };

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
