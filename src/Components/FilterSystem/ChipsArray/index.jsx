import React, { useState, useEffect, useContext } from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import InputStacks from './InputStacks';
import './chipsArray.scss';
import Exemple from '../../../Assets/Svg/Stacks/Exemple';
import { UserStacksContext } from '../../../Context/UserStacksContext';
import UserStackManager from '../../../Services/RailsApi/ViewerStackManager ';
import { useSelector } from 'react-redux';
const WhiteStyleChip = withStyles({
  root: {
    backgroundColor:'rgb(246, 247, 254)'
  }
})(Chip);

const ChipsArray = () => {
  const {chipData} = useContext(UserStacksContext)
  const {setChipData} = useContext(UserStacksContext)
  const viewerLoggedAs = useSelector(state => state.user.logged_as)
  const {setFilterStacks} = useContext(UserStacksContext);
  const {addUserStackAuthorization} = useContext(UserStacksContext)
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
   
    if (addUserStackAuthorization && viewerLoggedAs !== "visitor")(UserStackManager.deleteUserStack(chipToDelete.label,viewerLoggedAs))

  };
  
useEffect(() => {
  let stackNames = new Set()
  chipData.map((element)=>{
  console.log(element)
  stackNames.add(element.label)
  })
  stackNames= Array.from(stackNames)
  if(setFilterStacks)(setFilterStacks(stackNames))
  if(setFilterStacks && stackNames.length === 0)(setFilterStacks(""))
}, [chipData]);
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
