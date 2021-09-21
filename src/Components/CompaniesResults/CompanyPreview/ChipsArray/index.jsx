import React from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import { useTheme } from '@material-ui/core';
// import Exemple from '../../../../Assets/Svg/Stacks/Exemple';

const ChipsArray = (props) => {
  const theme = useTheme();

  const OutlinedPurpleStyleChip = withStyles({
    root: {
      borderColor: theme.palette.grey[600],
      color: theme.palette.primary.main
    }
  })(Chip);

  return (
    <div className="container__filter--group">
      <ul className="container__chips">
        {props.companyStacks && props.companyStacks.map((data) => {
          return (
            <li key={uuidv4()} className="chip--item">
              <OutlinedPurpleStyleChip
                size="small"
                label={data.name}
                variant="outlined"
                // icon={<Exemple />}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChipsArray;
