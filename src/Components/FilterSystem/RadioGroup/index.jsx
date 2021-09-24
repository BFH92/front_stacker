import React from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { v4 as uuidv4 } from 'uuid';
import CompanyPreview from '../../CompaniesResults/CompanyPreview';

const WhiteRadio = withStyles({
  root: {
    color: 'rgb(255, 255, 255)',
    '&$checked': {
      color: 'rgb(255, 255, 255)',
    },
  },
  checked: {},
})((props) => <Radio color="default" size="small" {...props} />);

const RadioButtonsGroup = ({companies}) => {

  const handleChange = (event) => {
    companies.setState(event.target.value);
    companies.value.map((value)=> {
      if(value.slug === event.target.value && companies.setName)(companies.setName(value.name))
    })
    
  };

  return (
    <div className="container__filter--group">
      <Typography variant="body1">
        {companies.filter}
      </Typography>
      <RadioGroup value={companies.state} onChange={handleChange}>
        {companies.value.map((value) =>
          <FormControlLabel
            value={value.slug}
            control={<WhiteRadio />}
            label={value.name}
            key={uuidv4()}
          />
        )}
        <FormControlLabel value="" control={<WhiteRadio />} label="Tous"/>
      </RadioGroup>
    </div>
  );
};

export default RadioButtonsGroup;
