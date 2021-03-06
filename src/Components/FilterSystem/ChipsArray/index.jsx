import React, { useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { UserStacksContext } from "../../../Context/UserStacksContext";
import { v4 as uuidv4 } from "uuid";
import "./chipsArray.scss";
import InputStacks from "./InputStacks";
import ViewerStackManager from "../../../Services/RailsApi/ViewerStackManager ";
import Chip from "@material-ui/core/Chip";

const ChipsArray = () => {
  const { chipData } = useContext(UserStacksContext);
  const { setChipData } = useContext(UserStacksContext);
  const viewerLoggedAs = useSelector((state) => state.user.logged_as);
  const { setFilterStacks } = useContext(UserStacksContext);
  const { addUserStackAuthorization } = useContext(UserStacksContext);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );

    if (addUserStackAuthorization && viewerLoggedAs !== "visitor")
      ViewerStackManager.deleteViewerStack(chipToDelete.label, viewerLoggedAs);
  };

  useEffect(() => {
    let stackNames = new Set();
    chipData.map((element) => {
      stackNames.add(element.label);
    });
    stackNames = Array.from(stackNames);
    if (setFilterStacks) setFilterStacks(stackNames);
    if (setFilterStacks && stackNames.length === 0) setFilterStacks("");
  }, [chipData]);

  return (
    <div className="container__filter--group">
      <InputStacks />
      <div className="container__chips--all">
        <ul className="container__chips">
          {chipData.map((data) => {
            return (
              <li key={uuidv4()} className="chip--item">
                <Chip
                  variant="outlined"
                  color="secondary"
                  label={data.label}
                  onDelete={handleDelete(data)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ChipsArray;
