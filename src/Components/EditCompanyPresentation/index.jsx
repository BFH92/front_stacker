import React, { useEffect, useState } from "react";
import CompanyInfoManager from '../../Services/RailsApi/CompanyInfoManager';
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';

export const EditCompanyPresentation = () => {
    const companyId = useSelector(state => state.company.id);
    console.log(companyId)
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [github_link, setGithub_Link] = useState("");
    const [staff_size, setStaff_Size] = useState("");
    const [company_category_id, setCompany_Category_Id] = useState("");
    const [is_it_recruiting, setIs_It_Recruiting] = useState("");
    //const [stack, setStack] = useState("");

    const getCompanyDetail = async() => {
        const detail = await CompanyInfoManager.getDetails(companyId)
        console.log(detail)
        setName(detail.data.name)
        setDescription(detail.data.description)
        setGithub_Link(detail.data.github_link)
        setStaff_Size(detail.data.staff_size)
        setCompany_Category_Id(detail.data.company_category_id)
        setIs_It_Recruiting(detail.data.is_it_recruiting)
        // setStack(detail.stack)
    }

    useEffect (() => {
        getCompanyDetail()
    }, []);

    const history = useHistory();

    const updateCompanyDetails = async (e) => {
        e.preventDefault();
        const response = await CompanyInfoManager.updateDetails(
            companyId, 
            name, 
            description, 
            github_link, 
            staff_size, 
            company_category_id, 
            is_it_recruiting 
            //,stack
            );
        Promise.resolve(response)
        history.push(`/company/dashboard`)
    };

    return (
        <div>
            <h3>Modifier la présentation</h3>
            <div>
                <form>
                    <label>
                        Nom
                        <input
                        type="text"
                        value={name? name : ""}/>
                    </label>
                    <label>
                        Description
                        <input
                        type="text"
                        value={description? description : ""}/>
                    </label>
                    <label>
                        Lien GitHub
                        <input
                        type="text"
                        value={github_link? github_link : ""}/>
                    </label>
                    <label>
                        Effectifs
                        <input
                        type="text"
                        value={staff_size? staff_size : ""}/>
                    </label>
                    <label>
                        Catégorie
                        <input
                        type="text"
                        value={company_category_id? company_category_id : ""}/>
                    </label>
                    <label>
                        Recrutement
                        <input
                        type="text"
                        value={is_it_recruiting? is_it_recruiting : ""}/>
                    </label>
                    {/* <label>
                        Stacks
                        <input
                        type="text"
                        value={stack? stack : ""}/>
                    </label> */}
                    <button onClick={updateCompanyDetails}>sauvegarder</button>
                </form>
            </div>
        </div>
    )

}