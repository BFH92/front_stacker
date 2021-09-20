import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const WhiteRadio = withStyles({
  root: {
    color: 'rgb(255, 255, 255)',
    '&$checked': {
      color: 'rgb(255, 255, 255)',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const RadioButtonsGroup = ({companies}) => {

  const handleChange = (event) => {
    companies.setState(event.target.value);
  };

  return (
    <div className="container__filter--group">
      <label htmlFor="" className="title__filter">{companies.filter}</label>
      
      <RadioGroup aria-label="gender" name="gender1" value={companies.state} onChange={handleChange}>
        {companies.value.map((value) =>
        <FormControlLabel value={value.slug} control={<WhiteRadio />} label={value.name}/>
        )}
        <FormControlLabel value="" control={<WhiteRadio />} label="tous"/>
      </RadioGroup>
    </div>
  );
};

export default RadioButtonsGroup;
