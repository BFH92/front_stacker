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
//  const [value, setValue] = useState('');

  const handleChange = (event) => {
    companies.setStaffSize(event.target.value);
  };

  return (
    <div className="container__filter--group">
      <label htmlFor="" className="title__filter">Effectifs</label>
      <RadioGroup aria-label="gender" name="gender1" value={companies.staffSize} onChange={handleChange}>
        <FormControlLabel value="1-9" control={<WhiteRadio />} label="1-9" />
        <FormControlLabel value="10-49" control={<WhiteRadio />} label="10-49" />
        <FormControlLabel value="49+" control={<WhiteRadio />} label="49+" />
        <FormControlLabel value="" control={<WhiteRadio />} label="Tous" />
      </RadioGroup>
    </div>
  );
};

export default RadioButtonsGroup;
