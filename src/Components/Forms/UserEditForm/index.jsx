import React, { useState } from "react";
//Api
//import CompaniesAPIManager from '../../../Services/RailsApi/CompaniesFetch';

//styles


export const UserForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");

  return (
    <div className="form__container--company">
      <form>
      <label>
          Nom:
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Prénom:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="long-text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Lien GitHub:
          <input
            type="text"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
          />
        </label>
        <button onClick={""}>Completer mon profil</button>
      </form>
    </div>
  );
};
