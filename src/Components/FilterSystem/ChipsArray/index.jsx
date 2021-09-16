import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import InputStacks from './InputStacks';
import './chipsArray.scss';
import Exemple from '../../../Assets/Svg/Stacks/Exemple';
// import DeleteStack from '../../../Assets/Svg/UI/DeleteStack' Icon personnalisé pour la suppression d'un stack

const WhiteStyleChip = withStyles({
  root: {
    backgroundColor:'rgb(246, 247, 254)'
  }
})(Chip);

const ChipsArray = ({companies}) => {
  const [chipData, setChipData] = useState([
    { key: uuidv4(), label: 'Angular' },
    { key: uuidv4(), label: 'JavaScript' },
    { key: uuidv4(), label: 'Node.js' },
    { key: uuidv4(), label: 'PostgreSQL' },
    { key: uuidv4(), label: 'Docker' },
    { key: uuidv4(), label: 'React.js' },
    { key: uuidv4(), label: 'Vue.js' },
    { key: uuidv4(), label: 'Python' },
  ]);

  let stacksList = []
  
  chipData.map((data)=>
    stacksList.push(data.label)
  ) 
  stacksList = stacksList.join(",")
  
  companies.setStacks(stacksList)

  
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <div className="container__filter--group">
      <InputStacks />
      <ul className="container__chips">
        {chipData.map((data) => {
          return (
            <li key={data.key} className="chip--item">
              <WhiteStyleChip
                size="small"
                label={data.label}
                onDelete={handleDelete(data)}
                icon={<Exemple />}
                // deleteIcon={<DeleteStack />}  Icon personnalisé pour la suppression d'un stack
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChipsArray;
