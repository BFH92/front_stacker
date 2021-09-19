import React, { useEffect, useState } from "react";
import UserInfoManager from "../../Services/RailsApi/UserInfoManager";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import "../Forms/CompanyForm/company_form.scss";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const EditUserPresentation = () => {
  const userId = useSelector((state) => state.user.id);
  console.log(userId);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  const history = useHistory();

  const updateUserDetails = async (e) => {
    //e.preventDefault();
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
    <div>
      <h3>Modifier ma présentation</h3>
      <div className="form__container--company">
        <form>
          <label>
            Prénom
            <input
              type="text"
              value={firstName ? firstName : ""}
              {...register("firstname", { required: true })}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <ErrorMessage
            errors={errors}
            name="firstname"
            render={() => (
              <p>
                <strong>Prénom requis</strong>
              </p>
            )}
          />

          <label>
            Nom
            <input
              type="text"
              value={lastName ? lastName : ""}
              {...register("lastname", { required: true })}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <ErrorMessage
            errors={errors}
            name="lastname"
            render={() => (
              <p>
                <strong>Nom requis</strong>
              </p>
            )}
          />
          <label>
            Description
            <input
              type="text"
              value={description ? description : ""}
              {...register("description", {
                    required: true,
                    minLength: 20 })}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <ErrorMessage
            errors={errors}
            name="description"
            render={() => (
              <p>
                <strong>Description trop courte</strong>
              </p>
            )}
          />
          <label>
            Lien GitHub
            <input
              type="text"
              value={githubLink ? githubLink : ""}
              {...register("githubLink", {
                required: true,
                pattern: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig,
              })}
              onChange={(e) => setGithubLink(e.target.value)}
            />
          </label>
          <ErrorMessage
            errors={errors}
            name="githubLink"
            render={() => (
              <p>
                <strong>Format de lien non valide</strong>
              </p>
            )}
          />
          <button onClick={handleSubmit(updateUserDetails)}>Sauvegarder</button>
        </form>
      </div>
    </div>
  );
};
