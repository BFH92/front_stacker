import React from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import { useTheme } from '@material-ui/core';

const ChipsArray = (props) => {
  const theme = useTheme();

  const OutlinedPurpleStyleChip = withStyles({
    root: {
      borderColor: theme.palette.grey[600],
      color: theme.palette.primary.main
    }
  })(Chip);

  return (
      <ul className="container__chips">
        {props.companyStacks && props.companyStacks.map((data) => {
          return (
            <li key={uuidv4()} className="chip--item">
              <OutlinedPurpleStyleChip
                size="small"
                label={data.name}
                variant="outlined"
              />
            </li>
          );
        })}
      </ul>
  );
};

export default ChipsArray;
