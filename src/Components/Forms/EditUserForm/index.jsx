import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
//Styles
import "./edit_user_form.scss";
//Components
import ChipsArray from "../../FilterSystem/ChipsArray";
import CustomTypography from "../../CustomTypography";
//Services
import UserInfoManager from "../../../Services/RailsApi/UsersFetch/UserInfoManager";
import { UserStacksContext } from "../../../Context/UserStacksContext";
//MaterialUI
import { useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import UIButton from "../../UIButton";
import { Card, CardContent, Divider } from "@material-ui/core";
import { useSnackbar } from "notistack";

export const EditUserForm = () => {
  const userId = useSelector((state) => state.user.id);
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [chipData, setChipData] = useState([]);

  const history = useHistory();
  const theme = useTheme();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

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

  const addExistingStacks = (list) => {
    let StackList = [];
    list.map((stack) => {
      StackList.push({ key: uuidv4(), label: stack });
    });
    setChipData(StackList);
  };

  const addUserStackAuthorization = true;
  
  const updateUserDetails = async () => {
    let variant = "success";
    let message = `Vos données ont été mises a jour !`;
    const response = await UserInfoManager.updateDetails(
      userId,
      firstName,
      lastName,
      description,
      githubLink
    );
    enqueueSnackbar(message, { variant });
    Promise.resolve(response);
    history.push(`/user/dashboard`);
  };

  return (
    <UserStacksContext.Provider
      value={{ 
        chipData,
        setChipData,
        addUserStackAuthorization
      }}
    >
      <Card variant="outlined">
        <CustomTypography
          variant="h5"
          content="Mes informations"
          sx={{ p: 2.5 }}
        />
        <Divider />
        <CardContent className="dashboard--informations">
          <form
            className="edit--container--form"
            onSubmit={handleSubmit(updateUserDetails)}
            onClick={() => {
              setValue("firstname", firstName);
              setValue("lastname", lastName);
              setValue("description", description);
              setValue("githubLink", githubLink);
            }}
          >
            <div className="item--input">
              <TextField
                focused
                color="primary"
                label="Prénom"
                variant="outlined"
                {...register("firstname", {
                  required: "Renseigner votre prénom",
                })}
                value={firstName && firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstname &&
                <>
                  <CustomTypography
                    content={errors.firstname.message}
                    variant="body2"
                    color="error"
                  />
                </>
              }
            </div>
            <div className="item--input">
              <TextField
                focused
                color="primary"
                label="Nom"
                variant="outlined"
                {...register("lastname", { required: "Renseigner votre Nom" })}
                value={lastName && lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastname &&
                <>
                  <CustomTypography
                    content={errors.lastname.message}
                    variant="body2"
                    color="error"
                  />
                </>
              }
            </div>
            <div className="item--input">
              <TextField
                focused
                color="primary"
                label="Lien Github"
                helperText="exemple: https://github.com/username"
                variant="outlined"
                {...register("githubLink", {
                  required: "Lien Github requis",
                  pattern: {value: 
                    /([A-Za-z0-9]+@|http(|s)\:\/\/)([A-Za-z0-9.]+)(:|\/)([A-Za-z0-9\\]+)/g , message: "format non valide"}
                })}
                value={githubLink && githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
              />
              {errors.githubLink &&
                <>
                  <CustomTypography
                    content={errors.githubLink.message}
                    variant="body2"
                    color="error"
                  />
                </>
              }
            </div>
            <div className="item--input">
              <TextField
                focused
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
                value={description && description }
                onChange={(e) => setDescription(e.target.value)}
              />
              {errors.description &&
                <>
                  <CustomTypography
                    content={errors.description.message}
                    variant="body2"
                    color="error"
                  />
                </>
              }
            </div>
            <div className="container__cta">
              <UIButton
                color="primary"
                size="small"
                variant="contained"
                content="Sauvegarder"
                type="submit"
              />
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
