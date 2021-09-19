import React, { useEffect, useState } from "react";
import CompanyInfoManager from '../../../Services/RailsApi/CompaniesFetch/CompanyInfoManager';
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';
import './edit_company_form.scss';
import { UserStacksContext } from "../../../Context/UserStacksContext";
import ChipsArray from "../../FilterSystem/ChipsArray";
import { v4 as uuidv4 } from 'uuid';

export const EditCompanyForm
 = () => {
    const companyId = useSelector(state => state.user.id);
    console.log(companyId)
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [github_link, setGithub_Link] = useState("");
    const [staff_size, setStaff_Size] = useState("");
    const [is_it_recruiting, setIs_It_Recruiting] = useState(false);
    const [website_link, setWebsite_Link] = useState("");
    const [chipData, setChipData] = useState([]);

    const [stacks, setStacks] = useState("");
    // const [company_category_id, setCompany_Category_Id] = useState(0);


    const getCompanyDetail = async() => {
        const detail = await CompanyInfoManager.getDetails(companyId)
        console.log(detail)
        setName(detail.data.name)
        setDescription(detail.data.description)
        setGithub_Link(detail.data.github_link)
        setStaff_Size(detail.data.staff_size)
        setIs_It_Recruiting(detail.data.is_it_recruiting)
        setWebsite_Link(detail.data.website_link)

        getUserStacks(detail.data.company_stacks)
        //setStack(detail.stack)
        // setCompany_Category_Id(detail.data.company_category_id)

    }

    useEffect (() => {
        getCompanyDetail()
    }, []);

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
     
     

    const history = useHistory();

    const updateCompanyDetails = async (e) => {
        e.preventDefault();
        const response = await CompanyInfoManager.updateDetails(
            companyId, 
            name, 
            description, 
            github_link, 
            staff_size, 
            is_it_recruiting,
            website_link
            //company_category_id, stack 
            );
        Promise.resolve(response)
        history.push(`/company/dashboard`)
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
                        value={name? name : ""}
                        onChange={(e)=>setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Description
                        <input
                        type="text"
                        value={description? description : ""}
                        onChange={(e)=>setDescription(e.target.value)}
                        />
                    </label>
                    <label>
                        Lien GitHub
                        <input
                        type="text"
                        value={github_link? github_link: ""}
                        onChange={(e)=>setGithub_Link(e.target.value)}/>
                    </label>
                    <label>
                        Website Link
                        <input
                        type="text"
                        value={website_link? website_link: ""}
                        onChange={(e)=>setWebsite_Link(e.target.value)}/>
                    </label>
                    <label>
                        Effectifs
                        <input
                        type="text"
                        value={staff_size? staff_size : ""}
                        onChange={(e)=>setStaff_Size(e.target.value)}/>
                    </label>
                    {/* <label>
                        Catégorie
                        <input
                        type="number"
                        value={company_category_id? company_category_id : 0 }
                        onChange={(e)=>setCompany_Category_Id(e.target.value)}
                        />
                    </label> */}
                    <label>
                        Recrutement
                        <input
                        type="checkbox"
                        value={is_it_recruiting? is_it_recruiting : ""}
                        onChange={()=>setIs_It_Recruiting(!is_it_recruiting)}
                        //checked= {is_it_recruiting? "checked" : ""}
                        />
                        {console.log(is_it_recruiting)}
                    </label>
                    {/* <label>
                        Stacks
                        <input
                        type="text"
                        value={stack? stack : ""}/>
                    </label> */}
                    <button onClick={updateCompanyDetails}>sauvegarder</button>

                </form>
                <div>
                <ChipsArray/>
                </div>

            </div>
        </div>
        </UserStacksContext.Provider>
    )

}