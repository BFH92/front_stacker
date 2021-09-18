import React, { useState, useEffect, useContext } from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import InputStacks from './InputStacks';
import './chipsArray.scss';
import Exemple from '../../../Assets/Svg/Stacks/Exemple';
// import DeleteStack from '../../../Assets/Svg/UI/DeleteStack' Icon personnalisé pour la suppression d'un stack
import { UserStacksContext } from '../../../Context/UserStacksContext';
import UserStackManager from '../../../Services/RailsApi/UserStackManager ';
import { FilterContext } from '../../../Context/FilterContext';
const WhiteStyleChip = withStyles({
  root: {
    backgroundColor:'rgb(246, 247, 254)'
  }
})(Chip);

const ChipsArray = ({value}) => {
  const {chipData} = useContext(UserStacksContext)
  const {setChipData} = useContext(UserStacksContext)
  const {addUserStackAuthorization} = useContext(UserStacksContext)
  

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    console.log(chipToDelete.label)
    if (addUserStackAuthorization)(UserStackManager.deleteUserStack(chipToDelete.label))
  };
  
  return (
    <div className="container__filter--group">
      <InputStacks/>
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
