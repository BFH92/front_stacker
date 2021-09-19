import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import './chipsArray.scss';
import Exemple from '../../../../Assets/Svg/Stacks/Exemple';

const OutlinedPurpleStyleChip = withStyles({
  root: {
  }
})(Chip);

const ChipsArray = () => {
  const [chipData, setChipData] = useState([
    { key: uuidv4(), label: 'Angular' },
    { key: uuidv4(), label: 'Javascript' },
    { key: uuidv4(), label: 'Node.js' },
    { key: uuidv4(), label: 'React.js' },
  ]);

  return (
    <div className="container__filter--group">
      <div className="tags__title">Stacks:</div>
      <ul className="container__chips">
        {chipData.map((data) => {
          return (
            <li key={data.key} className="chip--item">
              <OutlinedPurpleStyleChip
                size="small"
                label={data.label}
                icon={<Exemple />}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChipsArray;
