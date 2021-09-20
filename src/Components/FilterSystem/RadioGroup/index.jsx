import React from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
  };

  return (
    <div className="container__filter--group">
      <Typography variant="body1">
        {companies.filter}
      </Typography>
      <RadioGroup value={companies.state} onChange={handleChange}>
        {companies.value.map((value) =>
          <FormControlLabel value={value.slug} control={<WhiteRadio />} label={value.name} />
        )}
        <FormControlLabel value="" control={<WhiteRadio />} label="Tous"/>
      </RadioGroup>
    </div>
  );
};

export default RadioButtonsGroup;
