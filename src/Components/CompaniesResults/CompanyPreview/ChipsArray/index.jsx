import React from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
// import Exemple from '../../../../Assets/Svg/Stacks/Exemple';

const OutlinedPurpleStyleChip = withStyles({
  root: {
  }
})(Chip);

const ChipsArray = (props) => {

  return (
    <div className="container__filter--group">
      <ul className="container__chips">
        {props.companyStacks && props.companyStacks.map((data) => {
          return (
            <li key={uuidv4()} className="chip--item">
              <OutlinedPurpleStyleChip
                size="small"
                label={data.name}
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
