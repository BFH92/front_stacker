import React, { useEffect, useState } from "react";
import CompanyInfoManager from "../../../Services/RailsApi/CompaniesFetch/CompanyInfoManager";
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';
import './edit_company_form.scss';
import { UserStacksContext } from "../../../Context/UserStacksContext";
import ChipsArray from "../../FilterSystem/ChipsArray";
import { v4 as uuidv4 } from 'uuid';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const EditCompanyForm = () => {
    const companyId = useSelector(state => state.user.id);
    console.log(companyId)
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [staffSize, setStaffSize] = useState("");
    const [isItRecruiting, setIsItRecruiting] = useState(false);
    const [websiteLink, setWebsiteLink] = useState("");
    const [chipData, setChipData] = useState([]);

    const [stacks, setStacks] = useState("");
    // const [company_category_id, setCompany_Category_Id] = useState(0);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: name,
      description: description,
      githubLink: githubLink,
      staffSize: staffSize,
      isItRecruiting: isItRecruiting,
      websiteLink: websiteLink,
    },
  });

  const getCompanyDetail = async () => {
    const detail = await CompanyInfoManager.getDetails(companyId);
    console.log(detail);
    setName(detail.data.name);
    setDescription(detail.data.description);
    setGithubLink(detail.data.github_link);
    setStaffSize(detail.data.staff_size);
    setIsItRecruiting(detail.data.is_it_recruiting);
    setWebsiteLink(detail.data.website_link);
    // setStack(detail.stack)
    // setCompany_Category_Id(detail.data.company_category_id)
  };

  useEffect(() => {
    getCompanyDetail();
  }, []);

  const history = useHistory();
//TODO: À RETROUVER
const getUserStacks = (list) => {
    let stacksList = new Set()
    list.map((userStack)=>{
    stacksList.add(userStack.name)
})
    stacksList = Array.from(stacksList);
    addExistingStacks(stacksList)
}
const addExistingStacks =(list)=> {

    let StackList =[] 
    list.map((stack)=>{
    StackList.push({ key: uuidv4(), label: stack})
    
    })
    setChipData(StackList)
  }
 

const updateCompanyDetails = async (e) => {
    //e.preventDefault();
    const response = await CompanyInfoManager.updateDetails(
      companyId,
      name,
      description,
      githubLink,
      staffSize,
      isItRecruiting,
      websiteLink
      //company_category_id, stack
    );
    Promise.resolve(response);
    history.push(`/company/dashboard`);
  };

  return (
    <UserStacksContext.Provider value={{chipData , setChipData}}>
    <div>
      <h3>Modifier la présentation</h3>
      <div className="form__container--company">
        <form>
          <label>
            Nom
            <input
              type="text"
              value={name ? name : ""}
              {...register("name", { required: true })}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <ErrorMessage
            errors={errors}
            name="name"
            render={() => (
              <p>
                <strong>Nom d'entreprise requis</strong>
              </p>
            )}
          />
          <label>
            Description
            <input
              type="text"
              value={description ? description : ""}
              {...register("descrition", {
                required: true,
                minLength: 20,
              })}
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
              {...register("githubLink", { required: true })}
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
          <label>
            Website Link
            <input
              type="text"
              value={websiteLink ? websiteLink : ""}
              {...register("websiteLink", { required: true })}
              onChange={(e) => setWebsiteLink(e.target.value)}
            />
          </label>
          <ErrorMessage
            errors={errors}
            name="websiteLink"
            render={() => (
              <p>
                <strong>Format de lien non valide</strong>
              </p>
            )}
          />
          <label>
            Effectifs
            <input
              type="text"
              value={staffSize ? staffSize : ""}
              {...register("staffSize", { required: true })}
              onChange={(e) => setStaffSize(e.target.value)}
            />
          </label>
          <ErrorMessage
            errors={errors}
            name="staffSize"
            render={() => (
              <p>
                <strong>Taille des effectifs requis</strong>
              </p>
            )}
          />
          <label>
            Recrutement
            <input
              type="checkbox"
              value={isItRecruiting ? isItRecruiting : ""}
              onChange={() => setIsItRecruiting(!isItRecruiting)}
            />
          </label>
          <button onClick={()=>handleSubmit(updateCompanyDetails)}>
            Sauvegarder
          </button>
        </form>
        <div>
            <ChipsArray/>
        </div>
      </div>
      
    </div>
    </UserStacksContext.Provider>
  );
};
