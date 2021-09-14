import React, { useState } from "react";
//Api
//import CompaniesAPIManager from '../../../Services/RailsApi/CompaniesFetch';

//styles
import './company_form.scss'

export const CompanyForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stack, setStack] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [staffSize, setStaffSize] = useState("");
  const [isItRecruiting, setIsItRecruiting] = useState(false);

  return (
    <div className="form__container--company">
      <form>
        <label>
          Nom d'entreprise:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Vos Stack:
          <input
            type=""
            value={stack}
            onChange={(e) => setStack(e.target.value)}
          />
        </label>
        <label>
          Lien de site:
          <input
            type="text"
            value={websiteLink}
            onChange={(e) => setWebsiteLink(e.target.value)}
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
        <label>
          Taille de l'entreprise:
          <input
            type="text"
            value={staffSize}
            onChange={(e) => setStaffSize(e.target.value)}
          />
        </label>
        <label>
          En Recrutement?:
          <input
            type="checkbox"
            value={isItRecruiting}
            onChange={(e) => setIsItRecruiting(e.target.value)}
          />
        </label>
        <button onClick={""}>Completer mon profil</button>
      </form>
    </div>
  );
};
