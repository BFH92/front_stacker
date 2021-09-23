import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
//Styles
import "./edit_user_form.scss";
//Components
import ChipsArray from "../../FilterSystem/ChipsArray";
//Services
import UserInfoManager from "../../../Services/RailsApi/UsersFetch/UserInfoManager";
import { UserStacksContext } from "../../../Context/UserStacksContext";
//MaterialUI
import { useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import UIButton from "../../UIButton";
import { Card, CardContent, Typography } from "@material-ui/core";

export const EditUserForm = () => {
  const userId = useSelector((state) => state.user.id);
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      firstname: firstName,
      lastname: lastName,
      description: description,
      githubLink: githubLink,
    },
  });

  const getUserDetail = async () => {
    const detail = await UserInfoManager.getDetails(userId);
    console.log(detail);
    setFirstName(detail.data.first_name);
    setLastName(detail.data.last_name);
    setDescription(detail.data.description);
    setGithubLink(detail.data.github_link);
    getUserStacks(detail.data.user_stacks);
  };

  const getUserStacks = (list) => {
    let stacksList = new Set();
    list.map((userStack) => {
      stacksList.add(userStack.name);
    });
    stacksList = Array.from(stacksList);
    addExistingStacks(stacksList);
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  const [chipData, setChipData] = useState([]);

  const addExistingStacks = (list) => {
    let StackList = [];
    list.map((stack) => {
      StackList.push({ key: uuidv4(), label: stack });
    });
    setChipData(StackList);
  };

  const history = useHistory();
  const addUserStackAuthorization = true;

  const updateUserDetails = async (e) => {
    const response = await UserInfoManager.updateDetails(
      userId,
      firstName,
      lastName,
      description,
      githubLink
    );
    Promise.resolve(response);
    history.push(`/user/dashboard`);
  };

  return (
    <UserStacksContext.Provider
      value={{ chipData, setChipData, addUserStackAuthorization }}
    >
      <Typography variant="h5" color="primary">Modifier son profil</Typography>
      <Card>
        <CardContent>
          <form
            onSubmit={handleSubmit(updateUserDetails)}
            onClick={() => {
              setValue("firstname", firstName);
              setValue("lastname", lastName);
              setValue("description", description);
              setValue("githubLink", githubLink);
            }}
          >
            <div className="edit-container--form">
              <TextField
                theme={theme}
                sx={{ mt: 3 }}
                color="primary"
                label="Prénom"
                variant="outlined"
                {...register("firstname", {
                  required: "Renseigner votre prénom",
                })}
                size="small"
                value={firstName ? firstName : ""}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstname && <p>{errors.firstname.message}</p>}
              <TextField
                theme={theme}
                sx={{ mt: 3 }}
                color="primary"
                label="Nom"
                variant="outlined"
                {...register("lastname", { required: "Renseigner votre Nom" })}
                size="small"
                value={lastName ? lastName : ""}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastname && <p>{errors.lastname.message}</p>}
              <TextField
                theme={theme}
                sx={{ mt: 3 }}
                color="primary"
                label="Description"
                variant="outlined"
                multiline
                maxRows={5}
                {...register("description", {
                  required: "Description requise",
                  minLength: { value: 30, message: "Description trop courte" },
                  maxLength: { value: 120, message: "Description trop longue" },
                })}
                size="small"
                value={description ? description : ""}
                onChange={(e) => setDescription(e.target.value)}
              />
              {errors.description && <p>{errors.description.message}</p>}
              <TextField
                theme={theme}
                sx={{ mt: 3, mb: 4 }}
                color="primary"
                label="Lien Github"
                variant="outlined"
                {...register("githubLink", {
                  required: "Lien Github requis",
                })}
                size="small"
                value={githubLink ? githubLink : ""}
                onChange={(e) => setGithubLink(e.target.value)}
              />
              {errors.githubLink && <p>{errors.githubLink.message}</p>}
              <div className="container__cta">
                <UIButton
                  color="primary"
                  size="small"
                  variant="contained"
                  content="Sauvegarder"
                  type="submit"
                />
              </div>
            </div>
          </form>
          <div className="container--chips">
            <ChipsArray />
          </div>
        </CardContent>
      </Card>
    </UserStacksContext.Provider>
  );
};
