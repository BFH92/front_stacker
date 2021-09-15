import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import { v4 as uuidv4 } from 'uuid';
import InputStacks from './InputStacks';

const ChipsArray = () => {
  const [chipData, setChipData] = useState([
    { key: uuidv4(), label: 'Angular' },
    { key: uuidv4(), label: 'jQuery' },
    { key: uuidv4(), label: 'Polymer' },
    { key: uuidv4(), label: 'React' },
    { key: uuidv4(), label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <div className="container__filter--group">
      <InputStacks />
      <ul>
        {chipData.map((data) => {
          return (
            <li key={data.key}>
              <Chip
                label={data.label}
                onDelete={handleDelete(data)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChipsArray;
